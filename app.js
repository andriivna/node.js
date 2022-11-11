const fs = require('node:fs/promises');
const path = require('path')


const sorter = async (readFolder, writeFolder, gen) => {
    const folderPath = path.join(__dirname, readFolder)

    const files = await fs.readdir(folderPath)

    for (const file of files) {
        const filePath = path.join(folderPath, file)
        const data = await fs.readFile(filePath);
        const user = JSON.parse(data);

        if (user.gender === gen){
            await fs.rename(filePath, path.join(__dirname, writeFolder, file))
        }
    }

};

sorter('boys','girls', 'female');
sorter('girls', 'boys', 'male');

// const foo1 = async () => {
//     const folderPath = path.join(__dirname, 'boys')
//     const files = await fs.readdir(folderPath)
//
//     for (const file of files) {
//         const filePath = path.join(folderPath, file)
//         const data = await fs.readFile(filePath);
//         const user = JSON.parse(data);
//
//         if (user.gender === 'female'){
//         await fs.rename(filePath, path.join(__dirname, 'girls', file))
//         }
//     }
//
// };
// foo()
// foo1()

// fs.readdir('./boys', (err, files)=>{
//     console.log(files)
//     for (const fileName of files) {
//         console.log(files)
//         fs.stat(`./boys/${fileName}`,(err, stats)=>{
//
//             if (stats.isFile()){
//                 fs.readFile(`./boys/${fileName}`, (err, data)=>{
//                     if ()
//                 })
//             }
//         })
//
//     }
// })