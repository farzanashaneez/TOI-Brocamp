class Hash{
    constructor(size){
        this.table=new Array(size)
    }
    getHashedKey(key){
        let hashedKey=0;
        for(let char of key){
        hashedKey+=char.charCodeAt(0)
        }
        console.log(hashedKey)
        return hashedKey%this.table.length
    }
    set(key,value){
        let hashedkey=this.getHashedKey(key);
        let bucket=this.table[hashedkey]
        if(!bucket){
            this.table[hashedkey]=[value]
        }
        else{
            for(let item of bucket){
                if(value===item){
                    return
                }
            }
            this.table[hashedkey].push(value)
        }
    }
    display(){
        console.log(this.table)
    }
}
let hashtable=new Hash(15)
hashtable.getHashedKey('farzana')
hashtable.set()