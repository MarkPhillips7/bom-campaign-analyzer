System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Import', 'platinum/ImsiStatus', 'platinum/ImportType', 'jquery', 'underscore', 'aurelia-framework'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Import, ImsiStatus, ImportType, $, _, bindable, self, ImsiLookup;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumCampaign) {
      Campaign = _platinumCampaign.Campaign;
    }, function (_platinumImport) {
      Import = _platinumImport.Import;
    }, function (_platinumImsiStatus) {
      ImsiStatus = _platinumImsiStatus.ImsiStatus;
    }, function (_platinumImportType) {
      ImportType = _platinumImportType.ImportType;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_underscore) {
      _ = _underscore['default'];
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      ImsiLookup = (function () {
        function ImsiLookup() {
          _classCallCheck(this, ImsiLookup);

          this.currentBcaStatus = 'unknown';
          this.currentHlrallStatus = 'unknown';
          this.errorMessage = null;
          this.heading = 'IMSI Lookup';
          this.imsi = null;
          this.imsiLoaded = null;
          this.imsiValidationClass = '';
          this.isValid = false;
          this.loadingHistory = false;
          this.historyLoaded = false;
          this.showValidationErrors = false;

          this.fetchHlrallStatus = function () {
            var fetchData = function fetchData() {
              return new Promise(function (resolve, reject) {
                var imsiStatus = new ImsiStatus();
                imsiStatus.fetchHlrallStatus(self.imsi, resolve, reject);
              });
            };

            var hlrallStatusSucceeded = function hlrallStatusSucceeded(response) {
              return new Promise(function (resolve, reject) {
                console.log(response);
                bomGlobal.handlePlatinumResponse(response, resolve, reject);
              });
            };

            var hlrallStatusReallySucceeded = function hlrallStatusReallySucceeded(response) {
              self.currentHlrallStatus = response.IsInHrlAll ? 'IN HLRALL' : 'NOT IN HLRALL';
            };

            var hlrallStatusFailed = function hlrallStatusFailed(err) {
              self.loadingHistory = false;
              var errorMessage = 'Error fetching current hlrall status: ' + err;
              self.handleError(errorMessage);
            };

            return fetchData().then(hlrallStatusSucceeded).then(hlrallStatusReallySucceeded)['catch'](hlrallStatusFailed);
          };

          this.fetchAnalysisHistory = function () {
            var fetchData = function fetchData() {
              return new Promise(function (resolve, reject) {
                var campaign = new Campaign();
                campaign.imsiAnalysisSummary(self.imsi, resolve, reject);
              });
            };

            var analysisSucceeded = function analysisSucceeded(response) {
              return new Promise(function (resolve, reject) {
                console.log(response);
                bomGlobal.handlePlatinumResponse(response, resolve, reject);
              });
            };

            var analysisReallySucceeded = function analysisReallySucceeded(response) {
              self.loadingHistory = false;
              self.historyLoaded = true;
              self.imsiLoaded = self.imsi;
              self.imsi = null;
              self.analysisData = response;
              self.currentBcaStatus = response.ImsiHistoryRecords.length > 0 ? _.last(_.sortBy(response.ImsiHistoryRecords, function (history) {
                return history.CreateTime;
              })).ImsiStatus : 'unknown';
              $('#campaign-history-grid')[0].grid.refresh();
              $('#serial-number-history-grid')[0].grid.refresh();
            };

            var analysisFailed = function analysisFailed(err) {
              self.loadingHistory = false;
              self.errorLoadingAnalysisData = 'Error fetching analysis data: ' + err;
              self.handleError(self.errorLoadingAnalysisData);
            };

            return fetchData().then(analysisSucceeded).then(analysisReallySucceeded)['catch'](analysisFailed);
          };

          self = this;
          self.resetSelections();
        }

        _createClass(ImsiLookup, [{
          key: 'resetSelections',
          value: function resetSelections() {
            self.imsi = null;
            self.currentBcaStatus = 'unknown';
            self.currentHlrallStatus = 'unknown';
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;
            self.validate(false);
          }
        }, {
          key: 'fetchSerialNumberTrackingAnalysisHistory',
          value: function fetchSerialNumberTrackingAnalysisHistory(gridArgs) {
            var dataToReturn = [];
            var totalCount = 0;

            if (!!self.analysisData) {
              totalCount = self.analysisData.SerialNumberHistoryRecords.length;
              dataToReturn = _.chain(self.analysisData.SerialNumberHistoryRecords).sortBy(function (history) {
                return history.ModifyTime;
              }).reverse().value();
            }

            return new Promise(function (resolve, reject) {
              resolve({
                data: dataToReturn,
                count: totalCount
              });
            });
          }
        }, {
          key: 'fetchCampaignAnalysisHistory',
          value: function fetchCampaignAnalysisHistory(gridArgs) {
            var dataToReturn = [];
            var totalCount = 0;

            if (!!self.analysisData) {
              totalCount = self.analysisData.ImsiHistoryRecords.length;
              dataToReturn = _.chain(self.analysisData.ImsiHistoryRecords).sortBy(function (history) {
                return history.CreateTime;
              }).reverse().value();
            }

            return new Promise(function (resolve, reject) {
              resolve({
                data: dataToReturn,
                count: totalCount
              });
            });
          }
        }, {
          key: 'validateImsi',
          value: function validateImsi() {
            var isValid = !!self.imsi;
            self.imsiValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validate',
          value: function validate(showValidationErrors) {
            self.showValidationErrors |= showValidationErrors;

            self.isValid = self.validateImsi();

            return self.isValid;
          }
        }, {
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'submit',
          value: function submit() {
            if (!self.validate(true)) {
              return;
            }

            self.imsiLoaded = null;
            self.currentBcaStatus = 'unknown';
            self.loadingHistory = true;
            self.historyLoaded = false;

            self.fetchAnalysisHistory();
            self.fetchHlrallStatus();
          }
        }]);

        return ImsiLookup;
      })();

      _export('ImsiLookup', ImsiLookup);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QztXQUNyQjs7O2lCQUVVLHFCQUFDLEdBQUcsRUFBQztBQUNkLGdCQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztXQUN6Qjs7O2lCQUVLLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLHFCQUFPO2FBQ1I7O0FBRUQsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsZ0JBQWdCLEdBQUMsU0FBUyxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUMzQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O0FBRTNCLGdCQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUM1QixnQkFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7V0FDMUI7OztlQTdMVSxVQUFVIiwiZmlsZSI6Imltc2ktbG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge0NhbXBhaWdufSBmcm9tICdwbGF0aW51bS9DYW1wYWlnbic7XG5pbXBvcnQge0ltcG9ydH0gZnJvbSAncGxhdGludW0vSW1wb3J0JztcbmltcG9ydCB7SW1zaVN0YXR1c30gZnJvbSAncGxhdGludW0vSW1zaVN0YXR1cyc7XG5pbXBvcnQge0ltcG9ydFR5cGV9IGZyb20gJ3BsYXRpbnVtL0ltcG9ydFR5cGUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbnZhciBzZWxmO1xuXG5leHBvcnQgY2xhc3MgSW1zaUxvb2t1cCB7XG4gIGVudmlyb25tZW50O1xuICBjdXJyZW50QmNhU3RhdHVzPSd1bmtub3duJztcbiAgY3VycmVudEhscmFsbFN0YXR1cz0ndW5rbm93bic7XG4gIGVycm9yTWVzc2FnZT1udWxsO1xuICBoZWFkaW5nID0gJ0lNU0kgTG9va3VwJztcbiAgaW1zaSA9IG51bGw7XG4gIGltc2lMb2FkZWQ9bnVsbDtcbiAgaW1zaVZhbGlkYXRpb25DbGFzcz0nJztcbiAgaXNWYWxpZD1mYWxzZTtcbiAgbG9hZGluZ0hpc3Rvcnk9ZmFsc2U7XG4gIGhpc3RvcnlMb2FkZWQ9ZmFsc2U7XG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucmVzZXRTZWxlY3Rpb25zKCk7XG4gIH1cblxuICByZXNldFNlbGVjdGlvbnMoKXtcbiAgICBzZWxmLmltc2k9bnVsbDtcbiAgICBzZWxmLmN1cnJlbnRCY2FTdGF0dXM9J3Vua25vd24nO1xuICAgIHNlbGYuY3VycmVudEhscmFsbFN0YXR1cz0ndW5rbm93bic7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlY29uZmlnKSB7XG4gICAgc2VsZi5lbnZpcm9ubWVudD1yb3V0ZWNvbmZpZy5lbnZpcm9ubWVudDtcbiAgICBzZWxmLnZhbGlkYXRlKGZhbHNlKTtcbiAgfVxuXG4gIGZldGNoU2VyaWFsTnVtYmVyVHJhY2tpbmdBbmFseXNpc0hpc3RvcnkoZ3JpZEFyZ3MpIHtcbiAgICBsZXQgZGF0YVRvUmV0dXJuID0gW107XG4gICAgbGV0IHRvdGFsQ291bnQgPSAwO1xuXG4gICAgaWYgKCEhc2VsZi5hbmFseXNpc0RhdGEpIHtcbiAgICAgIHRvdGFsQ291bnQgPSBzZWxmLmFuYWx5c2lzRGF0YS5TZXJpYWxOdW1iZXJIaXN0b3J5UmVjb3Jkcy5sZW5ndGg7XG4gICAgICBkYXRhVG9SZXR1cm4gPSBfLmNoYWluKHNlbGYuYW5hbHlzaXNEYXRhLlNlcmlhbE51bWJlckhpc3RvcnlSZWNvcmRzKVxuICAgICAgICAgIC5zb3J0QnkoaGlzdG9yeSA9PiBoaXN0b3J5Lk1vZGlmeVRpbWUpXG4gICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgZGF0YTogZGF0YVRvUmV0dXJuLFxuICAgICAgICBjb3VudDogdG90YWxDb3VudFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmZXRjaENhbXBhaWduQW5hbHlzaXNIaXN0b3J5KGdyaWRBcmdzKSB7XG4gICAgbGV0IGRhdGFUb1JldHVybiA9IFtdO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcblxuICAgIGlmICghIXNlbGYuYW5hbHlzaXNEYXRhKSB7XG4gICAgICB0b3RhbENvdW50ID0gc2VsZi5hbmFseXNpc0RhdGEuSW1zaUhpc3RvcnlSZWNvcmRzLmxlbmd0aDtcbiAgICAgIGRhdGFUb1JldHVybiA9IF8uY2hhaW4oc2VsZi5hbmFseXNpc0RhdGEuSW1zaUhpc3RvcnlSZWNvcmRzKVxuICAgICAgICAgIC5zb3J0QnkoaGlzdG9yeSA9PiBoaXN0b3J5LkNyZWF0ZVRpbWUpXG4gICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8vIEFsdGVybmF0ZSBhcHByb2FjaCBpZiB3ZSBoYWQgaHRtbCBzZXR0aW5ncyBsaWtlIHRoaXM6XG4gIC8vPGdyaWQgaWQ9XCJjYW1wYWlnbi1oaXN0b3J5LWdyaWRcIlxuICAvLyAgcmVhZC5jYWxsPVwiZmV0Y2hDYW1wYWlnbkFuYWx5c2lzSGlzdG9yeSgkZXZlbnQpXCJcbiAgLy8gIHNlcnZlci1wYWdpbmc9XCJ0cnVlXCJcbiAgLy8gIHNlcnZlci1maWx0ZXJpbmc9XCJ0cnVlXCJcbiAgLy8gIG5vLXJvd3MtbWVzc2FnZT1cIlNvcnJ5LCBubyBjYW1wYWlnbiBhbmFseXplciByZWNvcmRzIGZvdW5kXCJcbiAgLy8gIGdyaWQtaGVpZ2h0LmJpbmQ9XCIzMDBcIj5cblxuICAgIC8vIFRoZW4gd2UgY291bGQgZG8gc29tZXRoaW5nIGxpa2UgdGhpcyAoYW5kIHRoaXMgZXZlbiB3b3JrcylcbiAgICAvL2lmICghIXNlbGYuYW5hbHlzaXNEYXRhKSB7XG4gICAgLy8gIHRvdGFsQ291bnQgPSBzZWxmLmFuYWx5c2lzRGF0YS5JbXNpSGlzdG9yeVJlY29yZHMubGVuZ3RoO1xuICAgIC8vICBkYXRhVG9SZXR1cm4gPSBfLmNoYWluKHNlbGYuYW5hbHlzaXNEYXRhLkltc2lIaXN0b3J5UmVjb3JkcylcbiAgICAvLyAgICAgIC5zb3J0QnkoaGlzdG9yeSA9PiBoaXN0b3J5LkNyZWF0ZVRpbWUpXG4gICAgLy8gICAgICAuZmlyc3QoZ3JpZEFyZ3MucGFnaW5nLnNpemUgKiBncmlkQXJncy5wYWdpbmcucGFnZSlcbiAgICAvLyAgICAgIC5yZXN0KGdyaWRBcmdzLnBhZ2luZy5zaXplICogKGdyaWRBcmdzLnBhZ2luZy5wYWdlIC0gMSkpXG4gICAgLy8gICAgICAudmFsdWUoKTtcbiAgICAvL31cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgZGF0YTogZGF0YVRvUmV0dXJuLFxuICAgICAgICBjb3VudDogdG90YWxDb3VudFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmZXRjaEhscmFsbFN0YXR1cyA9ICgoKSA9PiB7XG4gICAgdmFyIGZldGNoRGF0YT0oKCkgPT4gIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBpbXNpU3RhdHVzID0gbmV3IEltc2lTdGF0dXMoKTtcbiAgICAgICAgaW1zaVN0YXR1cy5mZXRjaEhscmFsbFN0YXR1cyhzZWxmLmltc2ksIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBobHJhbGxTdGF0dXNTdWNjZWVkZWQ9KHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGhscmFsbFN0YXR1c1JlYWxseVN1Y2NlZWRlZD0ocmVzcG9uc2UgPT4ge1xuICAgIHNlbGYuY3VycmVudEhscmFsbFN0YXR1cyA9IHJlc3BvbnNlLklzSW5IcmxBbGwgPyAnSU4gSExSQUxMJyA6ICdOT1QgSU4gSExSQUxMJztcbiAgICB9KTtcblxuICAgIHZhciBobHJhbGxTdGF0dXNGYWlsZWQ9KGVyciA9PiAge1xuICAgICAgc2VsZi5sb2FkaW5nSGlzdG9yeT1mYWxzZTtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gYEVycm9yIGZldGNoaW5nIGN1cnJlbnQgaGxyYWxsIHN0YXR1czogJHtlcnJ9YDtcbiAgICBzZWxmLmhhbmRsZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmV0Y2hEYXRhKClcbiAgICAgIC50aGVuKGhscmFsbFN0YXR1c1N1Y2NlZWRlZClcbiAgICAgIC50aGVuKGhscmFsbFN0YXR1c1JlYWxseVN1Y2NlZWRlZClcbiAgICAgIC5jYXRjaChobHJhbGxTdGF0dXNGYWlsZWQpO1xuICB9KTtcblxuICBmZXRjaEFuYWx5c2lzSGlzdG9yeSA9ICgoKSA9PiB7XG4gICAgdmFyIGZldGNoRGF0YT0oKCkgPT4gIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBjYW1wYWlnbiA9IG5ldyBDYW1wYWlnbigpO1xuICAgICAgICBjYW1wYWlnbi5pbXNpQW5hbHlzaXNTdW1tYXJ5KHNlbGYuaW1zaSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGFuYWx5c2lzU3VjY2VlZGVkPShyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgYW5hbHlzaXNSZWFsbHlTdWNjZWVkZWQ9KHJlc3BvbnNlID0+IHtcbiAgICAgIHNlbGYubG9hZGluZ0hpc3Rvcnk9ZmFsc2U7XG4gICAgICBzZWxmLmhpc3RvcnlMb2FkZWQ9dHJ1ZTtcbiAgICAgIHNlbGYuaW1zaUxvYWRlZCA9IHNlbGYuaW1zaTtcbiAgICAgIHNlbGYuaW1zaSA9IG51bGw7XG4gICAgICBzZWxmLmFuYWx5c2lzRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgc2VsZi5jdXJyZW50QmNhU3RhdHVzPSByZXNwb25zZS5JbXNpSGlzdG9yeVJlY29yZHMubGVuZ3RoID4gMFxuICAgICAgICA/IF8ubGFzdChfLnNvcnRCeShyZXNwb25zZS5JbXNpSGlzdG9yeVJlY29yZHMsaGlzdG9yeSA9PiBoaXN0b3J5LkNyZWF0ZVRpbWUpKS5JbXNpU3RhdHVzXG4gICAgICAgIDogJ3Vua25vd24nO1xuICAgICAgJCgnI2NhbXBhaWduLWhpc3RvcnktZ3JpZCcpWzBdLmdyaWQucmVmcmVzaCgpO1xuICAgICAgJCgnI3NlcmlhbC1udW1iZXItaGlzdG9yeS1ncmlkJylbMF0uZ3JpZC5yZWZyZXNoKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgYW5hbHlzaXNGYWlsZWQ9KGVyciA9PiAge1xuICAgICAgc2VsZi5sb2FkaW5nSGlzdG9yeT1mYWxzZTtcbiAgICAgIHNlbGYuZXJyb3JMb2FkaW5nQW5hbHlzaXNEYXRhID0gYEVycm9yIGZldGNoaW5nIGFuYWx5c2lzIGRhdGE6ICR7ZXJyfWA7XG4gICAgICBzZWxmLmhhbmRsZUVycm9yKHNlbGYuZXJyb3JMb2FkaW5nQW5hbHlzaXNEYXRhKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmZXRjaERhdGEoKVxuICAgICAgLnRoZW4oYW5hbHlzaXNTdWNjZWVkZWQpXG4gICAgICAudGhlbihhbmFseXNpc1JlYWxseVN1Y2NlZWRlZClcbiAgICAgIC5jYXRjaChhbmFseXNpc0ZhaWxlZCk7XG4gIH0pO1xuXG4gIHZhbGlkYXRlSW1zaSgpe1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLmltc2k7XG4gICAgc2VsZi5pbXNpVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKHNob3dWYWxpZGF0aW9uRXJyb3JzKXtcbiAgICBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzIHw9IHNob3dWYWxpZGF0aW9uRXJyb3JzO1xuXG4gICAgc2VsZi5pc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUltc2koKTtcblxuICAgIHJldHVybiBzZWxmLmlzVmFsaWQ7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnIpe1xuICAgIHNlbGYuZXJyb3JNZXNzYWdlID0gZXJyO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICghc2VsZi52YWxpZGF0ZSh0cnVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaW1zaUxvYWRlZCA9IG51bGw7XG4gICAgc2VsZi5jdXJyZW50QmNhU3RhdHVzPSd1bmtub3duJztcbiAgICBzZWxmLmxvYWRpbmdIaXN0b3J5ID0gdHJ1ZTtcbiAgICBzZWxmLmhpc3RvcnlMb2FkZWQgPSBmYWxzZTtcblxuICAgIHNlbGYuZmV0Y2hBbmFseXNpc0hpc3RvcnkoKTtcbiAgICBzZWxmLmZldGNoSGxyYWxsU3RhdHVzKCk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
