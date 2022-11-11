const fs = require('node:fs');

// fs.readFile('./text.txt', (err, data)=>{
//     console.log(err, 'ERR');
//
//     console.log(data.toString());
// })

// fs.appendFile('./text.txt', 'HELLO CHAT \n', (err)=>{
//     console.log('ERR', err)
// })

// fs.writeFile('./text.txt', 'WRITE FILE',(err)=>{
//     console.log('err', err)
// })

// fs.readFile('./text.txt' ,(err,data)=>{
//     fs.appendFile('./copy.txt', data, ()=>{})
// })

// fs.mkdir('./students', (err)=>{
//
// })

// fs.appendFile('./students/data.json', JSON.stringify({name:'Dima'}), (err)=>{
//
// })

// fs.truncate --//очищає файл
// fs.unlink --//стирає файл(видаляє)
//fs.rmdir --//видаляє диреторію
//{recursive:true} --//видаляє директорію разом зі змістом
//fs.rename() --//приймає старий шлях і новий шлях. Тобто просто переіменовує