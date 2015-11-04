import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Import} from 'platinum/Import';
import {ImsiStatus} from 'platinum/ImsiStatus';
import {ImportType} from 'platinum/ImportType';
import $ from 'jquery';
import _ from "underscore";
import {bindable} from 'aurelia-framework';

var self;

export class ImsiLookup {
  environment;
  currentBcaStatus='unknown';
  currentHlrallStatus='unknown';
  errorMessage=null;
  heading = 'IMSI Lookup';
  imsi = null;
  imsiLoaded=null;
  imsiValidationClass='';
  isValid=false;
  loadingHistory=false;
  historyLoaded=false;
  showValidationErrors=false;

  constructor() {
    self = this;
    self.resetSelections();
  }

  resetSelections(){
    self.imsi=null;
    self.currentBcaStatus='unknown';
    self.currentHlrallStatus='unknown';
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;
    self.validate(false);
  }

  fetchSerialNumberTrackingAnalysisHistory(gridArgs) {
    let dataToReturn = [];
    let totalCount = 0;

    if (!!self.analysisData) {
      totalCount = self.analysisData.SerialNumberHistoryRecords.length;
      dataToReturn = _.chain(self.analysisData.SerialNumberHistoryRecords)
          .sortBy(history => history.ModifyTime)
          .reverse()
          .value();
    }

    return new Promise(function (resolve, reject) {
      resolve({
        data: dataToReturn,
        count: totalCount
      });
    });
  }

  fetchCampaignAnalysisHistory(gridArgs) {
    let dataToReturn = [];
    let totalCount = 0;

    if (!!self.analysisData) {
      totalCount = self.analysisData.ImsiHistoryRecords.length;
      dataToReturn = _.chain(self.analysisData.ImsiHistoryRecords)
          .sortBy(history => history.CreateTime)
          .reverse()
          .value();
    }

    // Alternate approach if we had html settings like this:
  //<grid id="campaign-history-grid"
  //  read.call="fetchCampaignAnalysisHistory($event)"
  //  server-paging="true"
  //  server-filtering="true"
  //  no-rows-message="Sorry, no campaign analyzer records found"
  //  grid-height.bind="300">

    // Then we could do something like this (and this even works)
    //if (!!self.analysisData) {
    //  totalCount = self.analysisData.ImsiHistoryRecords.length;
    //  dataToReturn = _.chain(self.analysisData.ImsiHistoryRecords)
    //      .sortBy(history => history.CreateTime)
    //      .first(gridArgs.paging.size * gridArgs.paging.page)
    //      .rest(gridArgs.paging.size * (gridArgs.paging.page - 1))
    //      .value();
    //}

    return new Promise(function (resolve, reject) {
      resolve({
        data: dataToReturn,
        count: totalCount
      });
    });
  }

  fetchHlrallStatus = (() => {
    var fetchData=(() =>  {
      return new Promise(function (resolve, reject) {
        let imsiStatus = new ImsiStatus();
        imsiStatus.fetchHlrallStatus(self.imsi, resolve, reject);
      });
    });

    var hlrallStatusSucceeded=(response => {
        return new Promise(function (resolve, reject) {
          console.log(response);
          bomGlobal.handlePlatinumResponse(response, resolve, reject);
        });
    });

    var hlrallStatusReallySucceeded=(response => {
    self.currentHlrallStatus = response.IsInHrlAll ? 'IN HLRALL' : 'NOT IN HLRALL';
    });

    var hlrallStatusFailed=(err =>  {
      self.loadingHistory=false;
    var errorMessage = `Error fetching current hlrall status: ${err}`;
    self.handleError(errorMessage);
    });

    return fetchData()
      .then(hlrallStatusSucceeded)
      .then(hlrallStatusReallySucceeded)
      .catch(hlrallStatusFailed);
  });

  fetchAnalysisHistory = (() => {
    var fetchData=(() =>  {
      return new Promise(function (resolve, reject) {
        let campaign = new Campaign();
        campaign.imsiAnalysisSummary(self.imsi, resolve, reject);
      });
    });

    var analysisSucceeded=(response => {
      return new Promise(function (resolve, reject) {
        console.log(response);
        bomGlobal.handlePlatinumResponse(response, resolve, reject);
      });
    });

    var analysisReallySucceeded=(response => {
      self.loadingHistory=false;
      self.historyLoaded=true;
      self.imsiLoaded = self.imsi;
      self.imsi = null;
      self.analysisData = response;
      self.currentBcaStatus= response.ImsiHistoryRecords.length > 0
        ? _.last(_.sortBy(response.ImsiHistoryRecords,history => history.CreateTime)).ImsiStatus
        : 'unknown';
      $('#campaign-history-grid')[0].grid.refresh();
      $('#serial-number-history-grid')[0].grid.refresh();
    });

    var analysisFailed=(err =>  {
      self.loadingHistory=false;
      self.errorLoadingAnalysisData = `Error fetching analysis data: ${err}`;
      self.handleError(self.errorLoadingAnalysisData);
    });

    return fetchData()
      .then(analysisSucceeded)
      .then(analysisReallySucceeded)
      .catch(analysisFailed);
  });

  validateImsi(){
    let isValid = !!self.imsi;
    self.imsiValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validate(showValidationErrors){
    self.showValidationErrors |= showValidationErrors;

    self.isValid = self.validateImsi();

    return self.isValid;
  }

  handleError(err){
    self.errorMessage = err;
  }

  submit() {
    if (!self.validate(true)) {
      return;
    }

    self.imsiLoaded = null;
    self.currentBcaStatus='unknown';
    self.loadingHistory = true;
    self.historyLoaded = false;

    self.fetchAnalysisHistory();
    self.fetchHlrallStatus();
  }
}

