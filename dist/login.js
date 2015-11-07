System.register(['aurelia-framework', 'platinum/Global', 'aurelia-router', 'authentication-service'], function (_export) {
  'use strict';

  var inject, bomGlobal, Router, AuthenticationService, self, Login;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_authenticationService) {
      AuthenticationService = _authenticationService.AuthenticationService;
    }],
    execute: function () {
      Login = (function () {
        function Login(router, auth) {
          _classCallCheck(this, _Login);

          this.auth = null;
          this.errorMessage = null;
          this.isValid = false;
          this.password = null;
          this.passwordValidationClass = '';
          this.router = null;
          this.showValidationErrors = false;
          this.username = null;
          this.usernameValidationClass = '';

          this.router = router;
          this.auth = auth;
          self = this;
          self.resetSelections();
        }

        _createClass(Login, [{
          key: 'resetSelections',
          value: function resetSelections() {
            self.password = null;
            self.username = null;
          }
        }, {
          key: 'activate',
          value: function activate(params, routeconfig) {
            self.environment = routeconfig.environment;
            self.validate(false);
          }
        }, {
          key: 'validateUsername',
          value: function validateUsername() {
            var isValid = !!self.username;
            self.usernameValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validatePassword',
          value: function validatePassword() {
            var isValid = !!self.password;
            self.passwordValidationClass = isValid ? 'has-success' : self.showValidationErrors ? 'has-error' : '';
            return isValid;
          }
        }, {
          key: 'validate',
          value: function validate(showValidationErrors) {
            self.showValidationErrors |= showValidationErrors;

            var isValid = self.validateUsername();
            isValid = self.validatePassword() && isValid;

            self.isValid = isValid;

            return isValid;
          }
        }, {
          key: 'handleError',
          value: function handleError(err) {
            self.errorMessage = err;
          }
        }, {
          key: 'login',
          value: function login() {
            if (!self.validate(true)) {
              return;
            }

            this.auth.login(self.username, self.password, loginSucceeded, loginFailed);

            function loginSucceeded(response) {
              console.log(response);
              bomGlobal.handlePlatinumResponse(response, loginReallySucceeded, loginFailed);
            }

            function loginReallySucceeded(response) {
              self.resetSelections();
              self.router.navigateToRoute('sld-upload');
            }

            function loginFailed(err) {
              self.handleError('Error logging in: ' + err);
            }
          }
        }]);

        var _Login = Login;
        Login = inject(Router, AuthenticationService)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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a0JBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7O0FBRUQscUJBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUN4QixrQkFBSSxDQUFDLFdBQVcsd0JBQXNCLEdBQUcsQ0FBRyxDQUFDO2FBQzlDO1dBQ0Y7OztxQkE1RVUsS0FBSztBQUFMLGFBQUssR0FEakIsTUFBTSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUN6QixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtib21HbG9iYWx9IGZyb20gJ3BsYXRpbnVtL0dsb2JhbCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJ2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnXG5cbnZhciBzZWxmO1xuXG5AaW5qZWN0KFJvdXRlciwgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIExvZ2luIHtcbiAgYXV0aCA9IG51bGw7XG4gIGVycm9yTWVzc2FnZSA9IG51bGw7XG4gIGlzVmFsaWQgPSBmYWxzZTtcbiAgcGFzc3dvcmQgPSBudWxsO1xuICBwYXNzd29yZFZhbGlkYXRpb25DbGFzcyA9ICcnO1xuICByb3V0ZXI9bnVsbDtcbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcbiAgdXNlcm5hbWUgPSBudWxsO1xuICB1c2VybmFtZVZhbGlkYXRpb25DbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlciwgYXV0aCkge1xuICAgIHRoaXMucm91dGVyPXJvdXRlcjtcbiAgICB0aGlzLmF1dGg9YXV0aDtcbiAgICBzZWxmID0gdGhpcztcbiAgICBzZWxmLnJlc2V0U2VsZWN0aW9ucygpO1xuICB9XG5cbiAgcmVzZXRTZWxlY3Rpb25zKCkge1xuICAgIHNlbGYucGFzc3dvcmQgPSBudWxsO1xuICAgIHNlbGYudXNlcm5hbWUgPSBudWxsO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZWNvbmZpZykge1xuICAgIHNlbGYuZW52aXJvbm1lbnQ9cm91dGVjb25maWcuZW52aXJvbm1lbnQ7XG4gICAgc2VsZi52YWxpZGF0ZShmYWxzZSk7XG4gIH1cblxuICB2YWxpZGF0ZVVzZXJuYW1lKCkge1xuICAgIGxldCBpc1ZhbGlkID0gISFzZWxmLnVzZXJuYW1lO1xuICAgIHNlbGYudXNlcm5hbWVWYWxpZGF0aW9uQ2xhc3MgPSBpc1ZhbGlkID8gJ2hhcy1zdWNjZXNzJyA6IHNlbGYuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPyAnaGFzLWVycm9yJyA6ICcnO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgdmFsaWRhdGVQYXNzd29yZCgpIHtcbiAgICBsZXQgaXNWYWxpZCA9ICEhc2VsZi5wYXNzd29yZDtcbiAgICBzZWxmLnBhc3N3b3JkVmFsaWRhdGlvbkNsYXNzID0gaXNWYWxpZCA/ICdoYXMtc3VjY2VzcycgOiBzZWxmLnNob3dWYWxpZGF0aW9uRXJyb3JzID8gJ2hhcy1lcnJvcicgOiAnJztcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKHNob3dWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgc2VsZi5zaG93VmFsaWRhdGlvbkVycm9ycyB8PSBzaG93VmFsaWRhdGlvbkVycm9ycztcblxuICAgIC8vTmVlZCB0byBjYWxsIGVhY2ggdmFsaWRhdGUgbWV0aG9kIGV2ZW4gaWYgMXN0IGZhaWxzLCBzbyBjYW5ub3QgZG8gJ3NlbGYudmFsaWRhdGVBKCkgJiYgc2VsZi52YWxpZGF0ZUIoKSAuLi4nXG4gICAgbGV0IGlzVmFsaWQgPSBzZWxmLnZhbGlkYXRlVXNlcm5hbWUoKTtcbiAgICBpc1ZhbGlkID0gc2VsZi52YWxpZGF0ZVBhc3N3b3JkKCkgJiYgaXNWYWxpZDtcblxuICAgIHNlbGYuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycil7XG4gICAgc2VsZi5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBpZighc2VsZi52YWxpZGF0ZSh0cnVlKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoLmxvZ2luKHNlbGYudXNlcm5hbWUsIHNlbGYucGFzc3dvcmQsIGxvZ2luU3VjY2VlZGVkLCBsb2dpbkZhaWxlZCk7XG5cbiAgICBmdW5jdGlvbiBsb2dpblN1Y2NlZWRlZChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgYm9tR2xvYmFsLmhhbmRsZVBsYXRpbnVtUmVzcG9uc2UocmVzcG9uc2UsIGxvZ2luUmVhbGx5U3VjY2VlZGVkLCBsb2dpbkZhaWxlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naW5SZWFsbHlTdWNjZWVkZWQocmVzcG9uc2UpIHtcbiAgICAgIHNlbGYucmVzZXRTZWxlY3Rpb25zKCk7XG4gICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ3NsZC11cGxvYWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpbkZhaWxlZChlcnIpIHtcbiAgICAgIHNlbGYuaGFuZGxlRXJyb3IoYEVycm9yIGxvZ2dpbmcgaW46ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
