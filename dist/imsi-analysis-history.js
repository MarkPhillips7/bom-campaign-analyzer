System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Export', 'platinum/Import', 'platinum/ImsiStatus', 'date-format', 'moment', 'underscore'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Export, Import, ImsiStatus, DateFormatValueConverter, moment, _, self, ImsiAnalysisHistory;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumCampaign) {
      Campaign = _platinumCampaign.Campaign;
    }, function (_platinumExport) {
      Export = _platinumExport.Export;
    }, function (_platinumImport) {
      Import = _platinumImport.Import;
    }, function (_platinumImsiStatus) {
      ImsiStatus = _platinumImsiStatus.ImsiStatus;
    }, function (_dateFormat) {
      DateFormatValueConverter = _dateFormat.DateFormatValueConverter;
    }, function (_moment) {
      moment = _moment['default'];
    }, function (_underscore) {
      _ = _underscore['default'];
    }],
    execute: function () {
      ImsiAnalysisHistory = (function () {
        function ImsiAnalysisHistory() {
          _classCallCheck(this, ImsiAnalysisHistory);

          this.currentStatusForAllImsis = null;
          this.analysisData = null;
          this.errorMessage = null;
          this.importDetails = null;

          this.fetchCurrentStatusForAllImsis = function () {
            var fetchData = function fetchData() {
              return new Promise(function (resolve, reject) {
                var imsiStatus = new ImsiStatus();
                imsiStatus.fetchCurrentStatusForAllImsis(resolve, reject);
              });
            };

            var currentStatusForAllImsisSucceeded = function currentStatusForAllImsisSucceeded(response) {
              return new Promise(function (resolve, reject) {
                console.log(response);
                bomGlobal.handlePlatinumResponse(response, resolve, reject);
              });
            };

            var currentStatusForAllImsisReallySucceeded = function currentStatusForAllImsisReallySucceeded(response) {
              self.currentStatusForAllImsis = _.reduce(response.Values, function (obj, nameCount) {
                var key = nameCount.Name == "Do Not Reprocess" ? 'numberMarkedAsRecord' : nameCount.Name == "Reprocess" ? 'numberFlaggedForReprocessing' : nameCount.Name == "Successful" ? 'numberMarkedAsSuccessful' : 'totalImsis';
                obj[key] = nameCount.Count;
                return obj;
              }, {});

              return {
                data: [self.currentStatusForAllImsis],
                count: 1
              };
            };

            var currentStatusForAllImsisFailed = function currentStatusForAllImsisFailed(err) {
              self.loadingHistory = false;
              var errorMessage = 'Error fetching current status for all IMSIs: ' + err;
              self.handleError(errorMessage);
            };

            return fetchData().then(currentStatusForAllImsisSucceeded).then(currentStatusForAllImsisReallySucceeded)['catch'](currentStatusForAllImsisFailed);
          };

          self = this;
        }

        _createClass(ImsiAnalysisHistory, [{
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;
            self.fetchAnalysisHistory();
          }
        }, {
          key: 'fetchOpmAnalysisHistory',
          value: function fetchOpmAnalysisHistory(gridArgs) {
            return self.waitForAnalysisResults().then(self.returnOpmAnalysisHistory);
          }
        }, {
          key: 'returnOpmAnalysisHistory',
          value: function returnOpmAnalysisHistory() {
            var historyData = _.filter(self.analysisData, function (record) {
              return record.ImportType.indexOf("OPM") > -1;
            });
            var dataToReturn = _.chain(historyData).sortBy(function (history) {
              return history.ImportId;
            }).reverse().value();

            return {
              data: dataToReturn,
              count: dataToReturn.length
            };
          }
        }, {
          key: 'fetchCampaignAnalysisHistory',
          value: function fetchCampaignAnalysisHistory(gridArgs) {
            return self.waitForAnalysisResults().then(self.returnCampaignAnalysisHistory);
          }
        }, {
          key: 'returnCampaignAnalysisHistory',
          value: function returnCampaignAnalysisHistory() {
            var historyData = _.filter(self.analysisData, function (record) {
              return record.ImportType.indexOf("OPM") == -1;
            });
            var dataToReturn = _.chain(historyData).sortBy(function (history) {
              return history.ImportId;
            }).reverse().value();

            return {
              data: dataToReturn,
              count: dataToReturn.length
            };
          }
        }, {
          key: 'waitForAnalysisResults',
          value: function waitForAnalysisResults() {
            var initialTime = moment();

            return new Promise(function (resolve, reject) {
              checkForDataOrWait(resolve, reject);
            });

            function checkForDataOrWait(resolve, reject) {
              var millisecondsToWait = 100;

              if (self.analysisData) {
                resolve();
                return;
              }

              if (self.errorLoadingAnalysisData) {
                reject(self.errorLoadingAnalysisData);
                return;
              }

              var now = moment();

              if (now.subtract(60, 'seconds') > initialTime) {
                var errorMessage = 'timed out waiting for analysis data to be fetched';
                self.handleError(errorMessage);
                reject(errorMessage);
              } else {
                setTimeout(checkForDataOrWait, millisecondsToWait, resolve, reject);
              }
            }
          }
        }, {
          key: 'fetchAnalysisHistory',
          value: function fetchAnalysisHistory() {
            return fetchData().then(analysisSucceeded).then(analysisReallySucceeded)['catch'](analysisFailed);

            function fetchData() {
              return new Promise(function (resolve, reject) {
                var campaign = new Campaign();
                campaign.campaignAnalysisSummary(resolve, reject);
              });
            }

            function analysisSucceeded(response) {
              return new Promise(function (resolve, reject) {
                console.log(response);
                bomGlobal.handlePlatinumResponse(response, resolve, reject);
              });
            }

            function analysisReallySucceeded(response) {
              self.analysisData = response.Values;
            }

            function analysisFailed(err) {
              self.errorLoadingAnalysisData = 'Error fetching analysis data: ' + err;
              self.handleError(self.errorLoadingAnalysisData);
            }
          }
        }, {
          key: 'exportItem',
          value: function exportItem(item) {
            item.downloadStatus = "downloading";

            var xport = new Export();
            xport.exportImport(item.ImportId, exportSuccess, exportError);

            function exportError(response) {
              item.downloadStatus = 'error';
              item.downloadError = 'An unexpected error occurred.';
            }
            function exportSuccess(response) {
              if (response.DownloadUrl) {
                item.downloadStatus = 'downloaded';
                item.downloadUrl = response.DownloadUrl;
              } else {
                item.downloadStatus = 'error';
                item.downloadError = 'An unexpected error occurred.';
              }
            }
          }
        }, {
          key: 'viewSldProperties',
          value: function viewSldProperties(item) {
            var mport = new Import();
            mport.fetch(item.ImportId, fetchSucceeded, fetchError);

            function fetchError(err) {
              var errorMessage = 'Error fetching import record: ' + err;
              self.handleError(errorMessage);
            }

            function fetchSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, fetchReallySucceeded, fetchError);
            }

            function fetchReallySucceeded(response) {
              self.importDetails = response.Value;
              $('#view-sld-properties-modal').modal('show');
            }
          }
        }, {
          key: 'refreshAnalysisHistory',
          value: function refreshAnalysisHistory() {
            self.analysisData = null;
            self.fetchAnalysisHistory();
            $('#opm-analysis-history-grid')[0].grid.refresh();
            $('#campaign-analysis-history-grid')[0].grid.refresh();
          }
        }, {
          key: 'refreshCurrentStatusForAllImsis',
          value: function refreshCurrentStatusForAllImsis() {
            self.currentStatusForAllImsis = null;
            self.fetchCurrentStatusForAllImsis();
            $('#current-status-for-all-imsis-grid')[0].grid.refresh();
          }
        }]);

        return ImsiAnalysisHistory;
      })();

      _export('ImsiAnalysisHistory', ImsiAnalysisHistory);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltc2ktYW5hbHlzaXMtaGlzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEZBU0ksSUFBSSxFQUVLLG1CQUFtQjs7Ozs7Ozs7a0NBWHhCLFNBQVM7O21DQUNULFFBQVE7OytCQUNSLE1BQU07OytCQUNOLE1BQU07O3VDQUNOLFVBQVU7OzZDQUNWLHdCQUF3Qjs7Ozs7OztBQU1uQix5QkFBbUI7QUFNbkIsaUJBTkEsbUJBQW1CLEdBTWpCO2dDQU5GLG1CQUFtQjs7ZUFDOUIsd0JBQXdCLEdBQUMsSUFBSTtlQUM3QixZQUFZLEdBQUMsSUFBSTtlQUNqQixZQUFZLEdBQUMsSUFBSTtlQUNqQixhQUFhLEdBQUMsSUFBSTs7ZUFlbEIsNkJBQTZCLEdBQUksWUFBTTtBQUNyQyxnQkFBSSxTQUFTLEdBQUUsU0FBWCxTQUFTLEdBQVM7QUFDbEIscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLG9CQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLDBCQUFVLENBQUMsNkJBQTZCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2VBQzNELENBQUMsQ0FBQzthQUNOLEFBQUMsQ0FBQzs7QUFFSCxnQkFBSSxpQ0FBaUMsR0FBRSxTQUFuQyxpQ0FBaUMsQ0FBRSxRQUFRLEVBQUk7QUFDL0MscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLHVCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLHlCQUFTLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztlQUM3RCxDQUFDLENBQUM7YUFDTixBQUFDLENBQUM7O0FBRUgsZ0JBQUksdUNBQXVDLEdBQUUsU0FBekMsdUNBQXVDLENBQUUsUUFBUSxFQUFJO0FBQ3ZELGtCQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLE1B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LENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7V0FDRjs7O2lCQUVxQixrQ0FBRztBQUN2QixnQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQzVCLGFBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNsRCxhQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDeEQ7OztpQkFFOEIsMkNBQUc7QUFDaEMsZ0JBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7QUFDckMsZ0JBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0FBQ3JDLGFBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUMzRDs7O2VBdE5VLG1CQUFtQiIsImZpbGUiOiJpbXNpLWFuYWx5c2lzLWhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7Q2FtcGFpZ259IGZyb20gJ3BsYXRpbnVtL0NhbXBhaWduJztcbmltcG9ydCB7RXhwb3J0fSBmcm9tICdwbGF0aW51bS9FeHBvcnQnO1xuaW1wb3J0IHtJbXBvcnR9IGZyb20gJ3BsYXRpbnVtL0ltcG9ydCc7XG5pbXBvcnQge0ltc2lTdGF0dXN9IGZyb20gJ3BsYXRpbnVtL0ltc2lTdGF0dXMnO1xuaW1wb3J0IHtEYXRlRm9ybWF0VmFsdWVDb252ZXJ0ZXJ9IGZyb20gJ2RhdGUtZm9ybWF0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5cbnZhciBzZWxmO1xuXG5leHBvcnQgY2xhc3MgSW1zaUFuYWx5c2lzSGlzdG9yeXtcbiAgY3VycmVudFN0YXR1c0ZvckFsbEltc2lzPW51bGw7XG4gIGFuYWx5c2lzRGF0YT1udWxsO1xuICBlcnJvck1lc3NhZ2U9bnVsbDtcbiAgaW1wb3J0RGV0YWlscz1udWxsO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc2VsZj10aGlzO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyKXtcbiAgICBzZWxmLmVycm9yTWVzc2FnZSA9IGVycjtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVjb25maWcpIHtcbiAgICBzZWxmLmVudmlyb25tZW50PXJvdXRlY29uZmlnLmVudmlyb25tZW50O1xuICAgIHNlbGYuZmV0Y2hBbmFseXNpc0hpc3RvcnkoKTtcbiAgfVxuXG4gIGZldGNoQ3VycmVudFN0YXR1c0ZvckFsbEltc2lzID0gKCgpID0+IHtcbiAgICB2YXIgZmV0Y2hEYXRhPSgoKSA9PiAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGxldCBpbXNpU3RhdHVzID0gbmV3IEltc2lTdGF0dXMoKTtcbiAgICAgICAgICBpbXNpU3RhdHVzLmZldGNoQ3VycmVudFN0YXR1c0ZvckFsbEltc2lzKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICBcbiAgICB2YXIgY3VycmVudFN0YXR1c0ZvckFsbEltc2lzU3VjY2VlZGVkPShyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICB2YXIgY3VycmVudFN0YXR1c0ZvckFsbEltc2lzUmVhbGx5U3VjY2VlZGVkPShyZXNwb25zZSA9PiB7XG4gICAgICBzZWxmLmN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcyA9IF8ucmVkdWNlKHJlc3BvbnNlLlZhbHVlcywgZnVuY3Rpb24ob2JqLCBuYW1lQ291bnQpIHtcbiAgICAgICAgdmFyIGtleSA9IG5hbWVDb3VudC5OYW1lID09IFwiRG8gTm90IFJlcHJvY2Vzc1wiID8gJ251bWJlck1hcmtlZEFzUmVjb3JkJ1xuICAgICAgICAgIDogbmFtZUNvdW50Lk5hbWUgPT0gXCJSZXByb2Nlc3NcIiA/ICdudW1iZXJGbGFnZ2VkRm9yUmVwcm9jZXNzaW5nJ1xuICAgICAgICAgIDogbmFtZUNvdW50Lk5hbWUgPT0gXCJTdWNjZXNzZnVsXCIgPyAnbnVtYmVyTWFya2VkQXNTdWNjZXNzZnVsJ1xuICAgICAgICAgIDogJ3RvdGFsSW1zaXMnO1xuICAgICAgICBvYmpba2V5XSA9IG5hbWVDb3VudC5Db3VudDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogWyBzZWxmLmN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcyBdLFxuICAgICAgICBjb3VudDogMVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBcbiAgICB2YXIgY3VycmVudFN0YXR1c0ZvckFsbEltc2lzRmFpbGVkPShlcnIgPT4gIHtcbiAgICAgIHNlbGYubG9hZGluZ0hpc3Rvcnk9ZmFsc2U7XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gYEVycm9yIGZldGNoaW5nIGN1cnJlbnQgc3RhdHVzIGZvciBhbGwgSU1TSXM6ICR7ZXJyfWA7XG4gICAgICBzZWxmLmhhbmRsZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZldGNoRGF0YSgpXG4gICAgICAudGhlbihjdXJyZW50U3RhdHVzRm9yQWxsSW1zaXNTdWNjZWVkZWQpXG4gICAgICAudGhlbihjdXJyZW50U3RhdHVzRm9yQWxsSW1zaXNSZWFsbHlTdWNjZWVkZWQpXG4gICAgICAuY2F0Y2goY3VycmVudFN0YXR1c0ZvckFsbEltc2lzRmFpbGVkKTtcbiAgfSk7XG5cbiAgZmV0Y2hPcG1BbmFseXNpc0hpc3RvcnkoZ3JpZEFyZ3MpIHtcbiAgICByZXR1cm4gc2VsZi53YWl0Rm9yQW5hbHlzaXNSZXN1bHRzKClcbiAgICAgIC50aGVuKHNlbGYucmV0dXJuT3BtQW5hbHlzaXNIaXN0b3J5KTtcbiAgfVxuXG4gIHJldHVybk9wbUFuYWx5c2lzSGlzdG9yeSgpIHtcbiAgICBsZXQgaGlzdG9yeURhdGEgPSBfLmZpbHRlcihzZWxmLmFuYWx5c2lzRGF0YSwgZnVuY3Rpb24ocmVjb3JkKXtyZXR1cm4gcmVjb3JkLkltcG9ydFR5cGUuaW5kZXhPZihcIk9QTVwiKSA+IC0xO30pO1xuICAgIGxldCBkYXRhVG9SZXR1cm4gPSBfLmNoYWluKGhpc3RvcnlEYXRhKVxuICAgICAgLnNvcnRCeShoaXN0b3J5ID0+IGhpc3RvcnkuSW1wb3J0SWQpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhVG9SZXR1cm4sXG4gICAgICBjb3VudDogZGF0YVRvUmV0dXJuLmxlbmd0aFxuICAgIH07XG4gIH1cblxuICBmZXRjaENhbXBhaWduQW5hbHlzaXNIaXN0b3J5KGdyaWRBcmdzKSB7XG4gICAgcmV0dXJuIHNlbGYud2FpdEZvckFuYWx5c2lzUmVzdWx0cygpXG4gICAgICAudGhlbihzZWxmLnJldHVybkNhbXBhaWduQW5hbHlzaXNIaXN0b3J5KTtcbiAgfVxuXG4gIHJldHVybkNhbXBhaWduQW5hbHlzaXNIaXN0b3J5KCkge1xuICAgIGxldCBoaXN0b3J5RGF0YSA9IF8uZmlsdGVyKHNlbGYuYW5hbHlzaXNEYXRhLCBmdW5jdGlvbihyZWNvcmQpe3JldHVybiByZWNvcmQuSW1wb3J0VHlwZS5pbmRleE9mKFwiT1BNXCIpID09IC0xO30pO1xuICAgIGxldCBkYXRhVG9SZXR1cm4gPSBfLmNoYWluKGhpc3RvcnlEYXRhKVxuICAgICAgICAuc29ydEJ5KGhpc3RvcnkgPT4gaGlzdG9yeS5JbXBvcnRJZClcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhVG9SZXR1cm4sXG4gICAgICBjb3VudDogZGF0YVRvUmV0dXJuLmxlbmd0aFxuICAgIH07XG4gIH1cblxuICB3YWl0Rm9yQW5hbHlzaXNSZXN1bHRzKCkge1xuICAgIGxldCBpbml0aWFsVGltZSA9IG1vbWVudCgpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNoZWNrRm9yRGF0YU9yV2FpdChyZXNvbHZlLCByZWplY3QpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0ZvckRhdGFPcldhaXQocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBtaWxsaXNlY29uZHNUb1dhaXQgPSAxMDA7XG5cbiAgICAgIGlmIChzZWxmLmFuYWx5c2lzRGF0YSkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuZXJyb3JMb2FkaW5nQW5hbHlzaXNEYXRhKSB7XG4gICAgICAgIHJlamVjdChzZWxmLmVycm9yTG9hZGluZ0FuYWx5c2lzRGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xuXG4gICAgICBpZiAobm93LnN1YnRyYWN0KDYwLCAnc2Vjb25kcycpID4gaW5pdGlhbFRpbWUpIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICd0aW1lZCBvdXQgd2FpdGluZyBmb3IgYW5hbHlzaXMgZGF0YSB0byBiZSBmZXRjaGVkJ1xuICAgICAgICBzZWxmLmhhbmRsZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHJlamVjdChlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2hlY2tGb3JEYXRhT3JXYWl0LCBtaWxsaXNlY29uZHNUb1dhaXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hBbmFseXNpc0hpc3RvcnkoKSB7XG4gICAgcmV0dXJuIGZldGNoRGF0YSgpXG4gICAgICAudGhlbihhbmFseXNpc1N1Y2NlZWRlZClcbiAgICAgIC50aGVuKGFuYWx5c2lzUmVhbGx5U3VjY2VlZGVkKVxuICAgICAgLmNhdGNoKGFuYWx5c2lzRmFpbGVkKTtcblxuICAgIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBjYW1wYWlnbiA9IG5ldyBDYW1wYWlnbigpO1xuICAgICAgICBjYW1wYWlnbi5jYW1wYWlnbkFuYWx5c2lzU3VtbWFyeShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5hbHlzaXNTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmFseXNpc1JlYWxseVN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgc2VsZi5hbmFseXNpc0RhdGEgPSByZXNwb25zZS5WYWx1ZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5hbHlzaXNGYWlsZWQoZXJyKSB7XG4gICAgICBzZWxmLmVycm9yTG9hZGluZ0FuYWx5c2lzRGF0YSA9IGBFcnJvciBmZXRjaGluZyBhbmFseXNpcyBkYXRhOiAke2Vycn1gO1xuICAgICAgc2VsZi5oYW5kbGVFcnJvcihzZWxmLmVycm9yTG9hZGluZ0FuYWx5c2lzRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0SXRlbShpdGVtKSB7XG4gICAgaXRlbS5kb3dubG9hZFN0YXR1cyA9IFwiZG93bmxvYWRpbmdcIjtcblxuICAgIHZhciB4cG9ydCA9IG5ldyBFeHBvcnQoKTtcbiAgICB4cG9ydC5leHBvcnRJbXBvcnQoaXRlbS5JbXBvcnRJZCwgZXhwb3J0U3VjY2VzcywgZXhwb3J0RXJyb3IpO1xuXG4gICAgZnVuY3Rpb24gZXhwb3J0RXJyb3IocmVzcG9uc2UpIHtcbiAgICAgIGl0ZW0uZG93bmxvYWRTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgaXRlbS5kb3dubG9hZEVycm9yID0gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJztcbiAgICB9XG4gICAgZnVuY3Rpb24gZXhwb3J0U3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLkRvd25sb2FkVXJsKSB7XG4gICAgICAgIGl0ZW0uZG93bmxvYWRTdGF0dXMgPSAnZG93bmxvYWRlZCc7XG4gICAgICAgIGl0ZW0uZG93bmxvYWRVcmwgPSByZXNwb25zZS5Eb3dubG9hZFVybFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZW0uZG93bmxvYWRTdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICBpdGVtLmRvd25sb2FkRXJyb3IgPSAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpZXdTbGRQcm9wZXJ0aWVzKGl0ZW0pIHtcbiAgICB2YXIgbXBvcnQgPSBuZXcgSW1wb3J0KCk7XG4gICAgbXBvcnQuZmV0Y2goaXRlbS5JbXBvcnRJZCwgZmV0Y2hTdWNjZWVkZWQsIGZldGNoRXJyb3IpO1xuXG4gICAgZnVuY3Rpb24gZmV0Y2hFcnJvcihlcnIpIHtcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgZmV0Y2hpbmcgaW1wb3J0IHJlY29yZDogJHtlcnJ9YDtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZXRjaFN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIGZldGNoUmVhbGx5U3VjY2VlZGVkLCBmZXRjaEVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZXRjaFJlYWxseVN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgc2VsZi5pbXBvcnREZXRhaWxzID0gcmVzcG9uc2UuVmFsdWU7XG4gICAgICAkKCcjdmlldy1zbGQtcHJvcGVydGllcy1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEFuYWx5c2lzSGlzdG9yeSgpIHtcbiAgICBzZWxmLmFuYWx5c2lzRGF0YSA9IG51bGw7XG4gICAgc2VsZi5mZXRjaEFuYWx5c2lzSGlzdG9yeSgpO1xuICAgICQoJyNvcG0tYW5hbHlzaXMtaGlzdG9yeS1ncmlkJylbMF0uZ3JpZC5yZWZyZXNoKCk7XG4gICAgJCgnI2NhbXBhaWduLWFuYWx5c2lzLWhpc3RvcnktZ3JpZCcpWzBdLmdyaWQucmVmcmVzaCgpO1xuICB9XG5cbiAgcmVmcmVzaEN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcygpIHtcbiAgICBzZWxmLmN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcyA9IG51bGw7XG4gICAgc2VsZi5mZXRjaEN1cnJlbnRTdGF0dXNGb3JBbGxJbXNpcygpO1xuICAgICQoJyNjdXJyZW50LXN0YXR1cy1mb3ItYWxsLWltc2lzLWdyaWQnKVswXS5ncmlkLnJlZnJlc2goKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
