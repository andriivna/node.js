const express = require('express');

const userDb = require('./dataBase/users')
const userRouter = require('./router/user.router')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.get('/', (req, res)=>{
    res.json('WELCOME')
})

app.listen(5000, ()=>{  //слухає порт, сказувати порт який потрібно прослухати
    console.log('Server listen 5000')
})