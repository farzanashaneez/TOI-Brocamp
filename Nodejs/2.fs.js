import fs from 'fs'

fs.writeFile('temp.txt','this is written by writeFile',(e,d)=>{
    console.log(e,d)
})
fs.appendFile('toi.txt',' this is appended by using append',(e)=>console.log(e))
fs.readFile('toi.txt','utf-8',(e,d)=>{
    console.log(e,d)
})
fs.unlink('temp.txt',(e)=>{

})