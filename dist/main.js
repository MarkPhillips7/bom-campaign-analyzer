System.register(['bootstrap'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('charlespockert/aurelia-bs-grid').globalResources('date-format', 'number-format', 'aurelia-autofocus');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FDeEMsZUFBZSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7QUFReEUsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxuICAgIC5wbHVnaW4oJ2NoYXJsZXNwb2NrZXJ0L2F1cmVsaWEtYnMtZ3JpZCcpXG4gICAgLmdsb2JhbFJlc291cmNlcygnZGF0ZS1mb3JtYXQnLCAnbnVtYmVyLWZvcm1hdCcsICdhdXJlbGlhLWF1dG9mb2N1cycpO1xuXG4gIC8vVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IHRvIGVuYWJsZSBhbmltYXRpb24uXG4gIC8vYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpO1xuXG4gIC8vQW55b25lIHdhbnRpbmcgdG8gdXNlIEhUTUxJbXBvcnRzIHRvIGxvYWQgdmlld3MsIHdpbGwgbmVlZCB0byBpbnN0YWxsIHRoZSBmb2xsb3dpbmcgcGx1Z2luLlxuICAvL2F1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1odG1sLWltcG9ydC10ZW1wbGF0ZS1sb2FkZXInKVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
