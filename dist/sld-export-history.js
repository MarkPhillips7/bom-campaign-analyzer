System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Export', 'date-format', 'moment', 'underscore'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Export, DateFormatValueConverter, moment, _, self, SldExportHistory;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumCampaign) {
      Campaign = _platinumCampaign.Campaign;
    }, function (_platinumExport) {
      Export = _platinumExport.Export;
    }, function (_dateFormat) {
      DateFormatValueConverter = _dateFormat.DateFormatValueConverter;
    }, function (_moment) {
      moment = _moment['default'];
    }, function (_underscore) {
      _ = _underscore['default'];
    }],
    execute: function () {
      SldExportHistory = (function () {
        function SldExportHistory() {
          _classCallCheck(this, SldExportHistory);

          this.exportHistoryData = null;
          this.errorMessage = null;

          self = this;
        }

        _createClass(SldExportHistory, [{
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;
          }
        }, {
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'fetchExportHistory',
          value: function fetchExportHistory() {
            return fetchData().then(exportHistorySucceeded).then(exportHistoryReallySucceeded)['catch'](exportHistoryFailed);

            function fetchData() {
              return new Promise(function (resolve, reject) {
                var xport = new Export();
                xport.list(resolve, reject);
              });
            }

            function exportHistorySucceeded(response) {
              return new Promise(function (resolve, reject) {
                console.log(response);
                bomGlobal.handlePlatinumResponse(response, resolve, reject);
              });
            }

            function exportHistoryReallySucceeded(response) {
              self.exportHistoryData = response.Values;
              var dataToReturn = _.chain(self.exportHistoryData).sortBy(function (history) {
                return history.CreateTime;
              }).reverse().value();

              return {
                data: dataToReturn,
                count: dataToReturn.length
              };
            }

            function exportHistoryFailed(err) {
              self.errorLoadingExportData = 'Error fetching exportHistory data: ' + err;
              self.handleError(self.errorLoadingExportData);
            }
          }
        }]);

        return SldExportHistory;
      })();

      _export('SldExportHistory', SldExportHistory);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZC1leHBvcnQtaGlzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0VBT0ksSUFBSSxFQUVLLGdCQUFnQjs7Ozs7Ozs7a0NBVHJCLFNBQVM7O21DQUNULFFBQVE7OytCQUNSLE1BQU07OzZDQUNOLHdCQUF3Qjs7Ozs7OztBQU1uQixzQkFBZ0I7QUFJaEIsaUJBSkEsZ0JBQWdCLEdBSWQ7Z0NBSkYsZ0JBQWdCOztlQUMzQixpQkFBaUIsR0FBQyxJQUFJO2VBQ3RCLFlBQVksR0FBQyxJQUFJOztBQUdmLGNBQUksR0FBQyxJQUFJLENBQUM7U0FDWDs7cUJBTlUsZ0JBQWdCOztpQkFRbkIsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtBQUM1QixnQkFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1dBQzVDOzs7aUJBRVUscUJBQUMsR0FBRyxFQUFDO0FBQ2QsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1dBQ3pCOzs7aUJBRWlCLDhCQUFHO0FBQ25CLG1CQUFPLFNBQVMsRUFBRSxDQUNmLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUM1QixJQUFJLENBQUMsNEJBQTRCLENBQUMsU0FDN0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUU5QixxQkFBUyxTQUFTLEdBQUc7QUFDbkIscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLG9CQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLHFCQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztlQUM3QixDQUFDLENBQUM7YUFDSjs7QUFFRCxxQkFBUyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUU7QUFDeEMscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLHVCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLHlCQUFTLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztlQUM3RCxDQUFDLENBQUM7YUFDSjs7QUFFRCxxQkFBUyw0QkFBNEIsQ0FBQyxRQUFRLEVBQUU7QUFDOUMsa0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3pDLGtCQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUMvQyxNQUFNLENBQUMsVUFBQSxPQUFPO3VCQUFJLE9BQU8sQ0FBQyxVQUFVO2VBQUEsQ0FBQyxDQUNyQyxPQUFPLEVBQUUsQ0FDVCxLQUFLLEVBQUUsQ0FBQzs7QUFFWCxxQkFBTztBQUNMLG9CQUFJLEVBQUUsWUFBWTtBQUNsQixxQkFBSyxFQUFFLFlBQVksQ0FBQyxNQUFNO2VBQzNCLENBQUM7YUFDSDs7QUFFRCxxQkFBUyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7QUFDaEMsa0JBQUksQ0FBQyxzQkFBc0IsMkNBQXlDLEdBQUcsQUFBRSxDQUFDO0FBQzFFLGtCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQy9DO1dBQ0Y7OztlQXJEVSxnQkFBZ0IiLCJmaWxlIjoic2xkLWV4cG9ydC1oaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge0NhbXBhaWdufSBmcm9tICdwbGF0aW51bS9DYW1wYWlnbic7XG5pbXBvcnQge0V4cG9ydH0gZnJvbSAncGxhdGludW0vRXhwb3J0JztcbmltcG9ydCB7RGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyfSBmcm9tICdkYXRlLWZvcm1hdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuXG52YXIgc2VsZjtcblxuZXhwb3J0IGNsYXNzIFNsZEV4cG9ydEhpc3Rvcnl7XG4gIGV4cG9ydEhpc3RvcnlEYXRhPW51bGw7XG4gIGVycm9yTWVzc2FnZT1udWxsO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc2VsZj10aGlzO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZWNvbmZpZykge1xuICAgIHNlbGYuZW52aXJvbm1lbnQgPSByb3V0ZWNvbmZpZy5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycil7XG4gICAgc2VsZi5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gIH1cblxuICBmZXRjaEV4cG9ydEhpc3RvcnkoKSB7XG4gICAgcmV0dXJuIGZldGNoRGF0YSgpXG4gICAgICAudGhlbihleHBvcnRIaXN0b3J5U3VjY2VlZGVkKVxuICAgICAgLnRoZW4oZXhwb3J0SGlzdG9yeVJlYWxseVN1Y2NlZWRlZClcbiAgICAgIC5jYXRjaChleHBvcnRIaXN0b3J5RmFpbGVkKTtcblxuICAgIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCB4cG9ydCA9IG5ldyBFeHBvcnQoKTtcbiAgICAgICAgeHBvcnQubGlzdChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0SGlzdG9yeVN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBib21HbG9iYWwuaGFuZGxlUGxhdGludW1SZXNwb25zZShyZXNwb25zZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydEhpc3RvcnlSZWFsbHlTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIHNlbGYuZXhwb3J0SGlzdG9yeURhdGEgPSByZXNwb25zZS5WYWx1ZXM7XG4gICAgICBsZXQgZGF0YVRvUmV0dXJuID0gXy5jaGFpbihzZWxmLmV4cG9ydEhpc3RvcnlEYXRhKVxuICAgICAgICAuc29ydEJ5KGhpc3RvcnkgPT4gaGlzdG9yeS5DcmVhdGVUaW1lKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBkYXRhVG9SZXR1cm4sXG4gICAgICAgIGNvdW50OiBkYXRhVG9SZXR1cm4ubGVuZ3RoXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydEhpc3RvcnlGYWlsZWQoZXJyKSB7XG4gICAgICBzZWxmLmVycm9yTG9hZGluZ0V4cG9ydERhdGEgPSBgRXJyb3IgZmV0Y2hpbmcgZXhwb3J0SGlzdG9yeSBkYXRhOiAke2Vycn1gO1xuICAgICAgc2VsZi5oYW5kbGVFcnJvcihzZWxmLmVycm9yTG9hZGluZ0V4cG9ydERhdGEpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
