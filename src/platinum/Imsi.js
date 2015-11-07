import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';


export var Imsi = function() {

        this.Id = null;
        this.Value = null;
        this.SerialNumberId = null;
        this.ImportId = null;
        this.ImsiStatusId = null;
        this.WorkflowTrackingStatusId=null;
        this.CreateTime = null;
        this.CreateUserId = null;
        this.ModifyTime = null;
        this.ModifyUserId = null;
        this.DeleteTime = null;
        this.DeleteUserId = null;
    };


    Imsi.prototype.create = function(imsi, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsi,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiCreateRequest", request, onSuccess, onError, ajaxOptions);
    };

    Imsi.prototype.delete = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiDeleteRequest", request, onSuccess, onError, ajaxOptions);
    };

    Imsi.prototype.fetch = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiFetchRequest", request, onSuccess, onError, ajaxOptions);
    };

    Imsi.prototype.list = function(onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiListRequest", request, onSuccess, onError, ajaxOptions);
    };

    Imsi.prototype.page = function(where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey(),
            Where: where,
            OrderBy: orderBy,
            Page: page,
            PageSize: pageSize
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiPageRequest", request, onSuccess, onError, ajaxOptions);
    };

    Imsi.prototype.listForSerialNumberId = function(serialNumberId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: serialNumberId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiListForSerialNumberIdRequest", request, onSuccess, onError, ajaxOptions);
    };


    Imsi.prototype.listForImportId = function(importId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: importId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiListForImportIdRequest", request, onSuccess, onError, ajaxOptions);
    };


    Imsi.prototype.listForImsiStatusId = function(imsiStatusId, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: imsiStatusId,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiListForImsiStatusIdRequest", request, onSuccess, onError, ajaxOptions);
    };




    Imsi.prototype.update = function(imsi, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsi,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiUpdateRequest", request, onSuccess, onError, ajaxOptions);
    };
