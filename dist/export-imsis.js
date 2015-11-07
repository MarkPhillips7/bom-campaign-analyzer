System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Import', 'platinum/Export', 'platinum/ImportType', 'jquery', 'underscore'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Import, Export, LoadFileHeader, ImportType, $, _, self, ExportImsis;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumCampaign) {
      Campaign = _platinumCampaign.Campaign;
    }, function (_platinumImport) {
      Import = _platinumImport.Import;
    }, function (_platinumExport) {
      Export = _platinumExport.Export;
      LoadFileHeader = _platinumExport.LoadFileHeader;
    }, function (_platinumImportType) {
      ImportType = _platinumImportType.ImportType;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_underscore) {
      _ = _underscore['default'];
    }],
    execute: function () {
      ExportImsis = (function () {
        function ExportImsis() {
          _classCallCheck(this, ExportImsis);

          this.campaigns = null;
          this.campaignSelections = [];
          this.campaignSelectionsValidationClass = '';
          this.errorMessage = null;
          this.heading = 'Export IMSIs for Reprocessing';
          this.imsisToExport = null;
          this.imsisToExportValidationClass = '';
          this.imsisFromSelectedCampaigns = 'IMSIs marked for reprocessing from selected campaigns';
          this.imsisAllForReprocessing = 'All IMSIs marked for reprocessing';
          this.imsisFromOpmVariances = 'IMSIs marked for reprocessing from OPM variances';
          this.imsiSelections = [];
          this.isDownloading = false;
          this.isValid = false;
          this.isSldPropertiesValid = false;
          this.showValidationErrors = false;
          this.showSldPropertiesValidationErrors = false;
          this.targetSpec = null;
          this.targetSpecValidationClass = '';
          this.formatVersion = '01.03';
          this.userStillNeedsToClickDownloadLink = false;
          this.fileDate = null;
          this.fileDateValidationClass = '';
          this.fileId = null;
          this.fileIdValidationClass = '';
          this.wtsFormatVersion = '01.03';
          this.description = null;
          this.descriptionValidationClass = '';
          this.author = null;
          this.authorValidationClass = '';
          this.checker = null;
          this.checkerValidationClass = '';
          this.authorizer = null;
          this.authorizerValidationClass = '';
          this.downloadUrl = '';
          this.isDownloadReady = false;
          this.downloadError = '';
          this.isDownloadError = false;

          self = this;
          self.imsiSelections = [self.imsisAllForReprocessing, self.imsisFromOpmVariances, self.imsisFromSelectedCampaigns];
          self.resetSelections();
        }

        _createClass(ExportImsis, [{
          key: 'resetSelections',
          value: function resetSelections() {
            self.imsisToExport = null;
            self.campaignSelections = [];
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;
            self.fetchCampaignList();

            self.validate(false);
          }
        }, {
          key: 'attached',
          value: function attached() {
            $('.modal').on('shown.bs.modal', function () {
              $(this).find('[autofocus]').focus();
            });
          }
        }, {
          key: 'validateImsisToExport',
          value: function validateImsisToExport() {
            var isValid = !!self.imsisToExport;
            self.imsisToExportValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateCampaignSelections',
          value: function validateCampaignSelections() {
            var isValid = self.imsisToExport !== self.imsisFromSelectedCampaigns || self.campaignSelections.length > 0;

            self.campaignSelectionsValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validate',
          value: function validate(showValidationErrors) {
            self.showValidationErrors |= showValidationErrors;

            var isValid = self.validateImsisToExport();
            isValid = self.validateCampaignSelections() && isValid;

            self.isValid = isValid;

            return isValid;
          }
        }, {
          key: 'validateSldProperties',
          value: function validateSldProperties(showValidationErrors) {
            self.showSldPropertiesValidationErrors |= showValidationErrors;

            var isValid = self.validateTargetSpec();
            isValid = self.validateFileDate() && isValid;
            isValid = self.validateFileId() && isValid;
            isValid = self.validateDescription() && isValid;
            isValid = self.validateAuthor() && isValid;
            isValid = self.validateChecker() && isValid;
            isValid = self.validateAuthorizer() && isValid;

            self.isSldPropertiesValid = isValid;

            return isValid;
          }
        }, {
          key: 'validateTargetSpec',
          value: function validateTargetSpec() {
            var isValid = !!self.targetSpec;
            self.targetSpecValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateFileDate',
          value: function validateFileDate() {
            var isValid = !!self.fileDate;
            self.fileDateValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateFileId',
          value: function validateFileId() {
            var isValid = !!self.fileId;
            self.fileIdValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateDescription',
          value: function validateDescription() {
            var isValid = !!self.description;
            self.descriptionValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateAuthor',
          value: function validateAuthor() {
            var isValid = !!self.author;
            self.authorValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateChecker',
          value: function validateChecker() {
            var isValid = !!self.checker;
            self.checkerValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateAuthorizer',
          value: function validateAuthorizer() {
            var isValid = !!self.authorizer;
            self.authorizerValidationClass = isValid ? 'has-success' : self.showSldPropertiesValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'fetchCampaignList',
          value: function fetchCampaignList() {
            var campaign = new Campaign();

            campaign.list(campaignListSucceeded, campaignListFailed);

            function campaignListSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, campaignListReallySucceeded, campaignListFailed);
            }

            function campaignListReallySucceeded(response) {
              self.campaigns = response.Values;
            }

            function campaignListFailed(err) {
              self.handleError('Error loading campaigns: ' + err);
            }
          }
        }, {
          key: 'downloadClicked',
          value: function downloadClicked() {
            self.userStillNeedsToClickDownloadLink = false;

            return true;
          }
        }, {
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'exportToSld',
          value: function exportToSld() {
            self.linkOffsetClass = "";
            self.isDownloadReady = false;
            self.isDownloadError = false;

            if (!self.validate(true)) {
              return;
            }

            $('#enter-sld-properties-modal').modal('show');
          }
        }, {
          key: 'generateSldFile',
          value: function generateSldFile() {
            if (!self.validateSldProperties(true)) {
              return;
            }

            $('#enter-sld-properties-modal').modal('hide');
            self.isDownloading = true;
            self.userStillNeedsToClickDownloadLink = true;

            var header = new LoadFileHeader();
            header.TargetSpec = self.targetSpec;
            header.FormatVersion = self.formatVersion;
            header.FileDate = self.fileDate;
            header.FileIdentifier = self.fileId;
            header.WtsFormatVersion = self.wtsFormatVersion;
            header.Description = self.description;
            header.Author = self.author;
            header.Checker = self.checker;
            header.Authoriser = self.authorizer;

            var xport = new Export();
            var exportType = '';
            var campaignsToUse = [];
            if (self.imsisToExport == self.imsisAllForReprocessing) {
              exportType = 'MarkedForReprocessing';
            } else if (self.imsisToExport == self.imsisFromOpmVariances) {
              exportType = 'MarkedForReprocessingFromOpmVariances';
            } else if (self.imsisToExport == self.imsisFromSelectedCampaigns) {
              exportType = 'MarkedFromSelectedCampaigns';
              campaignsToUse = self.campaignSelections;
            }

            xport.generateExport(header, campaignsToUse, exportType, 'Sld', createExportReallySucceeded, createExportFailed);

            function createExportSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, createExportReallySucceeded, createExportFailed);
            }

            function createExportReallySucceeded(response) {
              if (response.DownloadUrl) {
                self.downloadUrl = response.DownloadUrl;
                self.isDownloadReady = true;
                self.isDownloadError = false;
              } else {
                self.isDownloadReady = false;
                self.isDownloadError = true;
                self.downloadError = 'There are no IMSIs available for download.';
                self.userStillNeedsToClickDownloadLink = false;
              }
              self.isDownloading = false;
            }

            function createExportFailed(err) {
              self.isDownloadReady = false;
              self.isDownloadError = true;
              self.downloadError = 'An unexpected error occurred.';
              self.isDownloading = false;
              self.userStillNeedsToClickDownloadLink = false;
            }
          }
        }, {
          key: 'exportToExcel',
          value: function exportToExcel() {
            self.linkOffsetClass = "col-sm-offset-4";
            self.isDownloadReady = false;
            self.isDownloadError = false;

            if (!self.validate(true)) {
              return;
            }

            self.isDownloading = true;
            self.userStillNeedsToClickDownloadLink = true;

            var xport = new Export();
            var header = new LoadFileHeader();
            var campaignsToUse = [];
            var exportType = '';
            if (self.imsisToExport == self.imsisAllForReprocessing) {
              exportType = 'MarkedForReprocessing';
            } else if (self.imsisToExport == self.imsisFromOpmVariances) {
              exportType = 'MarkedForReprocessingFromOpmVariances';
            } else if (self.imsisToExport == self.imsisFromSelectedCampaigns) {
              exportType = 'MarkedFromSelectedCampaigns';
              campaignsToUse = self.campaignSelections;
            }

            xport.generateExport(header, campaignsToUse, exportType, 'Excel', exportSuccess, exportError);

            function exportError(response) {
              self.isDownloadReady = false;
              self.isDownloadError = true;
              self.downloadError = 'An unexpected error occurred.';
              self.isDownloading = false;
              self.userStillNeedsToClickDownloadLink = false;
            }
            function exportSuccess(response) {
              if (response.DownloadUrl) {
                self.downloadUrl = response.DownloadUrl;
                self.isDownloadReady = true;
                self.isDownloadError = false;
              } else {
                self.isDownloadReady = false;
                self.isDownloadError = true;
                self.downloadError = 'There are no IMSIs available for download.';
                self.userStillNeedsToClickDownloadLink = false;
              }
              self.isDownloading = false;
            }
          }
        }]);

        return ExportImsis;
      })();

      _export('ExportImsis', ExportImsis);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LEdBQUcsSUFBSSxDQUFDO0FBQzVCLG9CQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztlQUM5QixNQUNJO0FBQ0gsb0JBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQzdCLG9CQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUM1QixvQkFBSSxDQUFDLGFBQWEsR0FBRyw0Q0FBNEMsQ0FBQztBQUNsRSxvQkFBSSxDQUFDLGlDQUFpQyxHQUFHLEtBQUssQ0FBQztlQUNoRDtBQUNELGtCQUFJLENBQUMsYUFBYSxHQUFDLEtBQUssQ0FBQzthQUMxQjtXQUNGOzs7ZUEvU1UsV0FBVyIsImZpbGUiOiJleHBvcnQtaW1zaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JvbUdsb2JhbH0gZnJvbSAncGxhdGludW0vR2xvYmFsJztcbmltcG9ydCB7Q2FtcGFpZ259IGZyb20gJ3BsYXRpbnVtL0NhbXBhaWduJztcbmltcG9ydCB7SW1wb3J0fSBmcm9tICdwbGF0aW51bS9JbXBvcnQnO1xuaW1wb3J0IHtFeHBvcnQsTG9hZEZpbGVIZWFkZXJ9IGZyb20gJ3BsYXRpbnVtL0V4cG9ydCc7XG5pbXBvcnQge0ltcG9ydFR5cGV9IGZyb20gJ3BsYXRpbnVtL0ltcG9ydFR5cGUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5cbnZhciBzZWxmO1xuXG5leHBvcnQgY2xhc3MgRXhwb3J0SW1zaXMge1xuICBjYW1wYWlnbnM9bnVsbDtcbiAgY2FtcGFpZ25TZWxlY3Rpb25zPVtdO1xuICBjYW1wYWlnblNlbGVjdGlvbnNWYWxpZGF0aW9uQ2xhc3M9Jyc7XG4gIGVycm9yTWVzc2FnZT1udWxsO1xuICBoZWFkaW5nID0gJ0V4cG9ydCBJTVNJcyBmb3IgUmVwcm9jZXNzaW5nJztcbiAgaW1zaXNUb0V4cG9ydCA9IG51bGw7XG4gIGltc2lzVG9FeHBvcnRWYWxpZGF0aW9uQ2xhc3M9Jyc7XG4gIGltc2lzRnJvbVNlbGVjdGVkQ2FtcGFpZ25zID0gJ0lNU0lzIG1hcmtlZCBmb3IgcmVwcm9jZXNzaW5nIGZyb20gc2VsZWN0ZWQgY2FtcGFpZ25zJztcbiAgaW1zaXNBbGxGb3JSZXByb2Nlc3NpbmcgPSAnQWxsIElNU0lzIG1hcmtlZCBmb3IgcmVwcm9jZXNzaW5nJztcbiAgaW1zaXNGcm9tT3BtVmFyaWFuY2VzID0gJ0lNU0lzIG1hcmtlZCBmb3IgcmVwcm9jZXNzaW5nIGZyb20gT1BNIHZhcmlhbmNlcyc7XG4gIGltc2lTZWxlY3Rpb25zID0gW107XG4gIGlzRG93bmxvYWRpbmc9ZmFsc2U7XG4gIGlzVmFsaWQ9ZmFsc2U7XG4gIGlzU2xkUHJvcGVydGllc1ZhbGlkPWZhbHNlO1xuICBzaG93VmFsaWRhdGlvbkVycm9ycz1mYWxzZTtcbiAgc2hvd1NsZFByb3BlcnRpZXNWYWxpZGF0aW9uRXJyb3JzPWZhbHNlO1xuICB0YXJnZXRTcGVjPW51bGw7XG4gIHRhcmdldFNwZWNWYWxpZGF0aW9uQ2xhc3M9Jyc7XG4gIGZvcm1hdFZlcnNpb249JzAxLjAzJztcbiAgdXNlclN0aWxsTmVlZHNUb0NsaWNrRG93bmxvYWRMaW5rPWZhbHNlO1xuICBmaWxlRGF0ZT1udWxsO1xuICBmaWxlRGF0ZVZhbGlkYXRpb25DbGFzcz0nJztcbiAgZmlsZUlkPW51bGw7XG4gIGZpbGVJZFZhbGlkYXRpb25DbGFzcz0nJztcbiAgd3RzRm9ybWF0VmVyc2lvbj0nMDEuMDMnO1xuICBkZXNjcmlwdGlvbj1udWxsO1xuICBkZXNjcmlwdGlvblZhbGlkYXRpb25DbGFzcz0nJztcbiAgYXV0aG9yPW51bGw7XG4gIGF1dGhvclZhbGlkYXRpb25DbGFzcz0nJztcbiAgY2hlY2tlcj1udWxsO1xuICBjaGVja2VyVmFsaWRhdGlvbkNsYXNzPScnO1xuICBhdXRob3JpemVyPW51bGw7XG4gIGF1dGhvcml6ZXJWYWxpZGF0aW9uQ2xhc3M9Jyc7XG4gIGRvd25sb2FkVXJsPScnO1xuICBpc0Rvd25sb2FkUmVhZHk9ZmFsc2U7XG4gIGRvd25sb2FkRXJyb3IgPSAnJztcbiAgaXNEb3dubG9hZEVycm9yID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5pbXNpU2VsZWN0aW9ucyA9IFtcbiAgICAgIHNlbGYuaW1zaXNBbGxGb3JSZXByb2Nlc3NpbmcsXG4gICAgICBzZWxmLmltc2lzRnJvbU9wbVZhcmlhbmNlcyxcbiAgICAgIHNlbGYuaW1zaXNGcm9tU2VsZWN0ZWRDYW1wYWlnbnNdO1xuICAgIHNlbGYucmVzZXRTZWxlY3Rpb25zKCk7XG4gIH1cblxuICByZXNldFNlbGVjdGlvbnMoKXtcbiAgICBzZWxmLmltc2lzVG9FeHBvcnQ9bnVsbDtcbiAgICBzZWxmLmNhbXBhaWduU2VsZWN0aW9ucz1bXTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVjb25maWcpIHtcbiAgICBzZWxmLmVudmlyb25tZW50PXJvdXRlY29uZmlnLmVudmlyb25tZW50O1xuICAgIHNlbGYuZmV0Y2hDYW1wYWlnbkxpc3QoKTtcblxuICAgIHNlbGYudmFsaWRhdGUoZmFsc2UpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgLy8gRXZlcnkgdGltZSBhIG1vZGFsIGlzIHNob3duLCBpZiBpdCBoYXMgYW4gYXV0b2ZvY3VzIGVsZW1lbnQsIGZvY3VzIG9uIGl0LlxuICAgICQoJy5tb2RhbCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5maW5kKCdbYXV0b2ZvY3VzXScpLmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUltc2lzVG9FeHBvcnQoKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5pbXNpc1RvRXhwb3J0O1xuICAgIHNlbGYuaW1zaXNUb0V4cG9ydFZhbGlkYXRpb25DbGFzcyA9IGlzVmFsaWQgPyAnaGFzLXN1Y2Nlc3MnIDogc2VsZi5zaG93VmFsaWRhdGlvbkVycm9ycyA/ICdoYXMtZXJyb3InIDogJyc7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICB2YWxpZGF0ZUNhbXBhaWduU2VsZWN0aW9ucygpe1xuICAgIGxldCBpc1ZhbGlkID0gc2VsZi5pbXNpc1RvRXhwb3J0ICE9PSBzZWxmLmltc2lzRnJvbVNlbGVjdGVkQ2FtcGFpZ25zIHx8XG4gICAgICBzZWxmLmNhbXBhaWduU2VsZWN0aW9ucy5sZW5ndGggPiAwO1xuXG4gICAgc2VsZi5jYW1wYWlnblNlbGVjdGlvbnNWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGUoc2hvd1ZhbGlkYXRpb25FcnJvcnMpe1xuICAgIHNlbGYuc2hvd1ZhbGlkYXRpb25FcnJvcnMgfD0gc2hvd1ZhbGlkYXRpb25FcnJvcnM7XG5cbiAgICAvL05lZWQgdG8gY2FsbCBlYWNoIHZhbGlkYXRlIG1ldGhvZCBldmVuIGlmIDFzdCBmYWlscywgc28gY2Fubm90IGRvICdzZWxmLnZhbGlkYXRlQSgpICYmIHNlbGYudmFsaWRhdGVCKCkgLi4uJ1xuICAgIGxldCBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUltc2lzVG9FeHBvcnQoKTtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUNhbXBhaWduU2VsZWN0aW9ucygpICYmIGlzVmFsaWQ7XG5cbiAgICBzZWxmLmlzVmFsaWQ9aXNWYWxpZDtcblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVTbGRQcm9wZXJ0aWVzKHNob3dWYWxpZGF0aW9uRXJyb3JzKXtcbiAgICBzZWxmLnNob3dTbGRQcm9wZXJ0aWVzVmFsaWRhdGlvbkVycm9ycyB8PSBzaG93VmFsaWRhdGlvbkVycm9ycztcblxuICAgIC8vTmVlZCB0byBjYWxsIGVhY2ggdmFsaWRhdGUgbWV0aG9kIGV2ZW4gaWYgMXN0IGZhaWxzLCBzbyBjYW5ub3QgZG8gJ3NlbGYudmFsaWRhdGVBKCkgJiYgc2VsZi52YWxpZGF0ZUIoKSAuLi4nXG4gICAgbGV0IGlzVmFsaWQgPSBzZWxmLnZhbGlkYXRlVGFyZ2V0U3BlYygpO1xuICAgIGlzVmFsaWQgPSBzZWxmLnZhbGlkYXRlRmlsZURhdGUoKSAmJiBpc1ZhbGlkO1xuICAgIGlzVmFsaWQgPSBzZWxmLnZhbGlkYXRlRmlsZUlkKCkgJiYgaXNWYWxpZDtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZURlc2NyaXB0aW9uKCkgJiYgaXNWYWxpZDtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUF1dGhvcigpICYmIGlzVmFsaWQ7XG4gICAgaXNWYWxpZCA9IHNlbGYudmFsaWRhdGVDaGVja2VyKCkgJiYgaXNWYWxpZDtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUF1dGhvcml6ZXIoKSAmJiBpc1ZhbGlkO1xuXG4gICAgc2VsZi5pc1NsZFByb3BlcnRpZXNWYWxpZD1pc1ZhbGlkO1xuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFNwZWMoKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi50YXJnZXRTcGVjO1xuICAgIHNlbGYudGFyZ2V0U3BlY1ZhbGlkYXRpb25DbGFzcyA9IGlzVmFsaWQgPyAnaGFzLXN1Y2Nlc3MnIDogc2VsZi5zaG93U2xkUHJvcGVydGllc1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVGaWxlRGF0ZSgpe1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLmZpbGVEYXRlO1xuICAgIHNlbGYuZmlsZURhdGVWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1NsZFByb3BlcnRpZXNWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuICB2YWxpZGF0ZUZpbGVJZCgpe1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLmZpbGVJZDtcbiAgICBzZWxmLmZpbGVJZFZhbGlkYXRpb25DbGFzcyA9IGlzVmFsaWQgPyAnaGFzLXN1Y2Nlc3MnIDogc2VsZi5zaG93U2xkUHJvcGVydGllc1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24oKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5kZXNjcmlwdGlvbjtcbiAgICBzZWxmLmRlc2NyaXB0aW9uVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dTbGRQcm9wZXJ0aWVzVmFsaWRhdGlvbkVycm9ycyA/ICdoYXMtZXJyb3InIDogJyc7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cbiAgdmFsaWRhdGVBdXRob3IoKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5hdXRob3I7XG4gICAgc2VsZi5hdXRob3JWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1NsZFByb3BlcnRpZXNWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuICB2YWxpZGF0ZUNoZWNrZXIoKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5jaGVja2VyO1xuICAgIHNlbGYuY2hlY2tlclZhbGlkYXRpb25DbGFzcyA9IGlzVmFsaWQgPyAnaGFzLXN1Y2Nlc3MnIDogc2VsZi5zaG93U2xkUHJvcGVydGllc1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG4gIHZhbGlkYXRlQXV0aG9yaXplcigpe1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLmF1dGhvcml6ZXI7XG4gICAgc2VsZi5hdXRob3JpemVyVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dTbGRQcm9wZXJ0aWVzVmFsaWRhdGlvbkVycm9ycyA/ICdoYXMtZXJyb3InIDogJyc7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cbiAgXG4gIGZldGNoQ2FtcGFpZ25MaXN0KCkge1xuICAgIGxldCBjYW1wYWlnbiA9IG5ldyBDYW1wYWlnbigpO1xuXG4gICAgY2FtcGFpZ24ubGlzdChjYW1wYWlnbkxpc3RTdWNjZWVkZWQsIGNhbXBhaWduTGlzdEZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBjYW1wYWlnbkxpc3RTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCBjYW1wYWlnbkxpc3RSZWFsbHlTdWNjZWVkZWQsIGNhbXBhaWduTGlzdEZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FtcGFpZ25MaXN0UmVhbGx5U3VjY2VlZGVkKHJlc3BvbnNlKXtcbiAgICAgIHNlbGYuY2FtcGFpZ25zID0gcmVzcG9uc2UuVmFsdWVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbXBhaWduTGlzdEZhaWxlZChlcnIpIHtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoYEVycm9yIGxvYWRpbmcgY2FtcGFpZ25zOiAke2Vycn1gKTtcbiAgICB9XG4gIH1cbiAgXG4gIGRvd25sb2FkQ2xpY2tlZCgpIHtcbiAgICBzZWxmLnVzZXJTdGlsbE5lZWRzVG9DbGlja0Rvd25sb2FkTGluayA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGhhbmRsZUVycm9yKGVycil7XG4gICAgc2VsZi5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gIH1cblxuICBleHBvcnRUb1NsZCgpIHtcbiAgICBzZWxmLmxpbmtPZmZzZXRDbGFzcz1cIlwiO1xuICAgIHNlbGYuaXNEb3dubG9hZFJlYWR5ID0gZmFsc2U7XG4gICAgc2VsZi5pc0Rvd25sb2FkRXJyb3IgPSBmYWxzZTtcblxuICAgIGlmICghc2VsZi52YWxpZGF0ZSh0cnVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICQoJyNlbnRlci1zbGQtcHJvcGVydGllcy1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gIH1cblxuICBnZW5lcmF0ZVNsZEZpbGUoKSB7XG4gICAgaWYoIXNlbGYudmFsaWRhdGVTbGRQcm9wZXJ0aWVzKHRydWUpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkKCcjZW50ZXItc2xkLXByb3BlcnRpZXMtbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgIHNlbGYuaXNEb3dubG9hZGluZz10cnVlO1xuICAgIHNlbGYudXNlclN0aWxsTmVlZHNUb0NsaWNrRG93bmxvYWRMaW5rPXRydWU7XG5cbiAgICBsZXQgaGVhZGVyID0gbmV3IExvYWRGaWxlSGVhZGVyKCk7XG4gICAgaGVhZGVyLlRhcmdldFNwZWMgPSBzZWxmLnRhcmdldFNwZWM7XG4gICAgaGVhZGVyLkZvcm1hdFZlcnNpb24gID0gc2VsZi5mb3JtYXRWZXJzaW9uO1xuICAgIGhlYWRlci5GaWxlRGF0ZSAgPSBzZWxmLmZpbGVEYXRlO1xuICAgIGhlYWRlci5GaWxlSWRlbnRpZmllciAgPSBzZWxmLmZpbGVJZDtcbiAgICBoZWFkZXIuV3RzRm9ybWF0VmVyc2lvbiA9IHNlbGYud3RzRm9ybWF0VmVyc2lvbjtcbiAgICBoZWFkZXIuRGVzY3JpcHRpb24gID0gc2VsZi5kZXNjcmlwdGlvbjtcbiAgICBoZWFkZXIuQXV0aG9yICA9IHNlbGYuYXV0aG9yO1xuICAgIGhlYWRlci5DaGVja2VyICA9IHNlbGYuY2hlY2tlcjtcbiAgICBoZWFkZXIuQXV0aG9yaXNlciAgPSBzZWxmLmF1dGhvcml6ZXI7XG5cbiAgICB2YXIgeHBvcnQgPSBuZXcgRXhwb3J0KCk7XG4gICAgdmFyIGV4cG9ydFR5cGUgPSAnJztcbiAgICB2YXIgY2FtcGFpZ25zVG9Vc2UgPSBbXTtcbiAgICBpZiAoc2VsZi5pbXNpc1RvRXhwb3J0ID09IHNlbGYuaW1zaXNBbGxGb3JSZXByb2Nlc3NpbmcpIHtcbiAgICAgIGV4cG9ydFR5cGUgPSAnTWFya2VkRm9yUmVwcm9jZXNzaW5nJztcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZi5pbXNpc1RvRXhwb3J0ID09IHNlbGYuaW1zaXNGcm9tT3BtVmFyaWFuY2VzKSB7XG4gICAgICBleHBvcnRUeXBlID0gJ01hcmtlZEZvclJlcHJvY2Vzc2luZ0Zyb21PcG1WYXJpYW5jZXMnO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxmLmltc2lzVG9FeHBvcnQgPT0gc2VsZi5pbXNpc0Zyb21TZWxlY3RlZENhbXBhaWducykge1xuICAgICAgZXhwb3J0VHlwZSA9ICdNYXJrZWRGcm9tU2VsZWN0ZWRDYW1wYWlnbnMnO1xuICAgICAgY2FtcGFpZ25zVG9Vc2UgPSBzZWxmLmNhbXBhaWduU2VsZWN0aW9ucztcbiAgICB9XG5cbiAgICB4cG9ydC5nZW5lcmF0ZUV4cG9ydChoZWFkZXIsIGNhbXBhaWduc1RvVXNlLCBleHBvcnRUeXBlLCAnU2xkJywgY3JlYXRlRXhwb3J0UmVhbGx5U3VjY2VlZGVkLCBjcmVhdGVFeHBvcnRGYWlsZWQpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0U3VjY2VlZGVkKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBib21HbG9iYWwuaGFuZGxlUGxhdGludW1SZXNwb25zZShyZXNwb25zZSwgY3JlYXRlRXhwb3J0UmVhbGx5U3VjY2VlZGVkLCBjcmVhdGVFeHBvcnRGYWlsZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4cG9ydFJlYWxseVN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLkRvd25sb2FkVXJsKSB7XG4gICAgICAgIHNlbGYuZG93bmxvYWRVcmwgPSByZXNwb25zZS5Eb3dubG9hZFVybDtcbiAgICAgICAgc2VsZi5pc0Rvd25sb2FkUmVhZHkgPSB0cnVlO1xuICAgICAgICBzZWxmLmlzRG93bmxvYWRFcnJvciA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlbGYuaXNEb3dubG9hZFJlYWR5ID0gZmFsc2U7XG4gICAgICAgIHNlbGYuaXNEb3dubG9hZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5kb3dubG9hZEVycm9yID0gJ1RoZXJlIGFyZSBubyBJTVNJcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLic7XG4gICAgICAgIHNlbGYudXNlclN0aWxsTmVlZHNUb0NsaWNrRG93bmxvYWRMaW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWxmLmlzRG93bmxvYWRpbmc9ZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0RmFpbGVkKGVycikge1xuICAgICAgc2VsZi5pc0Rvd25sb2FkUmVhZHk9IGZhbHNlO1xuICAgICAgc2VsZi5pc0Rvd25sb2FkRXJyb3IgPSB0cnVlO1xuICAgICAgc2VsZi5kb3dubG9hZEVycm9yID0gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgIHNlbGYuaXNEb3dubG9hZGluZz1mYWxzZTtcbiAgICAgIHNlbGYudXNlclN0aWxsTmVlZHNUb0NsaWNrRG93bmxvYWRMaW5rID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0VG9FeGNlbCgpIHtcbiAgICBzZWxmLmxpbmtPZmZzZXRDbGFzcz1cImNvbC1zbS1vZmZzZXQtNFwiO1xuICAgIHNlbGYuaXNEb3dubG9hZFJlYWR5ID0gZmFsc2U7XG4gICAgc2VsZi5pc0Rvd25sb2FkRXJyb3IgPSBmYWxzZTtcblxuICAgIGlmICghc2VsZi52YWxpZGF0ZSh0cnVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaXNEb3dubG9hZGluZz10cnVlO1xuICAgIHNlbGYudXNlclN0aWxsTmVlZHNUb0NsaWNrRG93bmxvYWRMaW5rPXRydWU7XG5cbiAgICB2YXIgeHBvcnQgPSBuZXcgRXhwb3J0KCk7XG4gICAgdmFyIGhlYWRlciA9IG5ldyBMb2FkRmlsZUhlYWRlcigpO1xuICAgIHZhciBjYW1wYWlnbnNUb1VzZSA9IFtdO1xuICAgIHZhciBleHBvcnRUeXBlID0gJyc7XG4gICAgaWYgKHNlbGYuaW1zaXNUb0V4cG9ydCA9PSBzZWxmLmltc2lzQWxsRm9yUmVwcm9jZXNzaW5nKSB7XG4gICAgICBleHBvcnRUeXBlID0gJ01hcmtlZEZvclJlcHJvY2Vzc2luZyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGYuaW1zaXNUb0V4cG9ydCA9PSBzZWxmLmltc2lzRnJvbU9wbVZhcmlhbmNlcykge1xuICAgICAgZXhwb3J0VHlwZSA9ICdNYXJrZWRGb3JSZXByb2Nlc3NpbmdGcm9tT3BtVmFyaWFuY2VzJztcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZi5pbXNpc1RvRXhwb3J0ID09IHNlbGYuaW1zaXNGcm9tU2VsZWN0ZWRDYW1wYWlnbnMpIHtcbiAgICAgIGV4cG9ydFR5cGUgPSAnTWFya2VkRnJvbVNlbGVjdGVkQ2FtcGFpZ25zJztcbiAgICAgIGNhbXBhaWduc1RvVXNlID0gc2VsZi5jYW1wYWlnblNlbGVjdGlvbnM7XG4gICAgfVxuXG4gICAgeHBvcnQuZ2VuZXJhdGVFeHBvcnQoaGVhZGVyLCBjYW1wYWlnbnNUb1VzZSwgZXhwb3J0VHlwZSwgJ0V4Y2VsJywgZXhwb3J0U3VjY2VzcywgZXhwb3J0RXJyb3IpO1xuXG4gICAgZnVuY3Rpb24gZXhwb3J0RXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgc2VsZi5pc0Rvd25sb2FkUmVhZHk9IGZhbHNlO1xuICAgICAgICBzZWxmLmlzRG93bmxvYWRFcnJvciA9IHRydWU7XG4gICAgICAgIHNlbGYuZG93bmxvYWRFcnJvciA9ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLic7XG4gICAgICBzZWxmLmlzRG93bmxvYWRpbmc9ZmFsc2U7XG4gICAgICBzZWxmLnVzZXJTdGlsbE5lZWRzVG9DbGlja0Rvd25sb2FkTGluayA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBleHBvcnRTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2UuRG93bmxvYWRVcmwpIHtcbiAgICAgICAgc2VsZi5kb3dubG9hZFVybCA9IHJlc3BvbnNlLkRvd25sb2FkVXJsO1xuICAgICAgICBzZWxmLmlzRG93bmxvYWRSZWFkeSA9IHRydWU7XG4gICAgICAgIHNlbGYuaXNEb3dubG9hZEVycm9yID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VsZi5pc0Rvd25sb2FkUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5pc0Rvd25sb2FkRXJyb3IgPSB0cnVlO1xuICAgICAgICBzZWxmLmRvd25sb2FkRXJyb3IgPSAnVGhlcmUgYXJlIG5vIElNU0lzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuJztcbiAgICAgICAgc2VsZi51c2VyU3RpbGxOZWVkc1RvQ2xpY2tEb3dubG9hZExpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlbGYuaXNEb3dubG9hZGluZz1mYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
