import { exec, execFile } from "child_process";

execFile('./sample.sh',(e,so,se)=>{
    console.log('==>',e,so,se)
})