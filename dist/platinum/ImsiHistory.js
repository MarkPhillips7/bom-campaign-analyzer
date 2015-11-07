System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
    'use strict';

    var bomGlobal, JsonServiceClient, SampleAppData, ImsiHistory;
    return {
        setters: [function (_platinumGlobal) {
            bomGlobal = _platinumGlobal.bomGlobal;
        }, function (_platinumJsonServiceClient) {
            JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
        }, function (_sampleAppData) {
            SampleAppData = _sampleAppData.SampleAppData;
        }],
        execute: function () {
            ImsiHistory = function ImsiHistory() {

                this.Id = null;
                this.ImsiId = null;
                this.HistoryActionId = null;
                this.ImsiStatusId = null;
                this.WorkflowTrackingStatusId = null;
                this.CreateTime = null;
                this.CreateUserId = null;
                this.ModifyTime = null;
                this.ModifyUserId = null;
                this.DeleteTime = null;
                this.DeleteUserId = null;
            };

            _export('ImsiHistory', ImsiHistory);

            ImsiHistory.prototype.create = function (imsiHistory, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsiHistory,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryCreateRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryDeleteRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryFetchRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.list = function (onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryListRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey(),
                    Where: where,
                    OrderBy: orderBy,
                    Page: page,
                    PageSize: pageSize
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryPageRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.listForImsiId = function (imsiId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: imsiId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryListForImsiIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.listForHistoryActionId = function (historyActionId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: historyActionId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryListForHistoryActionIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.listForImsiStatusId = function (imsiStatusId, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: imsiStatusId,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryListForImsiStatusIdRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiHistory.prototype.update = function (imsiHistory, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsiHistory,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiHistoryUpdateRequest", request, onSuccess, onError, ajaxOptions);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzlGLENBQUMiLCJmaWxlIjoicGxhdGludW0vSW1zaUhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcbmltcG9ydCB7U2FtcGxlQXBwRGF0YX0gZnJvbSAnc2FtcGxlLWFwcC1kYXRhJztcblxuXG5leHBvcnQgdmFyIEltc2lIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuSW1zaUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5IaXN0b3J5QWN0aW9uSWQgPSBudWxsO1xuICAgICAgICB0aGlzLkltc2lTdGF0dXNJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuV29ya2Zsb3dUcmFja2luZ1N0YXR1c0lkPW51bGw7XG4gICAgICAgIHRoaXMuQ3JlYXRlVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuQ3JlYXRlVXNlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5Nb2RpZnlUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5Nb2RpZnlVc2VySWQgPSBudWxsO1xuICAgICAgICB0aGlzLkRlbGV0ZVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLkRlbGV0ZVVzZXJJZCA9IG51bGw7XG4gICAgfTtcblxuXG4gICAgSW1zaUhpc3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKGltc2lIaXN0b3J5LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgVmFsdWU6IGltc2lIaXN0b3J5LFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltc2lIaXN0b3J5Q3JlYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1zaUhpc3RvcnkucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGlkLFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltc2lIaXN0b3J5RGVsZXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1zaUhpc3RvcnkucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBJZDogaWQsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaUhpc3RvcnlGZXRjaFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltc2lIaXN0b3J5LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24ob25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpSGlzdG9yeUxpc3RSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBJbXNpSGlzdG9yeS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHdoZXJlLCBvcmRlckJ5LCBwYWdlLCBwYWdlU2l6ZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKSxcbiAgICAgICAgICAgIFdoZXJlOiB3aGVyZSxcbiAgICAgICAgICAgIE9yZGVyQnk6IG9yZGVyQnksXG4gICAgICAgICAgICBQYWdlOiBwYWdlLFxuICAgICAgICAgICAgUGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltc2lIaXN0b3J5UGFnZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltc2lIaXN0b3J5LnByb3RvdHlwZS5saXN0Rm9ySW1zaUlkID0gZnVuY3Rpb24oaW1zaUlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGltc2lJZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpSGlzdG9yeUxpc3RGb3JJbXNpSWRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cblxuICAgIEltc2lIaXN0b3J5LnByb3RvdHlwZS5saXN0Rm9ySGlzdG9yeUFjdGlvbklkID0gZnVuY3Rpb24oaGlzdG9yeUFjdGlvbklkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGhpc3RvcnlBY3Rpb25JZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpSGlzdG9yeUxpc3RGb3JIaXN0b3J5QWN0aW9uSWRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cblxuICAgIEltc2lIaXN0b3J5LnByb3RvdHlwZS5saXN0Rm9ySW1zaVN0YXR1c0lkID0gZnVuY3Rpb24oaW1zaVN0YXR1c0lkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGltc2lTdGF0dXNJZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpSGlzdG9yeUxpc3RGb3JJbXNpU3RhdHVzSWRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cblxuXG5cbiAgICBJbXNpSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaW1zaUhpc3RvcnksIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogaW1zaUhpc3RvcnksXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaUhpc3RvcnlVcGRhdGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
