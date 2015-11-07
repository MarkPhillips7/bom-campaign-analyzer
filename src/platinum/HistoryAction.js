import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';


export var HistoryAction = function() {

        this.Id = null;
        this.Name = null;
        this.CreateTime = null;
        this.CreateUserId = null;
        this.ModifyTime = null;
        this.ModifyUserId = null;
        this.DeleteTime = null;
        this.DeleteUserId = null;
    };


    HistoryAction.prototype.create = function(historyAction, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: historyAction,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionCreateRequest", request, onSuccess, onError, ajaxOptions);
    };

    HistoryAction.prototype.delete = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionDeleteRequest", request, onSuccess, onError, ajaxOptions);
    };

    HistoryAction.prototype.fetch = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionFetchRequest", request, onSuccess, onError, ajaxOptions);
    };

    HistoryAction.prototype.list = function(onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionListRequest", request, onSuccess, onError, ajaxOptions);
    };

    HistoryAction.prototype.page = function(where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey(),
            Where: where,
            OrderBy: orderBy,
            Page: page,
            PageSize: pageSize
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionPageRequest", request, onSuccess, onError, ajaxOptions);
    };



    HistoryAction.prototype.update = function(historyAction, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: historyAction,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("HistoryActionUpdateRequest", request, onSuccess, onError, ajaxOptions);
    };
