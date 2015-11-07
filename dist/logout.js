System.register(['aurelia-framework', 'platinum/Global', 'aurelia-router', 'authentication-service'], function (_export) {
  'use strict';

  var inject, bomGlobal, Router, AuthenticationService, Logout;

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
      Logout = (function () {
        function Logout(router, auth) {
          _classCallCheck(this, _Logout);

          this.router = null;

          this.router = router;
          this.auth = auth;
        }

        _createClass(Logout, [{
          key: 'activate',
          value: function activate() {
            this.auth.logout();
            this.router.navigateToRoute('login');
          }
        }]);

        var _Logout = Logout;
        Logout = inject(Router, AuthenticationService)(Logout) || Logout;
        return Logout;
      })();

      _export('Logout', Logout);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0RBTWEsTUFBTTs7Ozs7Ozs7aUNBTlgsTUFBTTs7a0NBQ04sU0FBUzs7OEJBQ1QsTUFBTTs7cURBQ04scUJBQXFCOzs7QUFHaEIsWUFBTTtBQUdOLGlCQUhBLE1BQU0sQ0FHTCxNQUFNLEVBQUMsSUFBSSxFQUFFOzs7ZUFGekIsTUFBTSxHQUFDLElBQUk7O0FBR1QsY0FBSSxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7U0FDaEI7O3FCQU5VLE1BQU07O2lCQVFULG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ3RDOzs7c0JBWFUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUN6QixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Ym9tR2xvYmFsfSBmcm9tICdwbGF0aW51bS9HbG9iYWwnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICdhdXRoZW50aWNhdGlvbi1zZXJ2aWNlJ1xuXG5AaW5qZWN0KFJvdXRlciwgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIExvZ291dCB7XG4gIHJvdXRlcj1udWxsO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcixhdXRoKSB7XG4gICAgdGhpcy5yb3V0ZXI9cm91dGVyO1xuICAgIHRoaXMuYXV0aD1hdXRoO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSgnbG9naW4nKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
