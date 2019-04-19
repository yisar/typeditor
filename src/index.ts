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
    @import "https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    #typeditor{
      position:relative;
    }
    <style>
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
