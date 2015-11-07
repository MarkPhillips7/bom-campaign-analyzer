System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Import', 'platinum/ImportType', 'aurelia-framework', 'underscore', 'file-helper'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Import, ImportType, bindable, _, FileHelper, self, SldUpload;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_platinumCampaign) {
      Campaign = _platinumCampaign.Campaign;
    }, function (_platinumImport) {
      Import = _platinumImport.Import;
    }, function (_platinumImportType) {
      ImportType = _platinumImportType.ImportType;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }, function (_underscore) {
      _ = _underscore['default'];
    }, function (_fileHelper) {
      FileHelper = _fileHelper.FileHelper;
    }],
    execute: function () {
      SldUpload = (function () {
        function SldUpload() {
          _classCallCheck(this, SldUpload);

          this.campaignId = null;
          this.campaignNameValidationClass = '';
          this.campaignNotSelected = 'Select Campaign';
          this.campaignIdValidationClass = '';
          this.campaignName = null;
          this.campaignNameToAdd = '';
          this.campaigns = [];
          this.errorMessage = null;
          this.file = null;
          this.filePath = null;
          this.fileValidationClass = '';
          this.heading = 'Import SLD File for Analysis';
          this.importTypeId = null;
          this.importTypeIdValidationClass = '';
          this.importTypeName = null;
          this.importTypeNotSelected = 'Select Campaign Results Type';
          this.importTypes = [];
          this.isAddCampaignValid = false;
          this.isValid = false;
          this.notes = null;
          this.showAddCampaignValidationErrors = false;
          this.showValidationErrors = false;

          self = this;
          self.resetSelections();
        }

        _createClass(SldUpload, [{
          key: 'resetSelections',
          value: function resetSelections() {
            self.file = null;
            self.filePath = null;
            self.importTypeId = null;
            self.campaignId = null;
            self.campaignNameToAdd = null;
            self.notes = null;
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;

            self.fetchCampaignList();
            self.fetchImportTypeList();

            self.validate(false);
            self.validateAddCampaign(false);
          }
        }, {
          key: 'attached',
          value: function attached() {
            $('.modal').on('shown.bs.modal', function () {
              $(this).find('[autofocus]').focus();
            });
          }
        }, {
          key: 'validateCampaignId',
          value: function validateCampaignId() {
            var isValid = self.campaignId && self.campaignId !== self.campaignNotSelected;
            self.campaignIdValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateImportTypeId',
          value: function validateImportTypeId() {
            var isValid = self.importTypeId && self.importTypeId !== self.importTypeNotSelected;
            self.importTypeIdValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validateFile',
          value: function validateFile() {
            var isValid = !!self.file;

            if (!isValid) {
              self.fileInvalidMessage = 'A file must be chosen.';
            } else {
              isValid = FileHelper.isFilenameValid(self.filePath, 'SLD');
              if (!isValid) {
                self.fileInvalidMessage = 'File must have SLD extension.';
              }
            }

            self.fileValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validate',
          value: function validate(showValidationErrors) {
            self.showValidationErrors |= showValidationErrors;

            var isValid = self.validateCampaignId();
            isValid = self.validateImportTypeId() && isValid;
            isValid = self.validateFile() && isValid;

            self.isValid = isValid;

            return isValid;
          }
        }, {
          key: 'validateAddCampaign',
          value: function validateAddCampaign(showValidationErrors) {
            self.showAddCampaignValidationErrors |= showValidationErrors;

            self.isAddCampaignValid = self.validateCampaignName();

            return self.isAddCampaignValid;
          }
        }, {
          key: 'validateCampaignName',
          value: function validateCampaignName() {
            var isValid = !!self.campaignNameToAdd && self.campaignNameToAdd.length > 0;
            self.campaignNameValidationClass = isValid ? 'has-success' : self.showAddCampaignValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'fetchImportTypeList',
          value: function fetchImportTypeList() {
            var importType = new ImportType();

            importType.list(importTypeListSucceeded, importTypeListFailed);

            function importTypeListSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, importTypeListReallySucceeded, importTypeListFailed);
            }

            function importTypeListReallySucceeded(response) {
              self.importTypes = _.filter(response.Values, function (importType) {
                return importType.Name.indexOf("OPM") == -1;
              });
            }

            function importTypeListFailed(err) {
              self.handleError('Error loading import types: ' + err);
            }
          }
        }, {
          key: 'fetchCampaignList',
          value: function fetchCampaignList(campaignNameToSelect) {
            var campaign = new Campaign();

            campaign.list(campaignListSucceeded, campaignListFailed);

            function campaignListSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, campaignListReallySucceeded, campaignListFailed);
            }

            function campaignListReallySucceeded(response) {
              self.campaigns = response.Values;
              if (campaignNameToSelect) {
                var campaignToSelect = _.find(self.campaigns, function (campaign) {
                  return campaign.Name === campaignNameToSelect;
                });
                if (campaignToSelect) {
                  self.campaignId = campaignToSelect.Id;
                  self.validate();
                }
                self.campaignNameToAdd = null;
              }
            }

            function campaignListFailed(err) {
              self.handleError('Error loading campaigns: ' + err);
            }
          }
        }, {
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'fileSelected',
          value: function fileSelected() {
            self.filePath = null;
            self.file = null;

            if (self.$event.target.files && self.$event.target.files.length > 0) {
              self.file = self.$event.target.files[0];
              self.filePath = self.file.name;
              self.validate();
            }
          }
        }, {
          key: 'createCampaign',
          value: function createCampaign() {
            if (!self.validateAddCampaign(true)) {
              return;
            }

            var campaign = new Campaign();
            campaign.Id = 0;
            campaign.Name = self.campaignNameToAdd;
            campaign.Description = self.campaignNameToAdd;

            campaign.create(campaign, createCampaignSucceeded, createCampaignFailed);

            function createCampaignSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, createCampaignReallySucceeded, createCampaignFailed);
            }

            function createCampaignReallySucceeded(response) {
              self.fetchCampaignList(self.campaignNameToAdd);
              $('#create-campaign-modal').modal('hide');
            }

            function createCampaignFailed(err) {
              self.handleError('Error creating campaign: ' + err);
            }
          }
        }, {
          key: 'submit',
          value: function submit() {
            if (!self.validate(true)) {
              return;
            }

            self.campaignName = _.find(self.campaigns, function (campaign) {
              return campaign.Id == self.campaignId;
            }).Name;
            self.importTypeName = _.find(self.importTypes, function (importType) {
              return importType.Id == self.importTypeId;
            }).Name;

            $('#are-you-sure-modal').modal('show');
          }
        }, {
          key: 'uploadSldFile',
          value: function uploadSldFile() {
            var form = $('#sld-upload-form')[0];
            var formData = new FormData(form);

            var imp = new Import();
            imp.upload(formData, submitFileSucceeded, submitFileFailed);

            function submitFileSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, submitFileReallySucceeded, submitFileFailed);
            }

            function submitFileReallySucceeded(response) {
              $('#file-upload-succeeded-modal').modal('show');
              self.resetSelections();
            }

            function submitFileFailed(err) {
              self.handleError('Error uploading file: ' + err);
            }
          }
        }]);

        return SldUpload;
      })();

      _export('SldUpload', SldUpload);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFDO2FBQ3pGOztBQUVELHFCQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUMzQyxlQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEQsa0JBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4Qjs7QUFFRCxxQkFBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7QUFDN0Isa0JBQUksQ0FBQyxXQUFXLDRCQUEwQixHQUFHLENBQUcsQ0FBQzthQUNsRDtXQUNGOzs7ZUF4T1UsU0FBUyIsImZpbGUiOiJzbGQtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge0NhbXBhaWdufSBmcm9tICdwbGF0aW51bS9DYW1wYWlnbic7XG5pbXBvcnQge0ltcG9ydH0gZnJvbSAncGxhdGludW0vSW1wb3J0JztcbmltcG9ydCB7SW1wb3J0VHlwZX0gZnJvbSAncGxhdGludW0vSW1wb3J0VHlwZSc7XG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IHtGaWxlSGVscGVyfSBmcm9tICdmaWxlLWhlbHBlcidcblxudmFyIHNlbGY7XG5cbmV4cG9ydCBjbGFzcyBTbGRVcGxvYWQge1xuICBjYW1wYWlnbklkID0gbnVsbDtcbiAgY2FtcGFpZ25OYW1lVmFsaWRhdGlvbkNsYXNzPScnO1xuICBjYW1wYWlnbk5vdFNlbGVjdGVkID0gJ1NlbGVjdCBDYW1wYWlnbic7XG4gIGNhbXBhaWduSWRWYWxpZGF0aW9uQ2xhc3M9Jyc7XG4gIGNhbXBhaWduTmFtZT1udWxsO1xuICBjYW1wYWlnbk5hbWVUb0FkZD0nJztcbiAgY2FtcGFpZ25zID0gW107XG4gIGVycm9yTWVzc2FnZT1udWxsO1xuICBmaWxlPW51bGw7XG4gIGZpbGVQYXRoID0gbnVsbDtcbiAgZmlsZVZhbGlkYXRpb25DbGFzcz0nJztcbiAgaGVhZGluZyA9ICdJbXBvcnQgU0xEIEZpbGUgZm9yIEFuYWx5c2lzJztcbiAgaW1wb3J0VHlwZUlkID0gbnVsbDtcbiAgaW1wb3J0VHlwZUlkVmFsaWRhdGlvbkNsYXNzPScnO1xuICBpbXBvcnRUeXBlTmFtZT1udWxsO1xuICBpbXBvcnRUeXBlTm90U2VsZWN0ZWQ9J1NlbGVjdCBDYW1wYWlnbiBSZXN1bHRzIFR5cGUnO1xuICBpbXBvcnRUeXBlcz1bXTtcbiAgaXNBZGRDYW1wYWlnblZhbGlkPWZhbHNlO1xuICBpc1ZhbGlkPWZhbHNlO1xuICBub3RlcyA9IG51bGw7XG4gIHNob3dBZGRDYW1wYWlnblZhbGlkYXRpb25FcnJvcnM9ZmFsc2U7XG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucmVzZXRTZWxlY3Rpb25zKCk7XG4gIH1cblxuICByZXNldFNlbGVjdGlvbnMoKXtcbiAgICBzZWxmLmZpbGU9bnVsbDtcbiAgICBzZWxmLmZpbGVQYXRoPW51bGw7XG4gICAgc2VsZi5pbXBvcnRUeXBlSWQ9bnVsbDtcbiAgICBzZWxmLmNhbXBhaWduSWQ9bnVsbDtcbiAgICBzZWxmLmNhbXBhaWduTmFtZVRvQWRkPW51bGw7XG4gICAgc2VsZi5ub3Rlcz1udWxsO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZWNvbmZpZykge1xuICAgIHNlbGYuZW52aXJvbm1lbnQ9cm91dGVjb25maWcuZW52aXJvbm1lbnQ7XG5cbiAgICBzZWxmLmZldGNoQ2FtcGFpZ25MaXN0KCk7XG4gICAgc2VsZi5mZXRjaEltcG9ydFR5cGVMaXN0KCk7XG5cbiAgICBzZWxmLnZhbGlkYXRlKGZhbHNlKTtcbiAgICBzZWxmLnZhbGlkYXRlQWRkQ2FtcGFpZ24oZmFsc2UpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgLy8gRXZlcnkgdGltZSBhIG1vZGFsIGlzIHNob3duLCBpZiBpdCBoYXMgYW4gYXV0b2ZvY3VzIGVsZW1lbnQsIGZvY3VzIG9uIGl0LlxuICAgICQoJy5tb2RhbCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5maW5kKCdbYXV0b2ZvY3VzXScpLmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZUNhbXBhaWduSWQoKXtcbiAgICBsZXQgaXNWYWxpZCA9IHNlbGYuY2FtcGFpZ25JZCAmJiBzZWxmLmNhbXBhaWduSWQgIT09IHNlbGYuY2FtcGFpZ25Ob3RTZWxlY3RlZDtcbiAgICBzZWxmLmNhbXBhaWduSWRWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVJbXBvcnRUeXBlSWQoKXtcbiAgICBsZXQgaXNWYWxpZCA9IHNlbGYuaW1wb3J0VHlwZUlkICYmIHNlbGYuaW1wb3J0VHlwZUlkICAhPT0gc2VsZi5pbXBvcnRUeXBlTm90U2VsZWN0ZWQ7XG4gICAgc2VsZi5pbXBvcnRUeXBlSWRWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVGaWxlKCl7XG4gICAgbGV0IGlzVmFsaWQgPSAhIXNlbGYuZmlsZTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgc2VsZi5maWxlSW52YWxpZE1lc3NhZ2UgPSAnQSBmaWxlIG11c3QgYmUgY2hvc2VuLic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNWYWxpZCA9IEZpbGVIZWxwZXIuaXNGaWxlbmFtZVZhbGlkKHNlbGYuZmlsZVBhdGgsICdTTEQnKTtcbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBzZWxmLmZpbGVJbnZhbGlkTWVzc2FnZSA9ICdGaWxlIG11c3QgaGF2ZSBTTEQgZXh0ZW5zaW9uLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5maWxlVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKHNob3dWYWxpZGF0aW9uRXJyb3JzKXtcbiAgICBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzIHw9IHNob3dWYWxpZGF0aW9uRXJyb3JzO1xuXG4gICAgLy9OZWVkIHRvIGNhbGwgZWFjaCB2YWxpZGF0ZSBtZXRob2QgZXZlbiBpZiAxc3QgZmFpbHMsIHNvIGNhbm5vdCBkbyAnc2VsZi52YWxpZGF0ZUEoKSAmJiBzZWxmLnZhbGlkYXRlQigpIC4uLidcbiAgICBsZXQgaXNWYWxpZCA9IHNlbGYudmFsaWRhdGVDYW1wYWlnbklkKCk7XG4gICAgaXNWYWxpZCA9IHNlbGYudmFsaWRhdGVJbXBvcnRUeXBlSWQoKSAmJiBpc1ZhbGlkO1xuICAgIGlzVmFsaWQgPSBzZWxmLnZhbGlkYXRlRmlsZSgpICYmIGlzVmFsaWQ7XG5cbiAgICBzZWxmLmlzVmFsaWQ9aXNWYWxpZDtcblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVBZGRDYW1wYWlnbihzaG93VmFsaWRhdGlvbkVycm9ycyl7XG4gICAgc2VsZi5zaG93QWRkQ2FtcGFpZ25WYWxpZGF0aW9uRXJyb3JzIHw9IHNob3dWYWxpZGF0aW9uRXJyb3JzO1xuXG4gICAgc2VsZi5pc0FkZENhbXBhaWduVmFsaWQ9c2VsZi52YWxpZGF0ZUNhbXBhaWduTmFtZSgpO1xuXG4gICAgcmV0dXJuIHNlbGYuaXNBZGRDYW1wYWlnblZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVDYW1wYWlnbk5hbWUoKXtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5jYW1wYWlnbk5hbWVUb0FkZCAmJiBzZWxmLmNhbXBhaWduTmFtZVRvQWRkLmxlbmd0aCA+IDA7XG4gICAgc2VsZi5jYW1wYWlnbk5hbWVWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd0FkZENhbXBhaWduVmFsaWRhdGlvbkVycm9ycyA/ICdoYXMtZXJyb3InIDogJyc7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBmZXRjaEltcG9ydFR5cGVMaXN0KCkge1xuICAgIGxldCBpbXBvcnRUeXBlID0gbmV3IEltcG9ydFR5cGUoKTtcblxuICAgIGltcG9ydFR5cGUubGlzdChpbXBvcnRUeXBlTGlzdFN1Y2NlZWRlZCwgaW1wb3J0VHlwZUxpc3RGYWlsZWQpO1xuXG4gICAgZnVuY3Rpb24gaW1wb3J0VHlwZUxpc3RTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCBpbXBvcnRUeXBlTGlzdFJlYWxseVN1Y2NlZWRlZCwgaW1wb3J0VHlwZUxpc3RGYWlsZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGltcG9ydFR5cGVMaXN0UmVhbGx5U3VjY2VlZGVkKHJlc3BvbnNlKSB7XG4gICAgICAvL3NlbGYuaW1wb3J0VHlwZXMgPSByZXNwb25zZS5WYWx1ZXM7XG4gICAgICBzZWxmLmltcG9ydFR5cGVzID0gXy5maWx0ZXIocmVzcG9uc2UuVmFsdWVzLGZ1bmN0aW9uKGltcG9ydFR5cGUpe3JldHVybiBpbXBvcnRUeXBlLk5hbWUuaW5kZXhPZihcIk9QTVwiKSA9PSAtMTt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbXBvcnRUeXBlTGlzdEZhaWxlZChlcnIpIHtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoYEVycm9yIGxvYWRpbmcgaW1wb3J0IHR5cGVzOiAke2Vycn1gKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaENhbXBhaWduTGlzdChjYW1wYWlnbk5hbWVUb1NlbGVjdCkge1xuICAgIGxldCBjYW1wYWlnbiA9IG5ldyBDYW1wYWlnbigpO1xuXG4gICAgY2FtcGFpZ24ubGlzdChjYW1wYWlnbkxpc3RTdWNjZWVkZWQsIGNhbXBhaWduTGlzdEZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBjYW1wYWlnbkxpc3RTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCBjYW1wYWlnbkxpc3RSZWFsbHlTdWNjZWVkZWQsIGNhbXBhaWduTGlzdEZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FtcGFpZ25MaXN0UmVhbGx5U3VjY2VlZGVkKHJlc3BvbnNlKXtcbiAgICAgIHNlbGYuY2FtcGFpZ25zID0gcmVzcG9uc2UuVmFsdWVzO1xuICAgICAgaWYoY2FtcGFpZ25OYW1lVG9TZWxlY3Qpe1xuICAgICAgICB2YXIgY2FtcGFpZ25Ub1NlbGVjdD0gXy5maW5kKHNlbGYuY2FtcGFpZ25zLFxuICAgICAgICAgIGZ1bmN0aW9uKGNhbXBhaWduKXtyZXR1cm4gY2FtcGFpZ24uTmFtZSA9PT0gY2FtcGFpZ25OYW1lVG9TZWxlY3Q7fSk7XG4gICAgICAgIGlmKGNhbXBhaWduVG9TZWxlY3Qpe1xuICAgICAgICAgIHNlbGYuY2FtcGFpZ25JZCA9IGNhbXBhaWduVG9TZWxlY3QuSWQ7XG4gICAgICAgICAgc2VsZi52YWxpZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2FtcGFpZ25OYW1lVG9BZGQ9bnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW1wYWlnbkxpc3RGYWlsZWQoZXJyKSB7XG4gICAgICBzZWxmLmhhbmRsZUVycm9yKGBFcnJvciBsb2FkaW5nIGNhbXBhaWduczogJHtlcnJ9YCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyKXtcbiAgICBzZWxmLmVycm9yTWVzc2FnZSA9IGVycjtcbiAgfVxuXG4gIGZpbGVTZWxlY3RlZCgpIHtcbiAgICBzZWxmLmZpbGVQYXRoPW51bGw7XG4gICAgc2VsZi5maWxlPW51bGw7XG5cbiAgICBpZihzZWxmLiRldmVudC50YXJnZXQuZmlsZXMgJiYgc2VsZi4kZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGYuZmlsZSA9IHNlbGYuJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgIHNlbGYuZmlsZVBhdGggPSBzZWxmLmZpbGUubmFtZTtcbiAgICAgIHNlbGYudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDYW1wYWlnbigpe1xuICAgIGlmKCFzZWxmLnZhbGlkYXRlQWRkQ2FtcGFpZ24odHJ1ZSkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjYW1wYWlnbiA9IG5ldyBDYW1wYWlnbigpO1xuICAgIGNhbXBhaWduLklkID0gMDtcbiAgICBjYW1wYWlnbi5OYW1lID0gc2VsZi5jYW1wYWlnbk5hbWVUb0FkZDtcbiAgICBjYW1wYWlnbi5EZXNjcmlwdGlvbiA9IHNlbGYuY2FtcGFpZ25OYW1lVG9BZGQ7XG5cbiAgICBjYW1wYWlnbi5jcmVhdGUoY2FtcGFpZ24sIGNyZWF0ZUNhbXBhaWduU3VjY2VlZGVkLCBjcmVhdGVDYW1wYWlnbkZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDYW1wYWlnblN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIGNyZWF0ZUNhbXBhaWduUmVhbGx5U3VjY2VlZGVkLCBjcmVhdGVDYW1wYWlnbkZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FtcGFpZ25SZWFsbHlTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIHNlbGYuZmV0Y2hDYW1wYWlnbkxpc3Qoc2VsZi5jYW1wYWlnbk5hbWVUb0FkZCk7XG4gICAgICAkKCcjY3JlYXRlLWNhbXBhaWduLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDYW1wYWlnbkZhaWxlZChlcnIpIHtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoYEVycm9yIGNyZWF0aW5nIGNhbXBhaWduOiAke2Vycn1gKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKCFzZWxmLnZhbGlkYXRlKHRydWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5jYW1wYWlnbk5hbWUgPSBfLmZpbmQoc2VsZi5jYW1wYWlnbnMsZnVuY3Rpb24oY2FtcGFpZ24pe3JldHVybiBjYW1wYWlnbi5JZCA9PSBzZWxmLmNhbXBhaWduSWQ7fSkuTmFtZTtcbiAgICBzZWxmLmltcG9ydFR5cGVOYW1lID0gXy5maW5kKHNlbGYuaW1wb3J0VHlwZXMsZnVuY3Rpb24oaW1wb3J0VHlwZSl7cmV0dXJuIGltcG9ydFR5cGUuSWQgPT0gc2VsZi5pbXBvcnRUeXBlSWQ7fSkuTmFtZTtcblxuICAgICQoJyNhcmUteW91LXN1cmUtbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICB9XG5cbiAgdXBsb2FkU2xkRmlsZSgpIHtcbiAgICB2YXIgZm9ybSA9ICQoJyNzbGQtdXBsb2FkLWZvcm0nKVswXTtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICB2YXIgaW1wID0gbmV3IEltcG9ydCgpO1xuICAgIGltcC51cGxvYWQoZm9ybURhdGEsc3VibWl0RmlsZVN1Y2NlZWRlZCxzdWJtaXRGaWxlRmFpbGVkKTtcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdEZpbGVTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGJvbUdsb2JhbC5oYW5kbGVQbGF0aW51bVJlc3BvbnNlKHJlc3BvbnNlLCBzdWJtaXRGaWxlUmVhbGx5U3VjY2VlZGVkLCBzdWJtaXRGaWxlRmFpbGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRGaWxlUmVhbGx5U3VjY2VlZGVkKHJlc3BvbnNlKSB7XG4gICAgICAkKCcjZmlsZS11cGxvYWQtc3VjY2VlZGVkLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgIHNlbGYucmVzZXRTZWxlY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0RmlsZUZhaWxlZChlcnIpIHtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoYEVycm9yIHVwbG9hZGluZyBmaWxlOiAke2Vycn1gKTtcbiAgICB9XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
