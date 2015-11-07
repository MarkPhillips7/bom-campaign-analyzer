import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Import} from 'platinum/Import';
import {Export,LoadFileHeader} from 'platinum/Export';
import {ImportType} from 'platinum/ImportType';
import $ from 'jquery';
import _ from "underscore";

var self;

export class ExportImsis {
  campaigns=null;
  campaignSelections=[];
  campaignSelectionsValidationClass='';
  errorMessage=null;
  heading = 'Export IMSIs for Reprocessing';
  imsisToExport = null;
  imsisToExportValidationClass='';
  imsisFromSelectedCampaigns = 'IMSIs marked for reprocessing from selected campaigns';
  imsisAllForReprocessing = 'All IMSIs marked for reprocessing';
  imsisFromOpmVariances = 'IMSIs marked for reprocessing from OPM variances';
  imsiSelections = [];
  isDownloading=false;
  isValid=false;
  isSldPropertiesValid=false;
  showValidationErrors=false;
  showSldPropertiesValidationErrors=false;
  targetSpec=null;
  targetSpecValidationClass='';
  formatVersion='01.03';
  userStillNeedsToClickDownloadLink=false;
  fileDate=null;
  fileDateValidationClass='';
  fileId=null;
  fileIdValidationClass='';
  wtsFormatVersion='01.03';
  description=null;
  descriptionValidationClass='';
  author=null;
  authorValidationClass='';
  checker=null;
  checkerValidationClass='';
  authorizer=null;
  authorizerValidationClass='';
  downloadUrl='';
  isDownloadReady=false;
  downloadError = '';
  isDownloadError = false;

  constructor() {
    self = this;
    self.imsiSelections = [
      self.imsisAllForReprocessing,
      self.imsisFromOpmVariances,
      self.imsisFromSelectedCampaigns];
    self.resetSelections();
  }

  resetSelections(){
    self.imsisToExport=null;
    self.campaignSelections=[];
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;
    self.fetchCampaignList();

    self.validate(false);
  }

  attached() {
    // Every time a modal is shown, if it has an autofocus element, focus on it.
    $('.modal').on('shown.bs.modal', function() {
      $(this).find('[autofocus]').focus();
    });
  }

