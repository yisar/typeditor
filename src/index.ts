class Typeditor {
  content: string
  el: Element
  template: string
  constructor(options: Options) {
    this.el = document.querySelector(options.el)
    this.content = ''
    this.init()
  }

  init() {
    this.el.innerHTML = `
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
        color: #334265;
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
        background: #e0e4ef;
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
  }

  static tags = {
    bold: { start: '**', end: '**', placeholder: '请输入加粗内容' },
    italic: { start: '*', end: '*', placeholder: '请输入加斜内容' },
    link: { start: '[', end: '][N]', placeholder: '请输入链接标题' },
    image: { start: '![', end: '][N]', placeholder: '请输入图片描述' },
    quote: { start: '>', end: '', placeholder: '请输入引用内容' },
    code: { start: '`', end: '`', placeholder: '请输入代码内容' },
  }

  value(content: string) {
    return content ? (this.el.innerHTML = content) : this.content
  }
}

interface Options {
  el: string
}
