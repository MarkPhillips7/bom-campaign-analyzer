System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
  'use strict';

  var bomGlobal, JsonServiceClient, SampleAppData, Import;
  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumJsonServiceClient) {
      JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
    }, function (_sampleAppData) {
      SampleAppData = _sampleAppData.SampleAppData;
    }],
    execute: function () {
      Import = function Import() {

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

      _export('Import', Import);

      Import.prototype.create = function (bomImport, onSuccess, onError, ajaxOptions) {
        var request = {
          Value: bomImport,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportCreateRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportDeleteRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportFetchRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype.list = function (onSuccess, onError, ajaxOptions) {
        var request = {
          SessionId: bomGlobal.getSessionKey()
        };

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
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportPageRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype.listForCampaignId = function (campaignId, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: campaignId,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportListForCampaignIdRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype.listForImportTypeId = function (importTypeId, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: importTypeId,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImportListForImportTypeIdRequest", request, onSuccess, onError, ajaxOptions);
      };

      Import.prototype.update = function (bomImport, onSuccess, onError, ajaxOptions) {
        var request = {
          Value: bomImport,
          SessionId: bomGlobal.getSessionKey()
        };

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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RSxXQUFXLEVBQUU7QUFDN0UsWUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO0FBQ3hCLG1CQUFTLEVBQUUsQ0FBQztBQUNaLGlCQUFPO1NBQ1I7O0FBRUQsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMscUJBQXFCLENBQUMscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7T0FDaEcsQ0FBQyIsImZpbGUiOiJwbGF0aW51bS9JbXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcbmltcG9ydCB7U2FtcGxlQXBwRGF0YX0gZnJvbSAnc2FtcGxlLWFwcC1kYXRhJztcblxuXG5leHBvcnQgdmFyIEltcG9ydCA9IGZ1bmN0aW9uICgpIHtcblxuICB0aGlzLklkID0gbnVsbDtcbiAgdGhpcy5EZXNjcmlwdGlvbiA9IG51bGw7XG4gIHRoaXMuQ2FtcGFpZ25JZCA9IG51bGw7XG4gIHRoaXMuSW1wb3J0VHlwZUlkID0gbnVsbDtcbiAgdGhpcy5Gb3JtYXRWZXJzaW9uID0gbnVsbDtcbiAgdGhpcy5XdHNGb3JtYXRWZXJzaW9uID0gbnVsbDtcbiAgdGhpcy5GaWxlSWRlbnRpZmllciA9IG51bGw7XG4gIHRoaXMuQXV0aG9yID0gbnVsbDtcbiAgdGhpcy5DaGVja2VyID0gbnVsbDtcbiAgdGhpcy5BdXRob3Jpc2VyID0gbnVsbDtcbiAgdGhpcy5UYXJnZXRTcGVjID0gbnVsbDtcbiAgdGhpcy5GaWxlRGF0ZSA9IG51bGw7XG4gIHRoaXMuRmlsZUNvbnRlbnQgPSBudWxsO1xuICB0aGlzLkNyZWF0ZVRpbWUgPSBudWxsO1xuICB0aGlzLkNyZWF0ZVVzZXJJZCA9IG51bGw7XG4gIHRoaXMuTW9kaWZ5VGltZSA9IG51bGw7XG4gIHRoaXMuTW9kaWZ5VXNlcklkID0gbnVsbDtcbiAgdGhpcy5EZWxldGVUaW1lID0gbnVsbDtcbiAgdGhpcy5EZWxldGVVc2VySWQgPSBudWxsO1xufTtcblxuXG5JbXBvcnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChib21JbXBvcnQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgVmFsdWU6IGJvbUltcG9ydCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0Q3JlYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkltcG9ydC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIElkOiBpZCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0RGVsZXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkltcG9ydC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgSWQ6IGlkLFxuICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICB9XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXBvcnRGZXRjaFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuXG5JbXBvcnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0TGlzdFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuXG5JbXBvcnQucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbiAod2hlcmUsIG9yZGVyQnksIHBhZ2UsIHBhZ2VTaXplLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKSxcbiAgICBXaGVyZTogd2hlcmUsXG4gICAgT3JkZXJCeTogb3JkZXJCeSxcbiAgICBQYWdlOiBwYWdlLFxuICAgIFBhZ2VTaXplOiBwYWdlU2l6ZVxuICB9XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXBvcnRQYWdlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkltcG9ydC5wcm90b3R5cGUubGlzdEZvckNhbXBhaWduSWQgPSBmdW5jdGlvbiAoY2FtcGFpZ25JZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBJZDogY2FtcGFpZ25JZCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0TGlzdEZvckNhbXBhaWduSWRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuXG5JbXBvcnQucHJvdG90eXBlLmxpc3RGb3JJbXBvcnRUeXBlSWQgPSBmdW5jdGlvbiAoaW1wb3J0VHlwZUlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIElkOiBpbXBvcnRUeXBlSWQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH1cblxuICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICBjbGllbnQucG9zdFRvU2VydmljZShcIkltcG9ydExpc3RGb3JJbXBvcnRUeXBlSWRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuXG5JbXBvcnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChib21JbXBvcnQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgVmFsdWU6IGJvbUltcG9ydCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0VXBkYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cblxuSW1wb3J0LnByb3RvdHlwZS51cGxvYWQgPSBmdW5jdGlvbiAoZm9ybURhdGEsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgaWYgKGJvbUdsb2JhbC5pc0RlbW9Nb2RlKSB7XG4gICAgb25TdWNjZXNzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9ybURhdGEuYXBwZW5kKCdTZXNzaW9uSWQnLCBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpKTtcbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RGb3JtRGF0YVRvU2VydmljZShcIkltcG9ydFVwbG9hZFJlcXVlc3RcIiwgZm9ybURhdGEsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
