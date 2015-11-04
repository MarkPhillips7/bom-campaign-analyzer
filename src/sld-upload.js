import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Import} from 'platinum/Import';
import {ImportType} from 'platinum/ImportType';
import {bindable} from 'aurelia-framework';
import _ from "underscore";
import {FileHelper} from 'file-helper'

var self;

export class SldUpload {
  campaignId = null;
  campaignNameValidationClass='';
  campaignNotSelected = 'Select Campaign';
  campaignIdValidationClass='';
  campaignName=null;
  campaignNameToAdd='';
  campaigns = [];
  errorMessage=null;
  file=null;
  filePath = null;
  fileValidationClass='';
  heading = 'Import SLD File for Analysis';
  importTypeId = null;
  importTypeIdValidationClass='';
  importTypeName=null;
  importTypeNotSelected='Select Campaign Results Type';
  importTypes=[];
  isAddCampaignValid=false;
  isValid=false;
  notes = null;
  showAddCampaignValidationErrors=false;
  showValidationErrors=false;

  constructor() {
    self = this;
    self.resetSelections();
  }

  resetSelections(){
    self.file=null;
    self.filePath=null;
    self.importTypeId=null;
    self.campaignId=null;
    self.campaignNameToAdd=null;
    self.notes=null;
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;

    self.fetchCampaignList();
    self.fetchImportTypeList();

    self.validate(false);
    self.validateAddCampaign(false);
  }

  attached() {
    // Every time a modal is shown, if it has an autofocus element, focus on it.
    $('.modal').on('shown.bs.modal', function() {
      $(this).find('[autofocus]').focus();
    });
  }

  validateCampaignId(){
    let isValid = self.campaignId && self.campaignId !== self.campaignNotSelected;
    self.campaignIdValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validateImportTypeId(){
    let isValid = self.importTypeId && self.importTypeId  !== self.importTypeNotSelected;
    self.importTypeIdValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validateFile(){
    let isValid = !!self.file;

    if (!isValid) {
      self.fileInvalidMessage = 'A file must be chosen.';
    }
    else {
      isValid = FileHelper.isFilenameValid(self.filePath, 'SLD');
      if (!isValid) {
        self.fileInvalidMessage = 'File must have SLD extension.';
      }
    }

    self.fileValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validate(showValidationErrors){
    self.showValidationErrors |= showValidationErrors;

    //Need to call each validate method even if 1st fails, so cannot do 'self.validateA() && self.validateB() ...'
    let isValid = self.validateCampaignId();
    isValid = self.validateImportTypeId() && isValid;
    isValid = self.validateFile() && isValid;

    self.isValid=isValid;

    return isValid;
  }

  validateAddCampaign(showValidationErrors){
    self.showAddCampaignValidationErrors |= showValidationErrors;

    self.isAddCampaignValid=self.validateCampaignName();

    return self.isAddCampaignValid;
  }

  validateCampaignName(){
    let isValid = !!self.campaignNameToAdd && self.campaignNameToAdd.length > 0;
    self.campaignNameValidationClass = isValid ? 'has-success' : self.showAddCampaignValidationErrors ? 'has-error' : '';
    return isValid;
  }

  fetchImportTypeList() {
    let importType = new ImportType();

    importType.list(importTypeListSucceeded, importTypeListFailed);

    function importTypeListSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, importTypeListReallySucceeded, importTypeListFailed);
    }

    function importTypeListReallySucceeded(response) {
      //self.importTypes = response.Values;
      self.importTypes = _.filter(response.Values,function(importType){return importType.Name.indexOf("OPM") == -1;});
    }

    function importTypeListFailed(err) {
      self.handleError(`Error loading import types: ${err}`);
    }
  }

  fetchCampaignList(campaignNameToSelect) {
    let campaign = new Campaign();

    campaign.list(campaignListSucceeded, campaignListFailed);

    function campaignListSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, campaignListReallySucceeded, campaignListFailed);
    }

    function campaignListReallySucceeded(response){
      self.campaigns = response.Values;
      if(campaignNameToSelect){
        var campaignToSelect= _.find(self.campaigns,
          function(campaign){return campaign.Name === campaignNameToSelect;});
        if(campaignToSelect){
          self.campaignId = campaignToSelect.Id;
          self.validate();
        }
        self.campaignNameToAdd=null;
      }
    }

    function campaignListFailed(err) {
      self.handleError(`Error loading campaigns: ${err}`);
    }
  }

  handleError(err){
    self.errorMessage = err;
  }

  fileSelected() {
    self.filePath=null;
    self.file=null;

    if(self.$event.target.files && self.$event.target.files.length > 0) {
      self.file = self.$event.target.files[0];
      self.filePath = self.file.name;
      self.validate();
    }
  }

  createCampaign(){
    if(!self.validateAddCampaign(true)){
      return;
    }

    let campaign = new Campaign();
    campaign.Id = 0;
    campaign.Name = self.campaignNameToAdd;
    campaign.Description = self.campaignNameToAdd;

    campaign.create(campaign, createCampaignSucceeded, createCampaignFailed);

    function createCampaignSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, createCampaignReallySucceeded, createCampaignFailed);
    }

    function createCampaignReallySucceeded(response) {
      self.fetchCampaignList(self.campaignNameToAdd);
      $('#create-campaign-modal').modal('hide');
    }

    function createCampaignFailed(err) {
      self.handleError(`Error creating campaign: ${err}`);
    }
  }

  submit() {
    if (!self.validate(true)) {
      return;
    }

    self.campaignName = _.find(self.campaigns,function(campaign){return campaign.Id == self.campaignId;}).Name;
    self.importTypeName = _.find(self.importTypes,function(importType){return importType.Id == self.importTypeId;}).Name;

    $('#are-you-sure-modal').modal('show');
  }

  uploadSldFile() {
    var form = $('#sld-upload-form')[0];
    var formData = new FormData(form);

    var imp = new Import();
    imp.upload(formData,submitFileSucceeded,submitFileFailed);

    function submitFileSucceeded(response) {
      console.log(response);
      bomGlobal.handlePlatinumResponse(response, submitFileReallySucceeded, submitFileFailed);
    }

    function submitFileReallySucceeded(response) {
      $('#file-upload-succeeded-modal').modal('show');
      self.resetSelections();
    }

    function submitFileFailed(err) {
      self.handleError(`Error uploading file: ${err}`);
    }
  }
}

