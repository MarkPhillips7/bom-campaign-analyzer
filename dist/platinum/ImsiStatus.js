System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
    'use strict';

    var bomGlobal, JsonServiceClient, SampleAppData, ImsiStatus;
    return {
        setters: [function (_platinumGlobal) {
            bomGlobal = _platinumGlobal.bomGlobal;
        }, function (_platinumJsonServiceClient) {
            JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
        }, function (_sampleAppData) {
            SampleAppData = _sampleAppData.SampleAppData;
        }],
        execute: function () {
            ImsiStatus = function ImsiStatus() {

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

            _export('ImsiStatus', ImsiStatus);

            ImsiStatus.prototype.create = function (imsiStatus, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsiStatus,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusCreateRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusDeleteRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
                var request = {
                    Id: id,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusFetchRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype.list = function (onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusListRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
                var request = {
                    SessionId: bomGlobal.getSessionKey(),
                    Where: where,
                    OrderBy: orderBy,
                    Page: page,
                    PageSize: pageSize
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusPageRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype.update = function (imsiStatus, onSuccess, onError, ajaxOptions) {
                var request = {
                    Value: imsiStatus,
                    SessionId: bomGlobal.getSessionKey()
                };

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.postToService("ImsiStatusUpdateRequest", request, onSuccess, onError, ajaxOptions);
            };

            ImsiStatus.prototype.fetchHlrallStatus = function (imsi, onSuccess, onError, ajaxOptions) {
                if (bomGlobal.isDemoMode) {
                    setTimeout(onSuccess, 1000, SampleAppData.getFetchHlrallStatusResponse());
                    return;
                }

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.send('GetHlrallStatusRequest?Imsi=' + imsi, null, onSuccess, onError, ajaxOptions, true);
            };

            ImsiStatus.prototype.fetchCurrentStatusForAllImsis = function (onSuccess, onError, ajaxOptions) {
                if (bomGlobal.isDemoMode) {
                    onSuccess(SampleAppData.getFetchCurrentStatusForAllImsisResponse());
                    return;
                }

                var client = new JsonServiceClient(bomGlobal.baseUrl);

                client.send('ImsiFetchStatusSummaryRequest', null, onSuccess, onError, ajaxOptions, true);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRpbnVtL0ltc2lTdGF0dXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FEQUtXLFVBQVU7Ozt3Q0FMYixTQUFTOzsyREFDVCxpQkFBaUI7OzJDQUNqQixhQUFhOzs7QUFHVixzQkFBVSxHQUFHLFNBQWIsVUFBVSxHQUFjOztBQUUzQixvQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZixvQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsb0JBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQzVCLG9CQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixvQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsb0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixvQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsb0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCOzs7O0FBR0Qsc0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsVUFBVTtBQUNqQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM3RixDQUFDOztBQUVGLHNCQUFVLENBQUMsU0FBUyxVQUFPLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDeEUsb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDN0YsQ0FBQzs7QUFFRixzQkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDdkUsb0JBQUksT0FBTyxHQUFHO0FBQ1Ysc0JBQUUsRUFBRSxFQUFFO0FBQ04sNkJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO2lCQUN2QyxDQUFBOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsc0JBQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDNUYsQ0FBQzs7QUFFRixzQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBUyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNsRSxvQkFBSSxPQUFPLEdBQUc7QUFDViw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUMzRixDQUFDOztBQUVGLHNCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNsRyxvQkFBSSxPQUFPLEdBQUc7QUFDViw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7QUFDcEMseUJBQUssRUFBRSxLQUFLO0FBQ1osMkJBQU8sRUFBRSxPQUFPO0FBQ2hCLHdCQUFJLEVBQUUsSUFBSTtBQUNWLDRCQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQTs7QUFFRCxvQkFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRELHNCQUFNLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzNGLENBQUM7O0FBSUYsc0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLG9CQUFJLE9BQU8sR0FBRztBQUNWLHlCQUFLLEVBQUUsVUFBVTtBQUNqQiw2QkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7aUJBQ3ZDLENBQUE7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxzQkFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM3RixDQUFDOztBQUVGLHNCQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ3ZGLG9CQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDeEIsOEJBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7QUFDMUUsMkJBQU87aUJBQ1I7O0FBRUQsb0JBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUd0RCxzQkFBTSxDQUFDLElBQUksa0NBQWdDLElBQUksRUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDakcsQ0FBQzs7QUFFRixzQkFBVSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsR0FBRyxVQUFTLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQzdGLG9CQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDeEIsNkJBQVMsQ0FBQyxhQUFhLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLDJCQUFPO2lCQUNSOztBQUVELG9CQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFHdEQsc0JBQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNGLENBQUMiLCJmaWxlIjoicGxhdGludW0vSW1zaVN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9tR2xvYmFsfSBmcm9tICdwbGF0aW51bS9HbG9iYWwnO1xuaW1wb3J0IHtKc29uU2VydmljZUNsaWVudH0gZnJvbSAncGxhdGludW0vSnNvblNlcnZpY2VDbGllbnQnO1xuaW1wb3J0IHtTYW1wbGVBcHBEYXRhfSBmcm9tICdzYW1wbGUtYXBwLWRhdGEnO1xuXG5cbmV4cG9ydCB2YXIgSW1zaVN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuSWQgPSBudWxsO1xuICAgICAgICB0aGlzLk5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLklzVGVybWluYWxTdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuQ3JlYXRlVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuQ3JlYXRlVXNlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5Nb2RpZnlUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5Nb2RpZnlVc2VySWQgPSBudWxsO1xuICAgICAgICB0aGlzLkRlbGV0ZVRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLkRlbGV0ZVVzZXJJZCA9IG51bGw7XG4gICAgfTtcblxuXG4gICAgSW1zaVN0YXR1cy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oaW1zaVN0YXR1cywgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFZhbHVlOiBpbXNpU3RhdHVzLFxuICAgICAgICAgICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICAgICAgICBjbGllbnQucG9zdFRvU2VydmljZShcIkltc2lTdGF0dXNDcmVhdGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBJbXNpU3RhdHVzLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbihpZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIElkOiBpZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpU3RhdHVzRGVsZXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbiAgICB9O1xuXG4gICAgSW1zaVN0YXR1cy5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbihpZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIElkOiBpZCxcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpU3RhdHVzRmV0Y2hSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBJbXNpU3RhdHVzLnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24ob25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpU3RhdHVzTGlzdFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltc2lTdGF0dXMucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbih3aGVyZSwgb3JkZXJCeSwgcGFnZSwgcGFnZVNpemUsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KCksXG4gICAgICAgICAgICBXaGVyZTogd2hlcmUsXG4gICAgICAgICAgICBPcmRlckJ5OiBvcmRlckJ5LFxuICAgICAgICAgICAgUGFnZTogcGFnZSxcbiAgICAgICAgICAgIFBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgICAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJJbXNpU3RhdHVzUGFnZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuXG5cbiAgICBJbXNpU3RhdHVzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihpbXNpU3RhdHVzLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgVmFsdWU6IGltc2lTdGF0dXMsXG4gICAgICAgICAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAgIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaVN0YXR1c1VwZGF0ZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIEltc2lTdGF0dXMucHJvdG90eXBlLmZldGNoSGxyYWxsU3RhdHVzID0gZnVuY3Rpb24oaW1zaSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICAgICAgaWYgKGJvbUdsb2JhbC5pc0RlbW9Nb2RlKSB7XG4gICAgICAgIHNldFRpbWVvdXQob25TdWNjZXNzLCAxMDAwLCBTYW1wbGVBcHBEYXRhLmdldEZldGNoSGxyYWxsU3RhdHVzUmVzcG9uc2UoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDozODAwL2pzb24vb25ld2F5L0dldEhscmFsbFN0YXR1c1JlcXVlc3Q/SW1zaT0zMTA0NzAxMDAwNTI1MDhcbiAgICAgIGNsaWVudC5zZW5kKGBHZXRIbHJhbGxTdGF0dXNSZXF1ZXN0P0ltc2k9JHtpbXNpfWAsIG51bGwsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMsIHRydWUpO1xuICAgIH07XG5cbiAgICBJbXNpU3RhdHVzLnByb3RvdHlwZS5mZXRjaEN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcyA9IGZ1bmN0aW9uKG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgICAgIGlmIChib21HbG9iYWwuaXNEZW1vTW9kZSkge1xuICAgICAgICBvblN1Y2Nlc3MoU2FtcGxlQXBwRGF0YS5nZXRGZXRjaEN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpc1Jlc3BvbnNlKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzgwMC9qc29uL29uZXdheS9JbXNpRmV0Y2hTdGF0dXNTdW1tYXJ5UmVxdWVzdFxuICAgICAgY2xpZW50LnNlbmQoJ0ltc2lGZXRjaFN0YXR1c1N1bW1hcnlSZXF1ZXN0JywgbnVsbCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucywgdHJ1ZSk7XG4gICAgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
