import { spawn } from "child_process";
import { sign } from "crypto";

const child=spawn('find',['/'])

child.stderr.on('data',data=>{
    console.log('stderr :',data)
})
child.stdout.on('data',data=>{
    console.log('stdout :',data)
})

child.on('error',(err)=>{
    console.log('error :',err)
})
child.on('exit',(code ,signal)=>{
    console.log(code,signal)
})