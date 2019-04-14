# typeditor

A markdown editor inspired by typecho which is tiny but perfect

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
  el: '#typeditor',
})
```

#### get/set value

```JavaScript
te.value()
te.value('念念不忘，必有回响')
```

### License

MIT © 132yse inspired by [typecho](https://github.com/typecho/typecho)
