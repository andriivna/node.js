const express = require('express');

const userDb = require('./dataBase/users')

const app = express();

app.get('/users', (req, res) => {
    console.log('USERS ENDPOINT!')

    // res.json({
    //     user:"Anna"
    // })

    //res.end('ITS OK')// закінчує запит чимось(тільки стрічкою, не об'єктом)
    //res.status(402).json('ITS OK')
    //res.sendFile('./') // Посилає файли(рідко використовується, або займається певна людина,яка працює з файлими)

    res.json(userDb)

}); //по дефолту браузер вміє тільки виконувати метод get

app.get('/users/:userId',(req, res)=>{

    const{userId}=req.params

    res.json(userDb[userId]);
})

// app.get('/',(req, res)=>{
//     res.json("WELCOME")
// })

app.listen(5000, ()=>{  //слухає порт, сказувати порт який потрібно прослухати
    console.log('Server listen 5000')
})