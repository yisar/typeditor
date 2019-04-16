# typeditor

对 typecho 自带编辑器的重新实现，寻找了很多，只有 typecho 的 markdown 标准深得我心

原版是 php + jq 实现，typeditor 使用原生 ts 来写，适配所有前端场景

### Use

npm:

```
yarn add typeditor -S
```

dom:

```html
<div id="typeditor"></div>
```

js:

```javascript
let te = new Typeditor({
  el: '#typeditor', //目标容器
  preview:`https://www.clicli.us/${gv}` //预览地址，可以根据 id 跳转到转义过的前端页面
})
```

#### get/set value

```JavaScript
te.value()
te.value('念念不忘，必有回响')
```

### Parse

关于 markdown 的解析库，typeditor 推荐同样小而美的 [snarkdown](https://github.com/developit/snarkdown)

### License

MIT © 132yse inspired by [typecho](https://github.com/typecho/typecho)
