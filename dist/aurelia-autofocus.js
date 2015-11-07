System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var inject, AureliaAutofocusCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AureliaAutofocusCustomAttribute = (function () {
        function AureliaAutofocusCustomAttribute(element) {
          _classCallCheck(this, _AureliaAutofocusCustomAttribute);

          this.element = element;
        }

        _createClass(AureliaAutofocusCustomAttribute, [{
          key: "attached",
          value: function attached() {
            this.element.focus();
          }
        }]);

        var _AureliaAutofocusCustomAttribute = AureliaAutofocusCustomAttribute;
        AureliaAutofocusCustomAttribute = inject(Element)(AureliaAutofocusCustomAttribute) || AureliaAutofocusCustomAttribute;
        return AureliaAutofocusCustomAttribute;
      })();

      _export("AureliaAutofocusCustomAttribute", AureliaAutofocusCustomAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtYXV0b2ZvY3VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztjQVNhLCtCQUErQjs7Ozs7Ozs7aUNBVHBDLE1BQU07OztBQVNELHFDQUErQjtBQUcvQixpQkFIQSwrQkFBK0IsQ0FHOUIsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUxVLCtCQUErQjs7aUJBT2xDLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDdEI7OzsrQ0FUVSwrQkFBK0I7QUFBL0IsdUNBQStCLEdBRDNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCwrQkFBK0IsS0FBL0IsK0JBQStCO2VBQS9CLCtCQUErQiIsImZpbGUiOiJhdXJlbGlhLWF1dG9mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcblxuLyoqXG4gKiByZWd1bGFyIGh0bWw1IGF1dG9mb2N1cyBkb2VzIG5vdCB3b3JrIHdoZW4gbG9hZGluZyBjb250ZW50IGR5bmFtaWNhbGx5LlxuICogVGhlcmVmb3JlLCB3ZSBjcmVhdGUgb3VyIG93biBhdXRvZm9jdXMgdGhhdCB3b3JrcyBpbnNpZGUgb2YgYXVyZWxpYSB2aWV3bW9kZWxzLlxuICogdXNhZ2U6IGFkZCBhdXJlbGlhLWF1dG9mb2N1cyBhdHRyaWJ1dGUgdG8gdGFnLlxuICovXG5cbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBdXJlbGlhQXV0b2ZvY3VzQ3VzdG9tQXR0cmlidXRlIHtcbiAgZWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
