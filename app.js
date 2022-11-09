const fs = require('node:fs')

fs.readdir('./students/boys', (err, files)=>{
    console.log(files)
    for (const fileName of files) {
        console.log(files)
        fs.stat(`./students/boys/${fileName}`,(err, stats)=>{

            if (stats.isFile()){
                fs.readFile(`./students/boys/${fileName}`, (err, data)=>{
                    if ()
                })
            }
        })

    }
})