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
    message: '<input type="text" name="name" value="Alex">'
})
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769863905815035904/unknown.png">




```js
showDialog({
    title: 'hi', 
    message: `<input type="text" name="name" value="$name"><br>
              <input type="text" name="surname" value="$lastname">`,
    data: {
        name: "Harry",
        lastname: "Potter"
    }
})
```
<img src="https://media.discordapp.net/attachments/668839640693997578/769864826099990528/unknown.png">




showDialog({
    title: 'hi', 
    message: `<input type="text" name="name" value="$name"><br>
              <input type="text" name="surname" value="$lastname">`,
    data: {
        name: "Harry",
        lastname: "Potter"
    },
    buttons: {
        'Сохранить': function(data){
            console.log(data)
        }
    }
})

<img src="https://media.discordapp.net/attachments/668839640693997578/769867206979747850/unknown.png">
<img src="https://media.discordapp.net/attachments/668839640693997578/769867511511777300/unknown.png">


showDialog({
    title: 'hi', 
    message: `<h2>Факультет Хогвартса: $faculty</h2>
              <input type="text" name="name" value="$name"><br>
              <input type="text" name="surname" value="$lastname">`,
    data: {
        name: "Harry",
        lastname: "Potter",
        faculty: "Гриффиндор"
    },
    buttons: {
        'Сохранить': function(data){
            console.log('save', data)
        },
        'Другой факултет': function(data){
            this.right({
                message: `
                    <select name='faculty'>
                        <option>Гриффиндор</option>
                        <option>Пуффендуй</option>
                        <option>Когтевран</option>
                        <option>Слизерин</option>
                    </select>
                `
            })
        }
    }
})

<img src="https://media.discordapp.net/attachments/668839640693997578/769921673361096755/GIF_25.10.2020_16-51-28.gif">
