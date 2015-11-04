import {bomGlobal} from 'platinum/Global';
import {Campaign} from 'platinum/Campaign';
import {Import} from 'platinum/Import';
import {ImportType} from 'platinum/ImportType';
import $ from 'jquery';
import _ from "underscore";
import {FileHelper} from 'file-helper'

var self;

export class OpmVariances {
  errorMessage=null;
  file=null;
  filePath = null;
  fileValidationClass='';
  heading = 'Import SLD OPM Variance File for Analysis';
  importTypeId = null;
  importTypeIdValidationClass='';
  importTypeName=null;
  importTypeNotSelected='Select Variance Type';
  importTypes=[];
  isValid=false;
  notes = null;
  showValidationErrors=false;

  constructor() {
    self = this;
    self.resetSelections();
  }

  resetSelections(){
    self.file=null;
    self.filePath=null;
    self.importTypeId=null;
    self.notes=null;
  }

  activate(params, routeconfig) {
    self.environment=routeconfig.environment;

    self.fetchImportTypeList();

    self.validate(false);
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
      isValid = FileHelper.isFilenameValid(self.filePath, 'XLSX');
      if (!isValid) {
        self.fileInvalidMessage = 'File must have XLSX extension.';
      }
    }

    self.fileValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
    return isValid;
  }

  validate(showValidationErrors){
    self.showValidationErrors |= showValidationErrors;

    //Need to call each validate method even if 1st fails, so cannot do 'self.validateA() && self.validateB() ...'
    let isValid = self.validateImportTypeId();
    isValid = self.validateFile() && isValid;

    self.isValid=isValid;

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
      self.importTypes = _.filter(response.Values,function(importType){return importType.Name.indexOf("OPM") > -1;});
    }

    function importTypeListFailed(err) {
      self.handleError(`Error loading import types: ${err}`);
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

  submit() {
    if (!self.validate(true)) {
      return;
    }

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

