import cluster from "cluster";
import { cpus } from "os";
import http from 'http'

if(cluster.isPrimary){
    const cpulenght=cpus().length
    for(let i=0;i<cpulenght;i++){
        cluster.fork()
    }
}
else{
    http.createServer((req,res)=>{
        res.writeHead(200,{'content-Type':'application/json'})
        res.end('handled by process id')
    })
    .listen(3000)
}