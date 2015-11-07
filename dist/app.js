System.register(['aurelia-framework', 'platinum/Global', 'aurelia-router', 'authentication-service', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var inject, bindable, bomGlobal, Redirect, AuthenticationService, App, AuthorizeStep;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }, function (_authenticationService) {
      AuthenticationService = _authenticationService.AuthenticationService;
    }, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(App, [{
          key: 'auth',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'environment',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function App(auth) {
          _classCallCheck(this, _App);

          _defineDecoratedPropertyDescriptor(this, 'auth', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'environment', _instanceInitializers);

          this.auth = auth;
          this.environment = this.getEnvironmentText();
        }

        _createDecoratedClass(App, [{
          key: 'getEnvironmentText',
          value: function getEnvironmentText() {
            return bomGlobal.isDemoMode ? "Demo" : location.port == 3800 ? location.hostname.toLowerCase() == "localhost" ? "Local" : "DV01" : location.port == 3801 ? "DV02" : location.port == 3802 ? "TS01 (UAT)" : location.port == 3803 ? "TS02 (UAT)" : location.port == 3804 ? "TS03 (QA)" : location.port == 3805 ? "TS04 (QA)" : location.port == 3806 ? "TRAINING" : location.port == 454 ? "PRODUCTION" : "unknown";
          }
        }, {
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'BOM Campaign Analyzer';
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: ['', 'sld-upload'], name: 'sld-upload', moduleId: 'sld-upload', nav: true, title: 'Analyze Campaign Results', auth: true, environment: this.environment }, { route: 'opm-variances', name: 'opm-variances', moduleId: 'opm-variances', nav: true, title: 'Analyze OPM Variances', auth: true, environment: this.environment }, { route: 'imsi-analysis-history', name: 'imsi-analysis-history', moduleId: 'imsi-analysis-history', nav: true, title: 'IMSI Analysis History', auth: true, environment: this.environment }, { route: 'export-imsis', name: 'export-imsis', moduleId: 'export-imsis', nav: true, title: 'Export IMSIs for Reprocessing', auth: true, environment: this.environment }, { route: 'sld-export-history', name: 'sld-export-history', moduleId: 'sld-export-history', nav: true, title: 'SLD Export History', auth: true, environment: this.environment }, { route: 'imsi-lookup', name: 'imsi-lookup', moduleId: 'imsi-lookup', nav: true, title: 'IMSI Lookup', auth: true, environment: this.environment }, { route: 'help', name: 'help', moduleId: 'help', nav: true, title: 'Help', environment: this.environment }, { route: 'login', name: 'login', moduleId: 'login', nav: false, title: 'Login', environment: this.environment }, { route: 'logout', name: 'logout', moduleId: 'logout', nav: false, title: 'Logout', environment: this.environment }]);

            this.router = router;
          }
        }], null, _instanceInitializers);

        var _App = App;
        App = inject(AuthenticationService)(App) || App;
        return App;
      })();

      _export('App', App);

      AuthorizeStep = (function () {
        function AuthorizeStep(auth) {
          _classCallCheck(this, _AuthorizeStep);

          this.auth = auth;
        }

        _createClass(AuthorizeStep, [{
          key: 'run',
          value: function run(routingContext, next) {
            if (routingContext.nextInstructions.some(function (i) {
              return i.config.auth;
            })) {
              var isLoggedIn = this.auth.isLoggedIn();

              if (!isLoggedIn) {
                return next.cancel(new Redirect('login'));
              }
            }

            return next();
          }
        }]);

        var _AuthorizeStep = AuthorizeStep;
        AuthorizeStep = inject(AuthenticationService)(AuthorizeStep) || AuthorizeStep;
        return AuthorizeStep;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LElBQUksQ0FBQyxVQUFBLENBQUM7cUJBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQUEsQ0FBQyxFQUFFO0FBQzVELGtCQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztBQUV4QyxrQkFBSSxDQUFDLFVBQVUsRUFBRTtBQUNmLHVCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztlQUMzQzthQUNGOztBQUVELG1CQUFPLElBQUksRUFBRSxDQUFDO1dBQ2Y7Ozs2QkFuQkcsYUFBYTtBQUFiLHFCQUFhLEdBRGxCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUN4QixhQUFhLEtBQWIsYUFBYTtlQUFiLGFBQWEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Ym9tR2xvYmFsfSBmcm9tICdwbGF0aW51bS9HbG9iYWwnO1xuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJ2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJztcblxuQGluamVjdChBdXRoZW50aWNhdGlvblNlcnZpY2UpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgQGJpbmRhYmxlIGF1dGg7XG4gIEBiaW5kYWJsZSBlbnZpcm9ubWVudDtcblxuICBjb25zdHJ1Y3RvcihhdXRoKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5nZXRFbnZpcm9ubWVudFRleHQoKTtcbiAgfVxuXG4gIGdldEVudmlyb25tZW50VGV4dCgpe1xuICAgIHJldHVybiBib21HbG9iYWwuaXNEZW1vTW9kZSA/IFwiRGVtb1wiXG4gICAgICA6IGxvY2F0aW9uLnBvcnQgPT0gMzgwMCA/IGxvY2F0aW9uLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJsb2NhbGhvc3RcIiA/IFwiTG9jYWxcIiA6IFwiRFYwMVwiXG4gICAgICA6IGxvY2F0aW9uLnBvcnQgPT0gMzgwMSA/IFwiRFYwMlwiXG4gICAgICA6IGxvY2F0aW9uLnBvcnQgPT0gMzgwMiA/IFwiVFMwMSAoVUFUKVwiXG4gICAgICA6IGxvY2F0aW9uLnBvcnQgPT0gMzgwMyA/IFwiVFMwMiAoVUFUKVwiXG4gICAgICA6IGxvY2F0aW9uLnBvcnQgPT0gMzgwNCA/IFwiVFMwMyAoUUEpXCJcbiAgICAgIDogbG9jYXRpb24ucG9ydCA9PSAzODA1ID8gXCJUUzA0IChRQSlcIlxuICAgICAgOiBsb2NhdGlvbi5wb3J0ID09IDM4MDYgPyBcIlRSQUlOSU5HXCJcbiAgICAgIDogbG9jYXRpb24ucG9ydCA9PSA0NTQgPyBcIlBST0RVQ1RJT05cIlxuICAgICAgOiBcInVua25vd25cIjtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ0JPTSBDYW1wYWlnbiBBbmFseXplcic7XG4gICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgnYXV0aG9yaXplJywgQXV0aG9yaXplU3RlcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsJ3NsZC11cGxvYWQnXSwgIG5hbWU6ICdzbGQtdXBsb2FkJywgICAgICBtb2R1bGVJZDogJ3NsZC11cGxvYWQnLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J0FuYWx5emUgQ2FtcGFpZ24gUmVzdWx0cycsIGF1dGg6dHJ1ZSwgZW52aXJvbm1lbnQ6IHRoaXMuZW52aXJvbm1lbnQgfSxcbiAgICAgIHsgcm91dGU6ICdvcG0tdmFyaWFuY2VzJywgICAgICAgICBuYW1lOiAnb3BtLXZhcmlhbmNlcycsICAgICAgICBtb2R1bGVJZDogJ29wbS12YXJpYW5jZXMnLCAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonQW5hbHl6ZSBPUE0gVmFyaWFuY2VzJywgYXV0aDp0cnVlLCBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCB9LFxuICAgICAgeyByb3V0ZTogJ2ltc2ktYW5hbHlzaXMtaGlzdG9yeScsICBuYW1lOiAnaW1zaS1hbmFseXNpcy1oaXN0b3J5JywgbW9kdWxlSWQ6ICdpbXNpLWFuYWx5c2lzLWhpc3RvcnknLCBuYXY6IHRydWUsIHRpdGxlOidJTVNJIEFuYWx5c2lzIEhpc3RvcnknLCBhdXRoOnRydWUsIGVudmlyb25tZW50OiB0aGlzLmVudmlyb25tZW50IH0sXG4gICAgICB7IHJvdXRlOiAnZXhwb3J0LWltc2lzJywgIG5hbWU6ICdleHBvcnQtaW1zaXMnLCBtb2R1bGVJZDogJ2V4cG9ydC1pbXNpcycsIG5hdjogdHJ1ZSwgdGl0bGU6J0V4cG9ydCBJTVNJcyBmb3IgUmVwcm9jZXNzaW5nJywgYXV0aDp0cnVlLCBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCB9LFxuICAgICAgeyByb3V0ZTogJ3NsZC1leHBvcnQtaGlzdG9yeScsICBuYW1lOiAnc2xkLWV4cG9ydC1oaXN0b3J5JywgbW9kdWxlSWQ6ICdzbGQtZXhwb3J0LWhpc3RvcnknLCBuYXY6IHRydWUsIHRpdGxlOidTTEQgRXhwb3J0IEhpc3RvcnknLCBhdXRoOnRydWUsIGVudmlyb25tZW50OiB0aGlzLmVudmlyb25tZW50IH0sXG4gICAgICB7IHJvdXRlOiAnaW1zaS1sb29rdXAnLCAgbmFtZTogJ2ltc2ktbG9va3VwJywgbW9kdWxlSWQ6ICdpbXNpLWxvb2t1cCcsIG5hdjogdHJ1ZSwgdGl0bGU6J0lNU0kgTG9va3VwJywgYXV0aDp0cnVlLCBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCB9LFxuICAgICAgeyByb3V0ZTogJ2hlbHAnLCAgbmFtZTogJ2hlbHAnLCBtb2R1bGVJZDogJ2hlbHAnLCBuYXY6IHRydWUsIHRpdGxlOidIZWxwJywgZW52aXJvbm1lbnQ6IHRoaXMuZW52aXJvbm1lbnQgfSxcbiAgICAgIHsgcm91dGU6ICdsb2dpbicsICBuYW1lOiAnbG9naW4nLCBtb2R1bGVJZDogJ2xvZ2luJywgbmF2OiBmYWxzZSwgdGl0bGU6J0xvZ2luJywgZW52aXJvbm1lbnQ6IHRoaXMuZW52aXJvbm1lbnQgfSxcbiAgICAgIHsgcm91dGU6ICdsb2dvdXQnLCAgbmFtZTogJ2xvZ291dCcsIG1vZHVsZUlkOiAnbG9nb3V0JywgbmF2OiBmYWxzZSwgdGl0bGU6J0xvZ291dCcsIGVudmlyb25tZW50OiB0aGlzLmVudmlyb25tZW50IH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG5cbkBpbmplY3QoQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuY2xhc3MgQXV0aG9yaXplU3RlcCB7XG5cbiAgY29uc3RydWN0b3IoYXV0aCl7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgfVxuXG4gIHJ1bihyb3V0aW5nQ29udGV4dCwgbmV4dCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSByb3V0ZSBoYXMgYW4gXCJhdXRoXCIga2V5XG4gICAgLy8gVGhlIHJlYXNvbiBmb3IgdXNpbmcgYG5leHRJbnN0cnVjdGlvbnNgIGlzIGJlY2F1c2VcbiAgICAvLyB0aGlzIGluY2x1ZGVzIGNoaWxkIHJvdXRlcy5cbiAgICBpZiAocm91dGluZ0NvbnRleHQubmV4dEluc3RydWN0aW9ucy5zb21lKGkgPT4gaS5jb25maWcuYXV0aCkpIHtcbiAgICAgIHZhciBpc0xvZ2dlZEluID0gdGhpcy5hdXRoLmlzTG9nZ2VkSW4oKTtcblxuICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJldHVybiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QoJ2xvZ2luJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
