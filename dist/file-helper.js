System.register(["underscore"], function (_export) {
  "use strict";

  var _, FileHelper;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_underscore) {
      _ = _underscore["default"];
    }],
    execute: function () {
      FileHelper = (function () {
        function FileHelper() {
          _classCallCheck(this, FileHelper);
        }

        _createClass(FileHelper, null, [{
          key: "isFilenameValid",
          value: function isFilenameValid(filename, allowedExtensions) {
            if (!_.isString(filename)) {
              return false;
            }
            if (_.isString(allowedExtensions)) {
              allowedExtensions = [allowedExtensions];
            }
            var lastDotIndex = filename.lastIndexOf('.');
            var fileExtension = filename.substring(lastDotIndex + 1).toLowerCase();

            return allowedExtensions.some(function (allowedExtension) {
              return allowedExtension.toLowerCase() === fileExtension;
            });
          }
        }]);

        return FileHelper;
      })();

      _export("FileHelper", FileHelper);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztTQUVhLFVBQVU7Ozs7Ozs7Ozs7O0FBQVYsZ0JBQVU7aUJBQVYsVUFBVTtnQ0FBVixVQUFVOzs7cUJBQVYsVUFBVTs7aUJBSUMseUJBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFO0FBQ2xELGdCQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN6QixxQkFBTyxLQUFLLENBQUM7YUFDZDtBQUNELGdCQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtBQUNqQywrQkFBaUIsR0FBRyxDQUFFLGlCQUFpQixDQUFFLENBQUM7YUFDM0M7QUFDRCxnQkFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxnQkFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7O0FBRXZFLG1CQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFBLGdCQUFnQjtxQkFDNUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssYUFBYTthQUFBLENBQUMsQ0FBQztXQUNyRDs7O2VBaEJVLFVBQVUiLCJmaWxlIjoiZmlsZS1oZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgRmlsZUhlbHBlciB7XG5cbiAgLy8gZmlsZW5hbWUgY2FuIGJlIGZ1bGwgcGF0aCBvciBqdXN0IGZpbGUgbmFtZVxuICAvLyBhbGxvd2VkRXh0ZW5zaW9ucyBjYW4gYmUgc3RyaW5nIG9mIGEgc2luZ2xlIGV4dGVuc2lvbiBvciBhcnJheSBvZiBzdHJpbmdzXG4gIHN0YXRpYyBpc0ZpbGVuYW1lVmFsaWQoZmlsZW5hbWUsIGFsbG93ZWRFeHRlbnNpb25zKSB7XG4gICAgaWYgKCFfLmlzU3RyaW5nKGZpbGVuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXy5pc1N0cmluZyhhbGxvd2VkRXh0ZW5zaW9ucykpIHtcbiAgICAgIGFsbG93ZWRFeHRlbnNpb25zID0gWyBhbGxvd2VkRXh0ZW5zaW9ucyBdO1xuICAgIH1cbiAgICBsZXQgbGFzdERvdEluZGV4ID0gZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKTtcbiAgICBsZXQgZmlsZUV4dGVuc2lvbiA9IGZpbGVuYW1lLnN1YnN0cmluZyhsYXN0RG90SW5kZXggKyAxKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGFsbG93ZWRFeHRlbnNpb25zLnNvbWUoYWxsb3dlZEV4dGVuc2lvbiA9PlxuICAgICAgYWxsb3dlZEV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpID09PSBmaWxlRXh0ZW5zaW9uKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
