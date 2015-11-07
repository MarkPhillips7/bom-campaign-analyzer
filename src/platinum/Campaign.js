import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';

export var Campaign = function () {

  this.Id = null;
  this.Name = null;
  this.Description = null;
  this.CreateTime = null;
  this.CreateUserId = null;
  this.ModifyTime = null;
  this.ModifyUserId = null;
  this.DeleteTime = null;
  this.DeleteUserId = null;
};


Campaign.prototype.create = function (campaign, onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    onSuccess(SampleAppData.getCreateCampaignResponse(campaign));
    return;
  }

  var request = {
    Value: campaign,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignCreateRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.delete = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignDeleteRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
  var request = {
    Id: id,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignFetchRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.list = function (onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    onSuccess(SampleAppData.getCampaignListResponse());
    return;
  }

  var request = {
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignListRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
  var request = {
    SessionId: bomGlobal.getSessionKey(),
    Where: where,
    OrderBy: orderBy,
    Page: page,
    PageSize: pageSize
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignPageRequest", request, onSuccess, onError, ajaxOptions);
};


Campaign.prototype.lookup = function (name, onSuccess, onError, ajaxOptions) {
  var request = {
    Value: name,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignLookupRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.update = function (campaign, onSuccess, onError, ajaxOptions) {
  var request = {
    Value: campaign,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignUpdateRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.campaignAnalysisSummary = function (onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    setTimeout(onSuccess, 1000, SampleAppData.getCampaignAnalysisSummaryResponse());
    return;
  }

  var request = {
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("CampaignAnalysisSummaryRequest", request, onSuccess, onError, ajaxOptions);
};

Campaign.prototype.imsiAnalysisSummary = function (imsi, onSuccess, onError, ajaxOptions) {
  if (bomGlobal.isDemoMode) {
    setTimeout(onSuccess, 1000, SampleAppData.getImsiAnalysisSummaryResponse());
    return;
  }

  var request = {
    Imsi: imsi,
    SessionId: bomGlobal.getSessionKey()
  }

  var client = new JsonServiceClient(bomGlobal.baseUrl);

  client.postToService("ImsiAnalysisSummaryRequest", request, onSuccess, onError, ajaxOptions);
};
