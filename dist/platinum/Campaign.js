System.register(['platinum/Global', 'platinum/JsonServiceClient', 'sample-app-data'], function (_export) {
  'use strict';

  var bomGlobal, JsonServiceClient, SampleAppData, Campaign;
  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumJsonServiceClient) {
      JsonServiceClient = _platinumJsonServiceClient.JsonServiceClient;
    }, function (_sampleAppData) {
      SampleAppData = _sampleAppData.SampleAppData;
    }],
    execute: function () {
      Campaign = function Campaign() {

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

      _export('Campaign', Campaign);

      Campaign.prototype.create = function (campaign, onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          onSuccess(SampleAppData.getCreateCampaignResponse(campaign));
          return;
        }

        var request = {
          Value: campaign,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignCreateRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype['delete'] = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignDeleteRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.fetch = function (id, onSuccess, onError, ajaxOptions) {
        var request = {
          Id: id,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignFetchRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.list = function (onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          onSuccess(SampleAppData.getCampaignListResponse());
          return;
        }

        var request = {
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignListRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.page = function (where, orderBy, page, pageSize, onSuccess, onError, ajaxOptions) {
        var request = {
          SessionId: bomGlobal.getSessionKey(),
          Where: where,
          OrderBy: orderBy,
          Page: page,
          PageSize: pageSize
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignPageRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.lookup = function (name, onSuccess, onError, ajaxOptions) {
        var request = {
          Value: name,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignLookupRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.update = function (campaign, onSuccess, onError, ajaxOptions) {
        var request = {
          Value: campaign,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignUpdateRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.campaignAnalysisSummary = function (onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          setTimeout(onSuccess, 1000, SampleAppData.getCampaignAnalysisSummaryResponse());
          return;
        }

        var request = {
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("CampaignAnalysisSummaryRequest", request, onSuccess, onError, ajaxOptions);
      };

      Campaign.prototype.imsiAnalysisSummary = function (imsi, onSuccess, onError, ajaxOptions) {
        if (bomGlobal.isDemoMode) {
          setTimeout(onSuccess, 1000, SampleAppData.getImsiAnalysisSummaryResponse());
          return;
        }

        var request = {
          Imsi: imsi,
          SessionId: bomGlobal.getSessionKey()
        };

        var client = new JsonServiceClient(bomGlobal.baseUrl);

        client.postToService("ImsiAnalysisSummaryRequest", request, onSuccess, onError, ajaxOptions);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUksRUFBRSxhQUFhLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0FBQzVFLGlCQUFPO1NBQ1I7O0FBRUQsWUFBSSxPQUFPLEdBQUc7QUFDWixjQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRTtTQUNyQyxDQUFBOztBQUVELFlBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV0RCxjQUFNLENBQUMsYUFBYSxDQUFDLDRCQUE0QixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO09BQzlGLENBQUMiLCJmaWxlIjoicGxhdGludW0vQ2FtcGFpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7SnNvblNlcnZpY2VDbGllbnR9IGZyb20gJ3BsYXRpbnVtL0pzb25TZXJ2aWNlQ2xpZW50JztcbmltcG9ydCB7U2FtcGxlQXBwRGF0YX0gZnJvbSAnc2FtcGxlLWFwcC1kYXRhJztcblxuZXhwb3J0IHZhciBDYW1wYWlnbiA9IGZ1bmN0aW9uICgpIHtcblxuICB0aGlzLklkID0gbnVsbDtcbiAgdGhpcy5OYW1lID0gbnVsbDtcbiAgdGhpcy5EZXNjcmlwdGlvbiA9IG51bGw7XG4gIHRoaXMuQ3JlYXRlVGltZSA9IG51bGw7XG4gIHRoaXMuQ3JlYXRlVXNlcklkID0gbnVsbDtcbiAgdGhpcy5Nb2RpZnlUaW1lID0gbnVsbDtcbiAgdGhpcy5Nb2RpZnlVc2VySWQgPSBudWxsO1xuICB0aGlzLkRlbGV0ZVRpbWUgPSBudWxsO1xuICB0aGlzLkRlbGV0ZVVzZXJJZCA9IG51bGw7XG59O1xuXG5cbkNhbXBhaWduLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoY2FtcGFpZ24sIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgaWYgKGJvbUdsb2JhbC5pc0RlbW9Nb2RlKSB7XG4gICAgb25TdWNjZXNzKFNhbXBsZUFwcERhdGEuZ2V0Q3JlYXRlQ2FtcGFpZ25SZXNwb25zZShjYW1wYWlnbikpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIFZhbHVlOiBjYW1wYWlnbixcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiQ2FtcGFpZ25DcmVhdGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuQ2FtcGFpZ24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBJZDogaWQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH1cblxuICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICBjbGllbnQucG9zdFRvU2VydmljZShcIkNhbXBhaWduRGVsZXRlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkNhbXBhaWduLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChpZCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBJZDogaWQsXG4gICAgU2Vzc2lvbklkOiBib21HbG9iYWwuZ2V0U2Vzc2lvbktleSgpXG4gIH1cblxuICB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGJvbUdsb2JhbC5iYXNlVXJsKTtcblxuICBjbGllbnQucG9zdFRvU2VydmljZShcIkNhbXBhaWduRmV0Y2hSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuQ2FtcGFpZ24ucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICBpZiAoYm9tR2xvYmFsLmlzRGVtb01vZGUpIHtcbiAgICBvblN1Y2Nlc3MoU2FtcGxlQXBwRGF0YS5nZXRDYW1wYWlnbkxpc3RSZXNwb25zZSgpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiQ2FtcGFpZ25MaXN0UmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cbkNhbXBhaWduLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24gKHdoZXJlLCBvcmRlckJ5LCBwYWdlLCBwYWdlU2l6ZSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KCksXG4gICAgV2hlcmU6IHdoZXJlLFxuICAgIE9yZGVyQnk6IG9yZGVyQnksXG4gICAgUGFnZTogcGFnZSxcbiAgICBQYWdlU2l6ZTogcGFnZVNpemVcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiQ2FtcGFpZ25QYWdlUmVxdWVzdFwiLCByZXF1ZXN0LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKTtcbn07XG5cblxuQ2FtcGFpZ24ucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChuYW1lLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIFZhbHVlOiBuYW1lLFxuICAgIFNlc3Npb25JZDogYm9tR2xvYmFsLmdldFNlc3Npb25LZXkoKVxuICB9XG5cbiAgdmFyIGNsaWVudCA9IG5ldyBKc29uU2VydmljZUNsaWVudChib21HbG9iYWwuYmFzZVVybCk7XG5cbiAgY2xpZW50LnBvc3RUb1NlcnZpY2UoXCJDYW1wYWlnbkxvb2t1cFJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuXG5DYW1wYWlnbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGNhbXBhaWduLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGFqYXhPcHRpb25zKSB7XG4gIHZhciByZXF1ZXN0ID0ge1xuICAgIFZhbHVlOiBjYW1wYWlnbixcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiQ2FtcGFpZ25VcGRhdGVSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuQ2FtcGFpZ24ucHJvdG90eXBlLmNhbXBhaWduQW5hbHlzaXNTdW1tYXJ5ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpIHtcbiAgaWYgKGJvbUdsb2JhbC5pc0RlbW9Nb2RlKSB7XG4gICAgc2V0VGltZW91dChvblN1Y2Nlc3MsIDEwMDAsIFNhbXBsZUFwcERhdGEuZ2V0Q2FtcGFpZ25BbmFseXNpc1N1bW1hcnlSZXNwb25zZSgpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVxdWVzdCA9IHtcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiQ2FtcGFpZ25BbmFseXNpc1N1bW1hcnlSZXF1ZXN0XCIsIHJlcXVlc3QsIG9uU3VjY2Vzcywgb25FcnJvciwgYWpheE9wdGlvbnMpO1xufTtcblxuQ2FtcGFpZ24ucHJvdG90eXBlLmltc2lBbmFseXNpc1N1bW1hcnkgPSBmdW5jdGlvbiAoaW1zaSwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucykge1xuICBpZiAoYm9tR2xvYmFsLmlzRGVtb01vZGUpIHtcbiAgICBzZXRUaW1lb3V0KG9uU3VjY2VzcywgMTAwMCwgU2FtcGxlQXBwRGF0YS5nZXRJbXNpQW5hbHlzaXNTdW1tYXJ5UmVzcG9uc2UoKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlcXVlc3QgPSB7XG4gICAgSW1zaTogaW1zaSxcbiAgICBTZXNzaW9uSWQ6IGJvbUdsb2JhbC5nZXRTZXNzaW9uS2V5KClcbiAgfVxuXG4gIHZhciBjbGllbnQgPSBuZXcgSnNvblNlcnZpY2VDbGllbnQoYm9tR2xvYmFsLmJhc2VVcmwpO1xuXG4gIGNsaWVudC5wb3N0VG9TZXJ2aWNlKFwiSW1zaUFuYWx5c2lzU3VtbWFyeVJlcXVlc3RcIiwgcmVxdWVzdCwgb25TdWNjZXNzLCBvbkVycm9yLCBhamF4T3B0aW9ucyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
