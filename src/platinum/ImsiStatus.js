import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';


export var ImsiStatus = function() {

        this.Id = null;
        this.Name = null;
        this.IsTerminalState = null;
        this.CreateTime = null;
        this.CreateUserId = null;
        this.ModifyTime = null;
        this.ModifyUserId = null;
        this.DeleteTime = null;
        this.DeleteUserId = null;
    };


    ImsiStatus.prototype.create = function(imsiStatus, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsiStatus,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusCreateRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiStatus.prototype.delete = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusDeleteRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiStatus.prototype.fetch = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusFetchRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiStatus.prototype.list = function(onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusListRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiStatus.prototype.page = function(where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey(),
            Where: where,
            OrderBy: orderBy,
            Page: page,
            PageSize: pageSize
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusPageRequest", request, onSuccess, onError, ajaxOptions);
    };



    ImsiStatus.prototype.update = function(imsiStatus, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: imsiStatus,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiStatusUpdateRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImsiStatus.prototype.fetchHlrallStatus = function(imsi, onSuccess, onError, ajaxOptions) {
      if (bomGlobal.isDemoMode) {
        setTimeout(onSuccess, 1000, SampleAppData.getFetchHlrallStatusResponse());
        return;
      }

      var client = new JsonServiceClient(bomGlobal.baseUrl);

      //http://localhost:3800/json/oneway/GetHlrallStatusRequest?Imsi=310470100052508
      client.send(`GetHlrallStatusRequest?Imsi=${imsi}`, null, onSuccess, onError, ajaxOptions, true);
    };

    ImsiStatus.prototype.fetchCurrentStatusForAllImsis = function(onSuccess, onError, ajaxOptions) {
      if (bomGlobal.isDemoMode) {
        onSuccess(SampleAppData.getFetchCurrentStatusForAllImsisResponse());
        return;
      }

      var client = new JsonServiceClient(bomGlobal.baseUrl);

      //http://localhost:3800/json/oneway/ImsiFetchStatusSummaryRequest
      client.send('ImsiFetchStatusSummaryRequest', null, onSuccess, onError, ajaxOptions, true);
    };
