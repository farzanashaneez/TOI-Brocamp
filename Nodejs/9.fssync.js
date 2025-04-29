import fs from 'fs'

const read=fs.readFileSync('toi.txt','utf8')
console.log(read)
fs.writeFileSync('writetoi.txt','writing file asynchronously')