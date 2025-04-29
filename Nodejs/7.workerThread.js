import { Worker } from "worker_threads";

const worker=new Worker('./workerFile.js');

worker.on('message',(data)=>{
    console.log(data)
})
worker.on('error',(err)=>{
console.log(err)
})
worker.on('exit',(code)=>{
console.log(code)
})