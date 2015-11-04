import {bomGlobal} from 'platinum/Global';
import {JsonServiceClient} from 'platinum/JsonServiceClient';
import {SampleAppData} from 'sample-app-data';

export var ImportType = function() {

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


    ImportType.prototype.create = function(importType, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: importType,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeCreateRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImportType.prototype.delete = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeDeleteRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImportType.prototype.fetch = function(id, onSuccess, onError, ajaxOptions) {
        var request = {
            Id: id,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeFetchRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImportType.prototype.list = function(onSuccess, onError, ajaxOptions) {
      if (bomGlobal.isDemoMode) {
        onSuccess(SampleAppData.getImportTypeListResponse());
        return;
      }

      var request = {
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeListRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImportType.prototype.page = function(where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
            SessionId: bomGlobal.getSessionKey(),
            Where: where,
            OrderBy: orderBy,
            Page: page,
            PageSize: pageSize
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypePageRequest", request, onSuccess, onError, ajaxOptions);
    };



    ImportType.prototype.lookup = function(name, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: name,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeLookupRequest", request, onSuccess, onError, ajaxOptions);
    };

    ImportType.prototype.update = function(importType, onSuccess, onError, ajaxOptions) {
        var request = {
            Value: importType,
            SessionId: bomGlobal.getSessionKey()
        }

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportTypeUpdateRequest", request, onSuccess, onError, ajaxOptions);
    };
