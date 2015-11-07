import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Export} from 'platinum/Export';
import {Import} from 'platinum/Import';
import {ImsiStatus} from 'platinum/ImsiStatus';
import {DateFormatValueConverter} from 'date-format';
import moment from 'moment';
import _ from "underscore";

var self;

export class ImsiAnalysisHistory{
  currentStatusForAllImsis=null;
  analysisData=null;
  errorMessage=null;
  importDetails=null;

  constructor(){
    self=this;
  }

  handleError(err){
    self.errorMessage = err;
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;
    self.fetchAnalysisHistory();
  }

  fetchCurrentStatusForAllImsis = (() => {
    var fetchData=(() =>  {
        return new Promise(function (resolve, reject) {
          let imsiStatus = new ImsiStatus();
          imsiStatus.fetchCurrentStatusForAllImsis(resolve, reject);
        });
    });
  
    var currentStatusForAllImsisSucceeded=(response => {
        return new Promise(function (resolve, reject) {
          console.log(response);
          bomGlobal.handlePlatinumResponse(response, resolve, reject);
        });
    });
    
    var currentStatusForAllImsisReallySucceeded=(response => {
      self.currentStatusForAllImsis = _.reduce(response.Values, function(obj, nameCount) {
        var key = nameCount.Name == "Do Not Reprocess" ? 'numberMarkedAsRecord'
          : nameCount.Name == "Reprocess" ? 'numberFlaggedForReprocessing'
          : nameCount.Name == "Successful" ? 'numberMarkedAsSuccessful'
          : 'totalImsis';
        obj[key] = nameCount.Count;
        return obj;
      }, {});

      return {
        data: [ self.currentStatusForAllImsis ],
        count: 1
      };
    });
    
    var currentStatusForAllImsisFailed=(err =>  {
      self.loadingHistory=false;
      var errorMessage = `Error fetching current status for all IMSIs: ${err}`;
      self.handleError(errorMessage);
    });
    
    return fetchData()
      .then(currentStatusForAllImsisSucceeded)
      .then(currentStatusForAllImsisReallySucceeded)
      .catch(currentStatusForAllImsisFailed);
  });

  fetchOpmAnalysisHistory(gridArgs) {
    return self.waitForAnalysisResults()
      .then(self.returnOpmAnalysisHistory);
  }

  returnOpmAnalysisHistory() {
    let historyData = _.filter(self.analysisData, function(record){return record.ImportType.indexOf("OPM") > -1;});
    let dataToReturn = _.chain(historyData)
      .sortBy(history => history.ImportId)
      .reverse()
      .value();

    return {
      data: dataToReturn,
      count: dataToReturn.length
    };
  }

  fetchCampaignAnalysisHistory(gridArgs) {
    return self.waitForAnalysisResults()
      .then(self.returnCampaignAnalysisHistory);
  }

  returnCampaignAnalysisHistory() {
    let historyData = _.filter(self.analysisData, function(record){return record.ImportType.indexOf("OPM") == -1;});
    let dataToReturn = _.chain(historyData)
        .sortBy(history => history.ImportId)
        .reverse()
        .value();

    return {
      data: dataToReturn,
      count: dataToReturn.length
    };
  }

  waitForAnalysisResults() {
    let initialTime = moment();

    return new Promise(function (resolve, reject) {
      checkForDataOrWait(resolve, reject)
    });

    function checkForDataOrWait(resolve, reject) {
      const millisecondsToWait = 100;

      if (self.analysisData) {
        resolve();
        return;
      }

      if (self.errorLoadingAnalysisData) {
        reject(self.errorLoadingAnalysisData);
        return;
      }

      let now = moment();

      if (now.subtract(60, 'seconds') > initialTime) {
        let errorMessage = 'timed out waiting for analysis data to be fetched'
        self.handleError(errorMessage);
        reject(errorMessage);
      }
      else {
        setTimeout(checkForDataOrWait, millisecondsToWait, resolve, reject);
      }
    }
  }

  fetchAnalysisHistory() {
    return fetchData()
      .then(analysisSucceeded)
      .then(analysisReallySucceeded)
      .catch(analysisFailed);

    function fetchData() {
      return new Promise(function (resolve, reject) {
        let campaign = new Campaign();
        campaign.campaignAnalysisSummary(resolve, reject);
      });
    }

    function analysisSucceeded(response) {
      return new Promise(function (resolve, reject) {
        console.log(response);
        bomGlobal.handlePlatinumResponse(response, resolve, reject);
      });
    }

    function analysisReallySucceeded(response) {
      self.analysisData = response.Values;
    }

    function analysisFailed(err) {
      self.errorLoadingAnalysisData = `Error fetching analysis data: ${err}`;
      self.handleError(self.errorLoadingAnalysisData);
    }
  }

  exportItem(item) {
    item.downloadStatus = "downloading";

    var xport = new Export();
    xport.exportImport(item.ImportId, exportSuccess, exportError);

    function exportError(response) {
      item.downloadStatus = 'error';
      item.downloadError = 'An unexpected error occurred.';
    }
    function exportSuccess(response) {
      if (response.DownloadUrl) {
        item.downloadStatus = 'downloaded';
        item.downloadUrl = response.DownloadUrl
      }
      else {
        item.downloadStatus = 'error';
        item.downloadError = 'An unexpected error occurred.';
      }
    }
  }

  viewSldProperties(item) {
    var mport = new Import();
    mport.fetch(item.ImportId, fetchSucceeded, fetchError);

    function fetchError(err) {
      var errorMessage = `Error fetching import record: ${err}`;
      self.handleError(errorMessage);
    }

    function fetchSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, fetchReallySucceeded, fetchError);
    }

    function fetchReallySucceeded(response) {
      self.importDetails = response.Value;
      $('#view-sld-properties-modal').modal('show');
    }
  }

  refreshAnalysisHistory() {
    self.analysisData = null;
    self.fetchAnalysisHistory();
    $('#opm-analysis-history-grid')[0].grid.refresh();
    $('#campaign-analysis-history-grid')[0].grid.refresh();
  }

  refreshCurrentStatusForAllImsis() {
    self.currentStatusForAllImsis = null;
    self.fetchCurrentStatusForAllImsis();
    $('#current-status-for-all-imsis-grid')[0].grid.refresh();
  }
}
