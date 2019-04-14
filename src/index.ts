export class Typeditor {
  el: Element
  content: string
  constructor({ el }) {
    this.el = document.getElementById(el)
    this.content = ''
  }

  value(content: string) {
    return content ? (this.el.innerHTML = content) : this.content
  }
}
