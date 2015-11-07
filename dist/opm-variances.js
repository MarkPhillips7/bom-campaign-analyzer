System.register(['platinum/Global', 'platinum/Campaign', 'platinum/Import', 'platinum/ImportType', 'jquery', 'underscore', 'file-helper'], function (_export) {
  'use strict';

  var bomGlobal, Campaign, Import, ImportType, $, _, FileHelper, self, OpmVariances;

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
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_underscore) {
      _ = _underscore['default'];
    }, function (_fileHelper) {
      FileHelper = _fileHelper.FileHelper;
    }],
    execute: function () {
      OpmVariances = (function () {
        function OpmVariances() {
          _classCallCheck(this, OpmVariances);

          this.errorMessage = null;
          this.file = null;
          this.filePath = null;
          this.fileValidationClass = '';
          this.heading = 'Import SLD OPM Variance File for Analysis';
          this.importTypeId = null;
          this.importTypeIdValidationClass = '';
          this.importTypeName = null;
          this.importTypeNotSelected = 'Select Variance Type';
          this.importTypes = [];
          this.isValid = false;
          this.notes = null;
          this.showValidationErrors = false;

          self = this;
          self.resetSelections();
        }

        _createClass(OpmVariances, [{
          key: 'resetSelections',
          value: function resetSelections() {
            self.file = null;
            self.filePath = null;
            self.importTypeId = null;
            self.notes = null;
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;

            self.fetchImportTypeList();

            self.validate(false);
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
              isValid = FileHelper.isFilenameValid(self.filePath, 'XLSX');
              if (!isValid) {
                self.fileInvalidMessage = 'File must have XLSX extension.';
              }
            }

            self.fileValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validate',
          value: function validate(showValidationErrors) {
            self.showValidationErrors |= showValidationErrors;

            var isValid = self.validateImportTypeId();
            isValid = self.validateFile() && isValid;

            self.isValid = isValid;

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
                return importType.Name.indexOf("OPM") > -1;
              });
            }

            function importTypeListFailed(err) {
              self.handleError('Error loading import types: ' + err);
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
          key: 'submit',
          value: function submit() {
            if (!self.validate(true)) {
              return;
            }

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

        return OpmVariances;
      })();

      _export('OpmVariances', OpmVariances);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QkFBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7QUFDN0Isa0JBQUksQ0FBQyxXQUFXLDRCQUEwQixHQUFHLENBQUcsQ0FBQzthQUNsRDtXQUNGOzs7ZUF0SVUsWUFBWSIsImZpbGUiOiJvcG0tdmFyaWFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge0NhbXBhaWdufSBmcm9tICdwbGF0aW51bS9DYW1wYWlnbic7XG5pbXBvcnQge0ltcG9ydH0gZnJvbSAncGxhdGludW0vSW1wb3J0JztcbmltcG9ydCB7SW1wb3J0VHlwZX0gZnJvbSAncGxhdGludW0vSW1wb3J0VHlwZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7RmlsZUhlbHBlcn0gZnJvbSAnZmlsZS1oZWxwZXInXG5cbnZhciBzZWxmO1xuXG5leHBvcnQgY2xhc3MgT3BtVmFyaWFuY2VzIHtcbiAgZXJyb3JNZXNzYWdlPW51bGw7XG4gIGZpbGU9bnVsbDtcbiAgZmlsZVBhdGggPSBudWxsO1xuICBmaWxlVmFsaWRhdGlvbkNsYXNzPScnO1xuICBoZWFkaW5nID0gJ0ltcG9ydCBTTEQgT1BNIFZhcmlhbmNlIEZpbGUgZm9yIEFuYWx5c2lzJztcbiAgaW1wb3J0VHlwZUlkID0gbnVsbDtcbiAgaW1wb3J0VHlwZUlkVmFsaWRhdGlvbkNsYXNzPScnO1xuICBpbXBvcnRUeXBlTmFtZT1udWxsO1xuICBpbXBvcnRUeXBlTm90U2VsZWN0ZWQ9J1NlbGVjdCBWYXJpYW5jZSBUeXBlJztcbiAgaW1wb3J0VHlwZXM9W107XG4gIGlzVmFsaWQ9ZmFsc2U7XG4gIG5vdGVzID0gbnVsbDtcbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnM9ZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5yZXNldFNlbGVjdGlvbnMoKTtcbiAgfVxuXG4gIHJlc2V0U2VsZWN0aW9ucygpe1xuICAgIHNlbGYuZmlsZT1udWxsO1xuICAgIHNlbGYuZmlsZVBhdGg9bnVsbDtcbiAgICBzZWxmLmltcG9ydFR5cGVJZD1udWxsO1xuICAgIHNlbGYubm90ZXM9bnVsbDtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVjb25maWcpIHtcbiAgICBzZWxmLmVudmlyb25tZW50PXJvdXRlY29uZmlnLmVudmlyb25tZW50O1xuXG4gICAgc2VsZi5mZXRjaEltcG9ydFR5cGVMaXN0KCk7XG5cbiAgICBzZWxmLnZhbGlkYXRlKGZhbHNlKTtcbiAgfVxuXG4gIHZhbGlkYXRlSW1wb3J0VHlwZUlkKCl7XG4gICAgbGV0IGlzVmFsaWQgPSBzZWxmLmltcG9ydFR5cGVJZCAmJiBzZWxmLmltcG9ydFR5cGVJZCAgIT09IHNlbGYuaW1wb3J0VHlwZU5vdFNlbGVjdGVkO1xuICAgIHNlbGYuaW1wb3J0VHlwZUlkVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlRmlsZSgpe1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLmZpbGU7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHNlbGYuZmlsZUludmFsaWRNZXNzYWdlID0gJ0EgZmlsZSBtdXN0IGJlIGNob3Nlbi4nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzVmFsaWQgPSBGaWxlSGVscGVyLmlzRmlsZW5hbWVWYWxpZChzZWxmLmZpbGVQYXRoLCAnWExTWCcpO1xuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHNlbGYuZmlsZUludmFsaWRNZXNzYWdlID0gJ0ZpbGUgbXVzdCBoYXZlIFhMU1ggZXh0ZW5zaW9uLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5maWxlVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKHNob3dWYWxpZGF0aW9uRXJyb3JzKXtcbiAgICBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzIHw9IHNob3dWYWxpZGF0aW9uRXJyb3JzO1xuXG4gICAgLy9OZWVkIHRvIGNhbGwgZWFjaCB2YWxpZGF0ZSBtZXRob2QgZXZlbiBpZiAxc3QgZmFpbHMsIHNvIGNhbm5vdCBkbyAnc2VsZi52YWxpZGF0ZUEoKSAmJiBzZWxmLnZhbGlkYXRlQigpIC4uLidcbiAgICBsZXQgaXNWYWxpZCA9IHNlbGYudmFsaWRhdGVJbXBvcnRUeXBlSWQoKTtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZUZpbGUoKSAmJiBpc1ZhbGlkO1xuXG4gICAgc2VsZi5pc1ZhbGlkPWlzVmFsaWQ7XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGZldGNoSW1wb3J0VHlwZUxpc3QoKSB7XG4gICAgbGV0IGltcG9ydFR5cGUgPSBuZXcgSW1wb3J0VHlwZSgpO1xuXG4gICAgaW1wb3J0VHlwZS5saXN0KGltcG9ydFR5cGVMaXN0U3VjY2VlZGVkLCBpbXBvcnRUeXBlTGlzdEZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBpbXBvcnRUeXBlTGlzdFN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIGltcG9ydFR5cGVMaXN0UmVhbGx5U3VjY2VlZGVkLCBpbXBvcnRUeXBlTGlzdEZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW1wb3J0VHlwZUxpc3RSZWFsbHlTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIHNlbGYuaW1wb3J0VHlwZXMgPSBfLmZpbHRlcihyZXNwb25zZS5WYWx1ZXMsZnVuY3Rpb24oaW1wb3J0VHlwZSl7cmV0dXJuIGltcG9ydFR5cGUuTmFtZS5pbmRleE9mKFwiT1BNXCIpID4gLTE7fSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW1wb3J0VHlwZUxpc3RGYWlsZWQoZXJyKSB7XG4gICAgICBzZWxmLmhhbmRsZUVycm9yKGBFcnJvciBsb2FkaW5nIGltcG9ydCB0eXBlczogJHtlcnJ9YCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyKXtcbiAgICBzZWxmLmVycm9yTWVzc2FnZSA9IGVycjtcbiAgfVxuXG4gIGZpbGVTZWxlY3RlZCgpIHtcbiAgICBzZWxmLmZpbGVQYXRoPW51bGw7XG4gICAgc2VsZi5maWxlPW51bGw7XG5cbiAgICBpZihzZWxmLiRldmVudC50YXJnZXQuZmlsZXMgJiYgc2VsZi4kZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGYuZmlsZSA9IHNlbGYuJGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgIHNlbGYuZmlsZVBhdGggPSBzZWxmLmZpbGUubmFtZTtcbiAgICAgIHNlbGYudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKCFzZWxmLnZhbGlkYXRlKHRydWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5pbXBvcnRUeXBlTmFtZSA9IF8uZmluZChzZWxmLmltcG9ydFR5cGVzLGZ1bmN0aW9uKGltcG9ydFR5cGUpe3JldHVybiBpbXBvcnRUeXBlLklkID09IHNlbGYuaW1wb3J0VHlwZUlkO30pLk5hbWU7XG5cbiAgICAkKCcjYXJlLXlvdS1zdXJlLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgfVxuXG4gIHVwbG9hZFNsZEZpbGUoKSB7XG4gICAgdmFyIGZvcm0gPSAkKCcjc2xkLXVwbG9hZC1mb3JtJylbMF07XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgdmFyIGltcCA9IG5ldyBJbXBvcnQoKTtcbiAgICBpbXAudXBsb2FkKGZvcm1EYXRhLHN1Ym1pdEZpbGVTdWNjZWVkZWQsc3VibWl0RmlsZUZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRGaWxlU3VjY2VlZGVkKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBib21HbG9iYWwuaGFuZGxlUGxhdGludW1SZXNwb25zZShyZXNwb25zZSwgc3VibWl0RmlsZVJlYWxseVN1Y2NlZWRlZCwgc3VibWl0RmlsZUZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0RmlsZVJlYWxseVN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgJCgnI2ZpbGUtdXBsb2FkLXN1Y2NlZWRlZC1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICBzZWxmLnJlc2V0U2VsZWN0aW9ucygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdEZpbGVGYWlsZWQoZXJyKSB7XG4gICAgICBzZWxmLmhhbmRsZUVycm9yKGBFcnJvciB1cGxvYWRpbmcgZmlsZTogJHtlcnJ9YCk7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
