import { fork } from "child_process";

const child=fork('./forkFile.js')
child.send('fork started ')
child.on('message',msg=>{
    console.log(msg)
})
