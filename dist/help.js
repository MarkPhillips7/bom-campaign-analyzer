System.register([], function (_export) {
  'use strict';

  var Help;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Help = (function () {
        function Help() {
          _classCallCheck(this, Help);

          this.errorMessage = null;
          this.heading = 'Help';
        }

        _createClass(Help, [{
          key: 'activate',
          value: function activate(params, routeconfig) {
            this.environment = routeconfig.environment;
          }
        }]);

        return Help;
      })();

      _export('Help', Help);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsSUFBSTs7Ozs7Ozs7O0FBQUosVUFBSTtpQkFBSixJQUFJO2dDQUFKLElBQUk7O2VBQ2YsWUFBWSxHQUFDLElBQUk7ZUFDakIsT0FBTyxHQUFHLE1BQU07OztxQkFGTCxJQUFJOztpQkFJUCxrQkFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO0FBQzVCLGdCQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7V0FDNUM7OztlQU5VLElBQUkiLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIZWxwIHtcbiAgZXJyb3JNZXNzYWdlPW51bGw7XG4gIGhlYWRpbmcgPSAnSGVscCc7XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZWNvbmZpZykge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSByb3V0ZWNvbmZpZy5lbnZpcm9ubWVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
