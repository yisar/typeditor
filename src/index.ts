export class Typeditor {
  content: string
  el: Element
  template: string
  constructor(options: Options) {
    this.el = document.querySelector(options.el)
    this.content = ''
    this.init()
  }

  static template = `
    <style>
      @import "https://at.alicdn.com/t/font_1151392_5hwi3w2ygqu.css";
      li {
        list-style: none;
      }
      * {
        padding: 0;
        margin: 0
      }
      #typeditor {
        height: 100%;
        width: 100%;
        position: relative;
        font: 14px 微软雅黑;
        color: #334265
      }
      #typeditor .menu li {
        display: inline-block;
        padding: 6px;
        cursor: pointer;
      }
      #typeditor .menu{
        margin: 6px 0
      }
      #typeditor .menu li:hover,
      #typeditor .menu li.active {
        background: #d0d4e0;
        border-radius: 4px;
      }
      #typeditor .editor {
        height: 100%;
        box-sizing: border-box;
        outline: 0;
        padding: 6px;
      }
    </style>
    <div class="menu">
      <ul>
        <li><i class="te te-bold"></i></li>
        <li><i class="te te-italic"></i></li>
        <li><i class="te te-header"></i></li>
        <li><i class="te te-quote"></i></li>
        <li><i class="te te-code"></i></li>
        <li><i class="te te-link"></i></li>
        <li><i class="te te-image"></i></li>
        <li><i class="te te-preview"></i></li>
      </ul>
    </div>
    <div class="editor" contenteditable="true"></div>
  `

  init() {
    this.el.innerHTML = this.template
  }

  value(content: string) {
    return content ? (this.el.innerHTML = content) : this.content
  }
}

interface Options {
  el: string
}
