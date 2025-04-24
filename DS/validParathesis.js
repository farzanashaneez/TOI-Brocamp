function isValid(string){
    let stack=[];
    let openParanthesis=['[','{','('];
    let closed={
        ']':'[',
        '}':'{',
        ')':'('
    }

    for(let char of string){
        if(Object.keys(closed).includes(char)){
            let popped=stack.pop()
            console.log(popped,closed[char])
            if(closed[char]!==popped)
            return false
        }
        else
        stack.push(char)
    }
    return true
}
console.log(isValid('{}[]{[([)]]}'))