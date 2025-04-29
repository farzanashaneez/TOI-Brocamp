import http from 'http'
const server=http.createServer((req,res)=>{
    let { url,method}=req;
    console.log(url,method)
    res.statusCode=200
    res.write('hai write 1')
    res.write('hai write 11')
    res.write('hai write 111')
    res.write('hai write 111')
    res.write('hai write 1111')
    res.setHeader('content-Type','text/plain')
    res.writeHead(200,'ok',{'content-Type':'application/json'})
    
    res.end('finished')
})
server.listen(3000,()=>{
    console.log('server connected on 3000')
})