  validateImsisToExport(){
    let isValid = !!self.imsisToExport;
    self.imsisToExportValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validateCampaignSelections(){
    let isValid = self.imsisToExport !== self.imsisFromSelectedCampaigns ||
      self.campaignSelections.length > 0;

    self.campaignSelectionsValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validate(showValidationErrors){
    self.showValidationErrors |= showValidationErrors;

    //Need to call each validate method even if 1st fails, so cannot do 'self.validateA() && self.validateB() ...'
    let isValid = self.validateImsisToExport();
    isValid = self.validateCampaignSelections() && isValid;

    self.isValid=isValid;

    return isValid;
  }

  validateSldProperties(showValidationErrors){
    self.showSldPropertiesValidationErrors |= showValidationErrors;

    //Need to call each validate method even if 1st fails, so cannot do 'self.validateA() && self.validateB() ...'
    let isValid = self.validateTargetSpec();
    isValid = self.validateFileDate() && isValid;
    isValid = self.validateFileId() && isValid;
    isValid = self.validateDescription() && isValid;
    isValid = self.validateAuthor() && isValid;
    isValid = self.validateChecker() && isValid;
    isValid = self.validateAuthorizer() && isValid;

    self.isSldPropertiesValid=isValid;

    return isValid;
  }

  validateTargetSpec(){
    let isValid = !!self.targetSpec;
    self.targetSpecValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validateFileDate(){
    let isValid = !!self.fileDate;
    self.fileDateValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  validateFileId(){
    let isValid = !!self.fileId;
    self.fileIdValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  validateDescription(){
    let isValid = !!self.description;
    self.descriptionValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  validateAuthor(){
    let isValid = !!self.author;
    self.authorValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  validateChecker(){
    let isValid = !!self.checker;
    self.checkerValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  validateAuthorizer(){
    let isValid = !!self.authorizer;
    self.authorizerValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
    return isValid;
  }
  
  fetchCampaignList() {
    let campaign = new Campaign();

    campaign.list(campaignListSucceeded, campaignListFailed);

    function campaignListSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, campaignListReallySucceeded, campaignListFailed);
    }

    function campaignListReallySucceeded(response){
      self.campaigns = response.Values;
    }

    function campaignListFailed(err) {
      self.handleError(`Error loading campaigns: ${err}`);
    }
  }
  
  downloadClicked() {
    self.userStillNeedsToClickDownloadLink = false;

    return true;
  }
  
  handleError(err){
    self.errorMessage = err;
  }

  exportToSld() {
    self.linkOffsetClass="";
    self.isDownloadReady = false;
    self.isDownloadError = false;

    if (!self.validate(true)) {
      return;
    }

    $('#enter-sld-properties-modal').modal('show');
  }

  generateSldFile() {
    if(!self.validateSldProperties(true)){
      return;
    }

    $('#enter-sld-properties-modal').modal('hide');
    self.isDownloading=true;
    self.userStillNeedsToClickDownloadLink=true;

    let header = new LoadFileHeader();
    header.TargetSpec = self.targetSpec;
    header.FormatVersion  = self.formatVersion;
    header.FileDate  = self.fileDate;
    header.FileIdentifier  = self.fileId;
    header.WtsFormatVersion = self.wtsFormatVersion;
    header.Description  = self.description;
    header.Author  = self.author;
    header.Checker  = self.checker;
    header.Authoriser  = self.authorizer;

    var xport = new Export();
    var exportType = '';
    var campaignsToUse = [];
    if (self.imsisToExport == self.imsisAllForReprocessing) {
      exportType = 'MarkedForReprocessing';
    }
    else if (self.imsisToExport == self.imsisFromOpmVariances) {
      exportType = 'MarkedForReprocessingFromOpmVariances';
    }
    else if (self.imsisToExport == self.imsisFromSelectedCampaigns) {
      exportType = 'MarkedFromSelectedCampaigns';
      campaignsToUse = self.campaignSelections;
    }

    xport.generateExport(header, campaignsToUse, exportType, 'Sld', createExportReallySucceeded, createExportFailed);

    function createExportSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, createExportReallySucceeded, createExportFailed);
    }

    function createExportReallySucceeded(response) {
      if (response.DownloadUrl) {
        self.downloadUrl = response.DownloadUrl;
        self.isDownloadReady = true;
        self.isDownloadError = false;
      }
      else {
        self.isDownloadReady = false;
        self.isDownloadError = true;
        self.downloadError = 'There are no IMSIs available for download.';
        self.userStillNeedsToClickDownloadLink = false;
      }
      self.isDownloading=false;
    }

    function createExportFailed(err) {
      self.isDownloadReady= false;
      self.isDownloadError = true;
      self.downloadError = 'An unexpected error occurred.';
      self.isDownloading=false;
      self.userStillNeedsToClickDownloadLink = false;
    }
  }

  exportToExcel() {
    self.linkOffsetClass="col-sm-offset-4";
    self.isDownloadReady = false;
    self.isDownloadError = false;

    if (!self.validate(true)) {
      return;
    }

    self.isDownloading=true;
    self.userStillNeedsToClickDownloadLink=true;

    var xport = new Export();
    var header = new LoadFileHeader();
    var campaignsToUse = [];
    var exportType = '';
    if (self.imsisToExport == self.imsisAllForReprocessing) {
      exportType = 'MarkedForReprocessing';
    }
    else if (self.imsisToExport == self.imsisFromOpmVariances) {
      exportType = 'MarkedForReprocessingFromOpmVariances';
    }
    else if (self.imsisToExport == self.imsisFromSelectedCampaigns) {
      exportType = 'MarkedFromSelectedCampaigns';
      campaignsToUse = self.campaignSelections;
    }

    xport.generateExport(header, campaignsToUse, exportType, 'Excel', exportSuccess, exportError);

    function exportError(response) {
        self.isDownloadReady= false;
        self.isDownloadError = true;
        self.downloadError = 'An unexpected error occurred.';
      self.isDownloading=false;
      self.userStillNeedsToClickDownloadLink = false;
    }
    function exportSuccess(response) {
      if (response.DownloadUrl) {
        self.downloadUrl = response.DownloadUrl;
        self.isDownloadReady = true;
        self.isDownloadError = false;
      }
      else {
        self.isDownloadReady = false;
        self.isDownloadError = true;
        self.downloadError = 'There are no IMSIs available for download.';
        self.userStillNeedsToClickDownloadLink = false;
      }
      self.isDownloading=false;
    }
  }
}

