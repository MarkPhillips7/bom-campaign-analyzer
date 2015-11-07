System.register(['platinum/Global'], function (_export) {
  'use strict';

  var bomGlobal, AuthenticationService;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_platinumGlobal) {
      bomGlobal = _platinumGlobal.bomGlobal;
    }],
    execute: function () {
      AuthenticationService = function AuthenticationService() {
        var _this = this;

        _classCallCheck(this, AuthenticationService);

        this.loggedIn = false;

        this.isLoggedIn = function () {
          _this.loggedIn = bomGlobal.isLoggedIn();

          return _this.loggedIn;
        };

        this.login = function (username, password, onSuccess, onFailure) {
          var self = _this;
          return bomGlobal.login(username, password, onMySuccess, onFailure);

          function onMySuccess(response) {
            self.loggedIn = true;
            onSuccess(response);
          }
        };

        this.logout = function () {
          _this.loggedIn = false;
          return bomGlobal.logout();
        };
      };

      _export('AuthenticationService', AuthenticationService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lCQUVhLHFCQUFxQjs7Ozs7O2tDQUYxQixTQUFTOzs7QUFFSiwyQkFBcUIsWUFBckIscUJBQXFCOzs7OEJBQXJCLHFCQUFxQjs7YUFDaEMsUUFBUSxHQUFHLEtBQUs7O2FBRWhCLFVBQVUsR0FBRyxZQUFNO0FBQ2pCLGdCQUFLLFFBQVEsR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRXZDLGlCQUFPLE1BQUssUUFBUSxDQUFDO1NBQ3RCOzthQUVELEtBQUssR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBSztBQUNwRCxjQUFJLElBQUksUUFBSyxDQUFDO0FBQ2QsaUJBQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQzs7QUFFbkUsbUJBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUM3QixnQkFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7QUFDbkIscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNyQjtTQUNGOzthQUVELE1BQU0sR0FBRyxZQUFNO0FBQ2IsZ0JBQUssUUFBUSxHQUFDLEtBQUssQ0FBQztBQUNwQixpQkFBTyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0IiLCJmaWxlIjoiYXV0aGVudGljYXRpb24tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9tR2xvYmFsfSBmcm9tICdwbGF0aW51bS9HbG9iYWwnO1xuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgbG9nZ2VkSW4gPSBmYWxzZTtcblxuICBpc0xvZ2dlZEluID0gKCkgPT4ge1xuICAgIHRoaXMubG9nZ2VkSW4gPSBib21HbG9iYWwuaXNMb2dnZWRJbigpO1xuXG4gICAgcmV0dXJuIHRoaXMubG9nZ2VkSW47XG4gIH1cblxuICBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQsIG9uU3VjY2Vzcywgb25GYWlsdXJlKSA9PiB7XG4gICAgdmFyIHNlbGY9dGhpcztcbiAgICByZXR1cm4gYm9tR2xvYmFsLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgb25NeVN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cbiAgICBmdW5jdGlvbiBvbk15U3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgc2VsZi5sb2dnZWRJbj10cnVlO1xuICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBsb2dvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5sb2dnZWRJbj1mYWxzZTtcbiAgICByZXR1cm4gYm9tR2xvYmFsLmxvZ291dCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
