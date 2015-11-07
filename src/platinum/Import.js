import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';


export var Import = function () {

  this.Id = null;
  this.Description = null;
  this.CampaignId = null;
  this.ImportTypeId = null;
  this.FormatVersion = null;
  this.WtsFormatVersion = null;
  this.FileIdentifier = null;
  this.Author = null;
  this.Checker = null;
  this.Authoriser = null;
  this.TargetSpec = null;
  this.FileDate = null;
  this.FileContent = null;
  this.CreateTime = null;
  this.CreateUserId = null;
  this.ModifyTime = null;
  this.ModifyUserId = null;
  this.DeleteTime = null;
  this.DeleteUserId = null;
};


Import.prototype.create = function (bomImport, onSuccess, onError, ajaxOptions) {
  var request = {
    Value: bomImport,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportCreateRequest", request, onSuccess, onError, ajaxOptions);
};

Import.prototype.delete = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportDeleteRequest", request, onSuccess, onError, ajaxOptions);
};

Import.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportFetchRequest", request, onSuccess, onError, ajaxOptions);
};

Import.prototype.list = function (onSuccess, onError, ajaxOptions) {
  var request = {
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportListRequest", request, onSuccess, onError, ajaxOptions);
};

Import.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
  var request = {
    SessionId: bomGlobal.getSessionKey(),
    Where: where,
    OrderBy: orderBy,
    Page: page,
    PageSize: pageSize
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportPageRequest", request, onSuccess, onError, ajaxOptions);
};

Import.prototype.listForCampaignId = function (campaignId, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: campaignId,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportListForCampaignIdRequest", request, onSuccess, onError, ajaxOptions);
};


Import.prototype.listForImportTypeId = function (importTypeId, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: importTypeId,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportListForImportTypeIdRequest", request, onSuccess, onError, ajaxOptions);
};


Import.prototype.update = function (bomImport, onSuccess, onError, ajaxOptions) {
  var request = {
    Value: bomImport,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImportUpdateRequest", request, onSuccess, onError, ajaxOptions);
};


Import.prototype.upload = function (formData, onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    onSuccess();
    return;
  }

  formData.append('SessionId', bomGlobal.getSessionKey());
  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postFormDataToService("ImportUploadRequest", formData, onSuccess, onError, ajaxOptions);
};
