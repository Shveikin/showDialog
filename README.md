# showDialog
Простое модальное окно для браузера

```js
showDialog({
    message: 'Hello',
});
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769860938043097118/unknown.png">



```js
showDialog({
    title: 'hi', 
    message: 'Hello'
})
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769863098851917824/unknown.png">



```js
showDialog({
    title: 'hi', 
    message: '<input name="name" value="Alex">'
})
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769863905815035904/unknown.png">




```js
showDialog({
    title: 'hi', 
    message: '<input name="name" value="$name">',
    data: {
        name: "Harry"
    }
})
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769864826099990528/unknown.png">
