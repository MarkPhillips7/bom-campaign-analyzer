System.register(['platinum/Global', 'platinum/JsonServiceClient'], function (_export) {
    'use strict';

    var bomGlobal, JsonServiceClient, HistoryAction;
    return {
        setters: [function (_platinumGlobal) {
            bomGlobal = _platinumGlobal.bomGlobal;
        }, function (_platinumJsonServiceClient) {
            JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
        }],
        execute: function () {
            HistoryAction = function HistoryAction() {

                this.Id = null;
                this.Name = null;
                this.CreateTime = null;
                this.CreateUserId = null;
                this.ModifyTime = null;
                this.ModifyUserId = null;
                this.DeleteTime = null;
                this.DeleteUserId = null;
            };

            _export('HistoryAction', HistoryAction);

            HistoryAction.prototype.create = function (historyAction, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: historyAction,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionCreateRequest", request, onSuccess, onError, ajaxOptions);
            };

            HistoryAction.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionDeleteRequest", request, onSuccess, onError, ajaxOptions);
            };

            HistoryAction.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionFetchRequest", request, onSuccess, onError, ajaxOptions);
            };

            HistoryAction.prototype.list = function (onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionListRequest", request, onSuccess, onError, ajaxOptions);
            };

            HistoryAction.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey(),
                    Where: where,
                    OrderBy: orderBy,
                    Page: page,
                    PageSize: pageSize
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionPageRequest", request, onSuccess, onError, ajaxOptions);
            };

            HistoryAction.prototype.update = function (historyAction, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: historyAction,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("HistoryActionUpdateRequest", request, onSuccess, onError, ajaxOptions);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRpbnVtL0hpc3RvcnlBY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NDQUlXLGFBQWE7Ozt3Q0FKaEIsU0FBUzs7MkRBQ1QsaUJBQWlCOzs7QUFHZCx5QkFBYSxHQUFHLFNBQWhCLGFBQWEsR0FBYzs7QUFFOUIsb0JBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2Ysb0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLG9CQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixvQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsb0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixvQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsb0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCOzs7O0FBR0QseUJBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ3RGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsYUFBYTtBQUNwQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNoRyxDQUFDOztBQUVGLHlCQUFhLENBQUMsU0FBUyxVQUFPLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDM0Usb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDaEcsQ0FBQzs7QUFFRix5QkFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDMUUsb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDL0YsQ0FBQzs7QUFFRix5QkFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBUyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNyRSxvQkFBSSxPQUFPLEdBQUc7QUFDViw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM5RixDQUFDOztBQUVGLHlCQUFhLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNyRyxvQkFBSSxPQUFPLEdBQUc7QUFDViw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7QUFDcEMseUJBQUssRUFBRSxLQUFLO0FBQ1osMkJBQU8sRUFBRSxPQUFPO0FBQ2hCLHdCQUFJLEVBQUUsSUFBSTtBQUNWLDRCQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQTs7QUFFRCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRELHNCQUFNLENBQUMsYUFBYSxDQUFDLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzlGLENBQUM7O0FBSUYseUJBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ3RGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsYUFBYTtBQUNwQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNoRyxDQUFDIiwiZmlsZSI6InBsYXRpbnVtL0hpc3RvcnlBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcblxuXG5leHBvcnQgdmFyIEhpc3RvcnlBY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5OYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5DcmVhdGVUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5DcmVhdGVVc2VySWQgPSBudWxsO1xuICAgICAgICB0aGlzLk1vZGlmeVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLk1vZGlmeVVzZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuRGVsZXRlVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuRGVsZXRlVXNlcklkID0gbnVsbDtcbiAgICB9O1xuXG5cbiAgICBIaXN0b3J5QWN0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihoaXN0b3J5QWN0aW9uLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgVmFsdWU6IGhpc3RvcnlBY3Rpb24sXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSGlzdG9yeUFjdGlvbkNyZWF0ZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEhpc3RvcnlBY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGlkLFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkhpc3RvcnlBY3Rpb25EZWxldGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBIaXN0b3J5QWN0aW9uLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgSWQ6IGlkLFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkhpc3RvcnlBY3Rpb25GZXRjaFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEhpc3RvcnlBY3Rpb24ucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbihvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkhpc3RvcnlBY3Rpb25MaXN0UmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSGlzdG9yeUFjdGlvbi5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHdoZXJlLCBvcmRlckJ5LCBwYWdlLCBwYWdlU2l6ZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKSxcbiAgICAgICAgICAgIFdoZXJlOiB3aGVyZSxcbiAgICAgICAgICAgIE9yZGVyQnk6IG9yZGVyQnksXG4gICAgICAgICAgICBQYWdlOiBwYWdlLFxuICAgICAgICAgICAgUGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkhpc3RvcnlBY3Rpb25QYWdlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG5cblxuICAgIEhpc3RvcnlBY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGhpc3RvcnlBY3Rpb24sIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogaGlzdG9yeUFjdGlvbixcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJIaXN0b3J5QWN0aW9uVXBkYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
