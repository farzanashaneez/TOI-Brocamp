function find(str){
let res=[];
let longest=''
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
        let sub=str.slice(i,j);
        let rev=sub.split('').reverse().join('')
        console.log(i,j)
        if(sub.toLowerCase()===rev.toLowerCase()){
            if(sub.length>longest.length)
            longest=sub
            res.push(sub)
        }
        }
    }
    console.log(res,longest)
    
}
find('Malayalam')