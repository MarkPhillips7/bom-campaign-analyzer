import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';


export var Export = function () {

  this.Id = null;
  this.CampaignId = null;
  this.FileContent = null;
  this.CreateTime = null;
  this.CreateUserId = null;
  this.ModifyTime = null;
  this.ModifyUserId = null;
  this.DeleteTime = null;
  this.DeleteUserId = null;
};

export var LoadFileHeader = function() {
  this.targetSpec = null;
  this.formatVersion = '01.03';
  this.fileDate = null;
  this.fileIdentifier = null;
  this.wtsFormatVersion = '01.03';
  this.description = null;
  this.author = null;
  this.date = null;
  this.checker = null;
  this.authorizer = null;
};


Export.prototype.generateExport = function (header, campaignIds, exportType, exportFormat, onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    setTimeout(onSuccess, 2000, SampleAppData.getGenerateExportResponse(exportFormat));
    return;
  }

  var request = {
    Header: header,
    CampaignIds: campaignIds,
    ExportType: exportType,
    ExportFormat: exportFormat,
    SessionId: bomGlobal.getSessionKey()
  };

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportRequest", request, onSuccess, onError, ajaxOptions);
};


Export.prototype.exportImport = function (importId, onSuccess, onError, ajaxOptions) {
  var request = {
    ExportId: importId,
    SessionId: bomGlobal.getSessionKey()
  };

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportImportRequest", request, onSuccess, onError, ajaxOptions);
};


Export.prototype.create = function (bomExport, onSuccess, onError, ajaxOptions) {
  var request = {
    Value: bomExport,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportCreateRequest", request, onSuccess, onError, ajaxOptions);
};

Export.prototype.delete = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportDeleteRequest", request, onSuccess, onError, ajaxOptions);
};

Export.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportFetchRequest", request, onSuccess, onError, ajaxOptions);
};

Export.prototype.list = function (onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    setTimeout(onSuccess, 1000, SampleAppData.getExportListResponse());
    return;
  }

  var request = {
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportListRequest", request, onSuccess, onError, ajaxOptions);
};

Export.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
  var request = {
    SessionId: bomGlobal.getSessionKey(),
    Where: where,
    OrderBy: orderBy,
    Page: page,
    PageSize: pageSize
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportPageRequest", request, onSuccess, onError, ajaxOptions);
};

Export.prototype.listForCampaignId = function (campaignId, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: campaignId,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ExportListForCampaignIdRequest", request, onSuccess, onError, ajaxOptions);
};


