(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.typeditor = {}));
}(this, function (exports) { 'use strict';

  var Typeditor = (function () {
      function Typeditor(options) {
          this.el = document.querySelector(options.el);
          this.content = '';
          this.init();
      }
      Typeditor.prototype.init = function () {
          this.el.innerHTML = this.template;
      };
      Typeditor.prototype.value = function (content) {
          return content ? (this.el.innerHTML = content) : this.content;
      };
      Typeditor.template = "\n    <style>\n      @import \"https://at.alicdn.com/t/font_1151392_5hwi3w2ygqu.css\";\n      li {\n        list-style: none;\n      }\n      * {\n        padding: 0;\n        margin: 0\n      }\n      #typeditor {\n        height: 100%;\n        width: 100%;\n        position: relative;\n        font: 14px \u5FAE\u8F6F\u96C5\u9ED1;\n        color: #334265\n      }\n      #typeditor .menu li {\n        display: inline-block;\n        padding: 6px;\n        cursor: pointer;\n      }\n      #typeditor .menu{\n        margin: 6px 0\n      }\n      #typeditor .menu li:hover,\n      #typeditor .menu li.active {\n        background: #d0d4e0;\n        border-radius: 4px;\n      }\n      #typeditor .editor {\n        height: 100%;\n        box-sizing: border-box;\n        outline: 0;\n        padding: 6px;\n      }\n    </style>\n    <div class=\"menu\">\n      <ul>\n        <li><i class=\"te te-bold\"></i></li>\n        <li><i class=\"te te-italic\"></i></li>\n        <li><i class=\"te te-header\"></i></li>\n        <li><i class=\"te te-quote\"></i></li>\n        <li><i class=\"te te-code\"></i></li>\n        <li><i class=\"te te-link\"></i></li>\n        <li><i class=\"te te-image\"></i></li>\n        <li><i class=\"te te-preview\"></i></li>\n      </ul>\n    </div>\n    <div class=\"editor\" contenteditable=\"true\"></div>\n  ";
      return Typeditor;
  }());

  exports.Typeditor = Typeditor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
