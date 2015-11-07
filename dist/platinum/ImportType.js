System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
    'use strict';

    var bomGlobal, JsonServiceClient, SampleAppData, ImportType;
    return {
        setters: [function (_platinumGlobal) {
            bomGlobal = _platinumGlobal.bomGlobal;
        }, function (_platinumJsonServiceClient) {
            JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
        }, function (_sampleAppData) {
            SampleAppData = _sampleAppData.SampleAppData;
        }],
        execute: function () {
            ImportType = function ImportType() {

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

            _export('ImportType', ImportType);

            ImportType.prototype.create = function (importType, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: importType,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeCreateRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeDeleteRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeFetchRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype.list = function (onSuccess, onError, ajaxOptions) {
                if (bomGlobal.isDemoMode) {
                    onSuccess(SampleAppData.getImportTypeListResponse());
                    return;
                }

                var request = {
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeListRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey(),
                    Where: where,
                    OrderBy: orderBy,
                    Page: page,
                    PageSize: pageSize
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypePageRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype.lookup = function (name, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: name,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeLookupRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImportType.prototype.update = function (importType, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: importType,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImportTypeUpdateRequest", request, onSuccess, onError, ajaxOptions);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRpbnVtL0ltcG9ydFR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FEQUlXLFVBQVU7Ozt3Q0FKYixTQUFTOzsyREFDVCxpQkFBaUI7OzJDQUNqQixhQUFhOzs7QUFFVixzQkFBVSxHQUFHLFNBQWIsVUFBVSxHQUFjOztBQUUzQixvQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZixvQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsb0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLG9CQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixvQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsb0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixvQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsb0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCOzs7O0FBR0Qsc0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsVUFBVTtBQUNqQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM3RixDQUFDOztBQUVGLHNCQUFVLENBQUMsU0FBUyxVQUFPLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDeEUsb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDN0YsQ0FBQzs7QUFFRixzQkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDdkUsb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDNUYsQ0FBQzs7QUFFRixzQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBUyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNwRSxvQkFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO0FBQ3hCLDZCQUFTLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztBQUNyRCwyQkFBTztpQkFDUjs7QUFFRCxvQkFBSSxPQUFPLEdBQUc7QUFDUiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUMzRixDQUFDOztBQUVGLHNCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNsRyxvQkFBSSxPQUFPLEdBQUc7QUFDViw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7QUFDcEMseUJBQUssRUFBRSxLQUFLO0FBQ1osMkJBQU8sRUFBRSxPQUFPO0FBQ2hCLHdCQUFJLEVBQUUsSUFBSTtBQUNWLDRCQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQTs7QUFFRCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRELHNCQUFNLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzNGLENBQUM7O0FBSUYsc0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQzFFLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsSUFBSTtBQUNYLDZCQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtpQkFDdkMsQ0FBQTs7QUFFRCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRELHNCQUFNLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzdGLENBQUM7O0FBRUYsc0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsVUFBVTtBQUNqQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM3RixDQUFDIiwiZmlsZSI6InBsYXRpbnVtL0ltcG9ydFR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcbmltcG9ydCB7U2FtcGxlQXBwRGF0YX0gZnJvbSAnc2FtcGxlLWFwcC1kYXRhJztcblxuZXhwb3J0IHZhciBJbXBvcnRUeXBlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuRGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLkNyZWF0ZVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLkNyZWF0ZVVzZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuTW9kaWZ5VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuTW9kaWZ5VXNlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5EZWxldGVUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5EZWxldGVVc2VySWQgPSBudWxsO1xuICAgIH07XG5cblxuICAgIEltcG9ydFR5cGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKGltcG9ydFR5cGUsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogaW1wb3J0VHlwZSxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXBvcnRUeXBlQ3JlYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1wb3J0VHlwZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBJZDogaWQsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0VHlwZURlbGV0ZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltcG9ydFR5cGUucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBJZDogaWQsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1wb3J0VHlwZUZldGNoUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1wb3J0VHlwZS5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgIGlmIChib21HbG9iYWwuaXNEZW1vTW9kZSkge1xuICAgICAgICBvblN1Y2Nlc3MoU2FtcGxlQXBwRGF0YS5nZXRJbXBvcnRUeXBlTGlzdFJlc3BvbnNlKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltcG9ydFR5cGVMaXN0UmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1wb3J0VHlwZS5wcm90b3R5cGUucGFnZSA9IGZ1bmN0aW9uKHdoZXJlLCBvcmRlckJ5LCBwYWdlLCBwYWdlU2l6ZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKSxcbiAgICAgICAgICAgIFdoZXJlOiB3aGVyZSxcbiAgICAgICAgICAgIE9yZGVyQnk6IG9yZGVyQnksXG4gICAgICAgICAgICBQYWdlOiBwYWdlLFxuICAgICAgICAgICAgUGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltcG9ydFR5cGVQYWdlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG5cblxuICAgIEltcG9ydFR5cGUucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uKG5hbWUsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBWYWx1ZTogbmFtZSxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXBvcnRUeXBlTG9va3VwUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1wb3J0VHlwZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaW1wb3J0VHlwZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFZhbHVlOiBpbXBvcnRUeXBlLFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltcG9ydFR5cGVVcGRhdGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
