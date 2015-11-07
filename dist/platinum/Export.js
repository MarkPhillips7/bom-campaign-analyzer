System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
  'use strict';

  var bomGlobal, JsonServiceClient, SampleAppData, Export, LoadFileHeader;
  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumJsonServiceClient) {
      JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
    }, function (_sampleAppData) {
      SampleAppData = _sampleAppData.SampleAppData;
    }],
    execute: function () {
      Export = function Export() {

        this.Id = null;
        this.CampaignId = null;
        this.FileContent = null;
        this.CreateTime = null;
        this.CreateUserId = null;
        this.ModifyTime = null;
        this.ModifyUserId = null;
        this.DeleteTime = null;
        this.DeleteUserId = null;
      };

      _export('Export', Export);

      LoadFileHeader = function LoadFileHeader() {
        this.targetSpec = null;
        this.formatVersion = '01.03';
        this.fileDate = null;
        this.fileIdentifier = null;
        this.wtsFormatVersion = '01.03';
        this.description = null;
        this.author = null;
        this.date = null;
        this.checker = null;
        this.authorizer = null;
      };

      _export('LoadFileHeader', LoadFileHeader);

      Export.prototype.generateExport = function (header, campaignIds, exportType, exportFormat, onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          setTimeout(onSuccess, 2000, SampleAppData.getGenerateExportResponse(exportFormat));
          return;
        }

        var request = {
          Header: header,
          CampaignIds: campaignIds,
          ExportType: exportType,
          ExportFormat: exportFormat,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.exportImport = function (importId, onSuccess, onError, ajaxOptions) {
        var request = {
          ExportId: importId,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportImportRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.create = function (bomExport, onSuccess, onError, ajaxOptions) {
        var request = {
          Value: bomExport,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportCreateRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportDeleteRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportFetchRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.list = function (onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          setTimeout(onSuccess, 1000, SampleAppData.getExportListResponse());
          return;
        }

        var request = {
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportListRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
          SessionId: bomGlobal.getSessionKey(),
          Where: where,
          OrderBy: orderBy,
          Page: page,
          PageSize: pageSize
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportPageRequest", request, onSuccess, onError, ajaxOptions);
      };

      Export.prototype.listForCampaignId = function (campaignId, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: campaignId,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ExportListForCampaignIdRequest", request, onSuccess, onError, ajaxOptions);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXRpbnVtL0V4cG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7bURBS1csTUFBTSxFQWFOLGNBQWM7OztrQ0FsQmpCLFNBQVM7O3FEQUNULGlCQUFpQjs7cUNBQ2pCLGFBQWE7OztBQUdWLFlBQU0sR0FBRyxTQUFULE1BQU0sR0FBZTs7QUFFOUIsWUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUN4QixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztPQUMxQjs7OztBQUVVLG9CQUFjLEdBQUcsU0FBakIsY0FBYyxHQUFjO0FBQ3JDLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzdCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzNCLFlBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7QUFDaEMsWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7T0FDeEI7Ozs7QUFHRCxZQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUMxSCxZQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDeEIsb0JBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25GLGlCQUFPO1NBQ1I7O0FBRUQsWUFBSSxPQUFPLEdBQUc7QUFDWixnQkFBTSxFQUFFLE1BQU07QUFDZCxxQkFBVyxFQUFFLFdBQVc7QUFDeEIsb0JBQVUsRUFBRSxVQUFVO0FBQ3RCLHNCQUFZLEVBQUUsWUFBWTtBQUMxQixtQkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7U0FDckMsQ0FBQzs7QUFFRixZQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsY0FBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7T0FDakYsQ0FBQzs7QUFHRixZQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNuRixZQUFJLE9BQU8sR0FBRztBQUNaLGtCQUFRLEVBQUUsUUFBUTtBQUNsQixtQkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7U0FDckMsQ0FBQzs7QUFFRixZQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsY0FBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztPQUN2RixDQUFDOztBQUdGLFlBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQzlFLFlBQUksT0FBTyxHQUFHO0FBQ1osZUFBSyxFQUFFLFNBQVM7QUFDaEIsbUJBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFO1NBQ3JDLENBQUE7O0FBRUQsWUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXRELGNBQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7T0FDdkYsQ0FBQzs7QUFFRixZQUFNLENBQUMsU0FBUyxVQUFPLEdBQUcsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDdkUsWUFBSSxPQUFPLEdBQUc7QUFDWixZQUFFLEVBQUUsRUFBRTtBQUNOLG1CQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtTQUNyQyxDQUFBOztBQUVELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO09BQ3ZGLENBQUM7O0FBRUYsWUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDdEUsWUFBSSxPQUFPLEdBQUc7QUFDWixZQUFFLEVBQUUsRUFBRTtBQUNOLG1CQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtTQUNyQyxDQUFBOztBQUVELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO09BQ3RGLENBQUM7O0FBRUYsWUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNqRSxZQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDeEIsb0JBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDbkUsaUJBQU87U0FDUjs7QUFFRCxZQUFJLE9BQU8sR0FBRztBQUNaLG1CQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtTQUNyQyxDQUFBOztBQUVELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO09BQ3JGLENBQUM7O0FBRUYsWUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDakcsWUFBSSxPQUFPLEdBQUc7QUFDWixtQkFBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUU7QUFDcEMsZUFBSyxFQUFFLEtBQUs7QUFDWixpQkFBTyxFQUFFLE9BQU87QUFDaEIsY0FBSSxFQUFFLElBQUk7QUFDVixrQkFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQTs7QUFFRCxZQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdEQsY0FBTSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztPQUNyRixDQUFDOztBQUVGLFlBQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDMUYsWUFBSSxPQUFPLEdBQUc7QUFDWixZQUFFLEVBQUUsVUFBVTtBQUNkLG1CQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtTQUNyQyxDQUFBOztBQUVELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO09BQ2xHLENBQUMiLCJmaWxlIjoicGxhdGludW0vRXhwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge0pzb25TZXJ2aWNlQ2xpZW50fSBmcm9tICdwbGF0aW51bS9Kc29uU2VydmljZUNsaWVudCc7XG5pbXBvcnQge1NhbXBsZUFwcERhdGF9IGZyb20gJ3NhbXBsZS1hcHAtZGF0YSc7XG5cblxuZXhwb3J0IHZhciBFeHBvcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdGhpcy5JZCA9IG51bGw7XG4gIHRoaXMuQ2FtcGFpZ25JZCA9IG51bGw7XG4gIHRoaXMuRmlsZUNvbnRlbnQgPSBudWxsO1xuICB0aGlzLkNyZWF0ZVRpbWUgPSBudWxsO1xuICB0aGlzLkNyZWF0ZVVzZXJJZCA9IG51bGw7XG4gIHRoaXMuTW9kaWZ5VGltZSA9IG51bGw7XG4gIHRoaXMuTW9kaWZ5VXNlcklkID0gbnVsbDtcbiAgdGhpcy5EZWxldGVUaW1lID0gbnVsbDtcbiAgdGhpcy5EZWxldGVVc2VySWQgPSBudWxsO1xufTtcblxuZXhwb3J0IHZhciBMb2FkRmlsZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRhcmdldFNwZWMgPSBudWxsO1xuICB0aGlzLmZvcm1hdFZlcnNpb24gPSAnMDEuMDMnO1xuICB0aGlzLmZpbGVEYXRlID0gbnVsbDtcbiAgdGhpcy5maWxlSWRlbnRpZmllciA9IG51bGw7XG4gIHRoaXMud3RzRm9ybWF0VmVyc2lvbiA9ICcwMS4wMyc7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsO1xuICB0aGlzLmF1dGhvciA9IG51bGw7XG4gIHRoaXMuZGF0ZSA9IG51bGw7XG4gIHRoaXMuY2hlY2tlciA9IG51bGw7XG4gIHRoaXMuYXV0aG9yaXplciA9IG51bGw7XG59O1xuXG5cbkV4cG9ydC5wcm90b3R5cGUuZ2VuZXJhdGVFeHBvcnQgPSBmdW5jdGlvbiAoaGVhZGVyLCBjYW1wYWlnbklkcywgZXhwb3J0VHlwZSwgZXhwb3J0Rm9ybWF0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIGlmIChib21HbG9iYWwuaXNEZW1vTW9kZSkge1xuICAgIHNldFRpbWVvdXQob25TdWNjZXNzLCAyMDAwLCBTYW1wbGVBcHBEYXRhLmdldEdlbmVyYXRlRXhwb3J0UmVzcG9uc2UoZXhwb3J0Rm9ybWF0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgSGVhZGVyOiBoZWFkZXIsXG4gICAgQ2FtcGFpZ25JZHM6IGNhbXBhaWduSWRzLFxuICAgIEV4cG9ydFR5cGU6IGV4cG9ydFR5cGUsXG4gICAgRXhwb3J0Rm9ybWF0OiBleHBvcnRGb3JtYXQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH07XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJFeHBvcnRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuXG5FeHBvcnQucHJvdG90eXBlLmV4cG9ydEltcG9ydCA9IGZ1bmN0aW9uIChpbXBvcnRJZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBFeHBvcnRJZDogaW1wb3J0SWQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH07XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJFeHBvcnRJbXBvcnRSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuXG5FeHBvcnQucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChib21FeHBvcnQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgVmFsdWU6IGJvbUV4cG9ydCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiRXhwb3J0Q3JlYXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkV4cG9ydC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIElkOiBpZCxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiRXhwb3J0RGVsZXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkV4cG9ydC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgSWQ6IGlkLFxuICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICB9XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJFeHBvcnRGZXRjaFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuXG5FeHBvcnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICBpZiAoYm9tR2xvYmFsLmlzRGVtb01vZGUpIHtcbiAgICBzZXRUaW1lb3V0KG9uU3VjY2VzcywgMTAwMCwgU2FtcGxlQXBwRGF0YS5nZXRFeHBvcnRMaXN0UmVzcG9uc2UoKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH1cblxuICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICBjbGllbnQucG9zdFRvU2VydmljZShcIkV4cG9ydExpc3RSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuRXhwb3J0LnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24gKHdoZXJlLCBvcmRlckJ5LCBwYWdlLCBwYWdlU2l6ZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KCksXG4gICAgV2hlcmU6IHdoZXJlLFxuICAgIE9yZGVyQnk6IG9yZGVyQnksXG4gICAgUGFnZTogcGFnZSxcbiAgICBQYWdlU2l6ZTogcGFnZVNpemVcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiRXhwb3J0UGFnZVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuXG5FeHBvcnQucHJvdG90eXBlLmxpc3RGb3JDYW1wYWlnbklkID0gZnVuY3Rpb24gKGNhbXBhaWduSWQsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgSWQ6IGNhbXBhaWduSWQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH1cblxuICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICBjbGllbnQucG9zdFRvU2VydmljZShcIkV4cG9ydExpc3RGb3JDYW1wYWlnbklkUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
