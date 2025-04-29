import {exec} from 'child_process'

exec('ls',(e,so,se)=>{
    console.log(so)
})