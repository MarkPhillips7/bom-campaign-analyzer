import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';


export var ImsiHistory = function() {

        this.Id = null;
        this.ImsiId = null;
        this.HistoryActionId = null;
        this.ImsiStatusId = null;
        this.WorkflowTrackingStatusId=null;
        this.CreateTime = null;
        this.CreateUserId = null;
        this.ModifyTime = null;
        this.ModifyUserId = null;
        this.DeleteTime = null;
        this.DeleteUserId = null;
    };


    ImsiHistory.prototype.create = function(imsiHistory, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsiHistory,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryCreateRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiHistory.prototype.delete = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryDeleteRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiHistory.prototype.fetch = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryFetchRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiHistory.prototype.list = function(onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryListRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiHistory.prototype.page = function(where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey(),
            Where: where,
            OrderBy: orderBy,
            Page: page,
            PageSize: pageSize
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryPageRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiHistory.prototype.listForImsiId = function(imsiId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: imsiId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryListForImsiIdRequest", request, onSuccess, onError, ajaxOptions);
    };


    ImsiHistory.prototype.listForHistoryActionId = function(historyActionId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: historyActionId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryListForHistoryActionIdRequest", request, onSuccess, onError, ajaxOptions);
    };


    ImsiHistory.prototype.listForImsiStatusId = function(imsiStatusId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: imsiStatusId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryListForImsiStatusIdRequest", request, onSuccess, onError, ajaxOptions);
    };




    ImsiHistory.prototype.update = function(imsiHistory, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsiHistory,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiHistoryUpdateRequest", request, onSuccess, onError, ajaxOptions);
    };
