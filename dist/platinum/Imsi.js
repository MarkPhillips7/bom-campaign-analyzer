System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
    'use strict';

    var bomGlobal, JsonServiceClient, SampleAppData, Imsi;
    return {
        setters: [function (_platinumGlobal) {
            bomGlobal = _platinumGlobal.bomGlobal;
        }, function (_platinumJsonServiceClient) {
            JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
        }, function (_sampleAppData) {
            SampleAppData = _sampleAppData.SampleAppData;
        }],
        execute: function () {
            Imsi = function Imsi() {

                this.Id = null;
                this.Value = null;
                this.SerialNumberId = null;
                this.ImportId = null;
                this.ImsiStatusId = null;
                this.WorkflowTrackingStatusId = null;
                this.CreateTime = null;
                this.CreateUserId = null;
                this.ModifyTime = null;
                this.ModifyUserId = null;
                this.DeleteTime = null;
                this.DeleteUserId = null;
            };

            _export('Imsi', Imsi);

            Imsi.prototype.create = function (imsi, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsi,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiCreateRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiDeleteRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiFetchRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.list = function (onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiListRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey(),
                    Where: where,
                    OrderBy: orderBy,
                    Page: page,
                    PageSize: pageSize
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiPageRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.listForSerialNumberId = function (serialNumberId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: serialNumberId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiListForSerialNumberIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.listForImportId = function (importId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: importId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiListForImportIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.listForImsiStatusId = function (imsiStatusId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: imsiStatusId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiListForImsiStatusIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            Imsi.prototype.update = function (imsi, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsi,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiUpdateRequest", request, onSuccess, onError, ajaxOptions);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN2RixDQUFDIiwiZmlsZSI6InBsYXRpbnVtL0ltc2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcbmltcG9ydCB7U2FtcGxlQXBwRGF0YX0gZnJvbSAnc2FtcGxlLWFwcC1kYXRhJztcblxuXG5leHBvcnQgdmFyIEltc2kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5WYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuU2VyaWFsTnVtYmVySWQgPSBudWxsO1xuICAgICAgICB0aGlzLkltcG9ydElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5JbXNpU3RhdHVzSWQgPSBudWxsO1xuICAgICAgICB0aGlzLldvcmtmbG93VHJhY2tpbmdTdGF0dXNJZD1udWxsO1xuICAgICAgICB0aGlzLkNyZWF0ZVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLkNyZWF0ZVVzZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuTW9kaWZ5VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuTW9kaWZ5VXNlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5EZWxldGVUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5EZWxldGVVc2VySWQgPSBudWxsO1xuICAgIH07XG5cblxuICAgIEltc2kucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKGltc2ksIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogaW1zaSxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpQ3JlYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1zaS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBJZDogaWQsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaURlbGV0ZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltc2kucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBJZDogaWQsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaUZldGNoUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1zaS5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaUxpc3RSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBJbXNpLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24od2hlcmUsIG9yZGVyQnksIHBhZ2UsIHBhZ2VTaXplLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpLFxuICAgICAgICAgICAgV2hlcmU6IHdoZXJlLFxuICAgICAgICAgICAgT3JkZXJCeTogb3JkZXJCeSxcbiAgICAgICAgICAgIFBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICBQYWdlU2l6ZTogcGFnZVNpemVcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaVBhZ2VSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBJbXNpLnByb3RvdHlwZS5saXN0Rm9yU2VyaWFsTnVtYmVySWQgPSBmdW5jdGlvbihzZXJpYWxOdW1iZXJJZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIElkOiBzZXJpYWxOdW1iZXJJZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpTGlzdEZvclNlcmlhbE51bWJlcklkUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG5cbiAgICBJbXNpLnByb3RvdHlwZS5saXN0Rm9ySW1wb3J0SWQgPSBmdW5jdGlvbihpbXBvcnRJZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIElkOiBpbXBvcnRJZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpTGlzdEZvckltcG9ydElkUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG5cbiAgICBJbXNpLnByb3RvdHlwZS5saXN0Rm9ySW1zaVN0YXR1c0lkID0gZnVuY3Rpb24oaW1zaVN0YXR1c0lkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGltc2lTdGF0dXNJZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpTGlzdEZvckltc2lTdGF0dXNJZFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuXG5cblxuICAgIEltc2kucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGltc2ksIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogaW1zaSxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpVXBkYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
