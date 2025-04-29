import { parentPort } from "worker_threads";

function heavyTask(){
    let sum=0;
    for(let i=0;i<5e8;i++){
        sum+=i
    }
    return sum
}
const res=heavyTask();
parentPort.postMessage(res)