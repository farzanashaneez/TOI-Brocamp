function find(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j <= str.length; j++) {
      let sliced = str.slice(i, j);
      if (!hasduplicate(sliced) && res.length < sliced.length) {
        res = sliced;
      }
    }
  }
  return res;
}

function hasduplicate(substring) {
  let charset = new Set();
  for (let char of substring) {
    if (charset.has(char)) return true;
    charset.add(char);
  }
  return false;
}
console.log(find('iam farzanashaneezabcdefghijkl'))

function usingslidingWindowAlgorithm(str){
let seen=new Set();
let left=0;
let res='';
let maxLength=0;

for(let right=0;right<str.length;right++){
    while(seen.has(str[right])){
        seen.delete(str[left])
        left++
    }
    seen.add(str[right])
    if(right-left+1>maxLength){
        maxLength=right-left+1
        res=str.slice(left,right+1)
    }
}
return res
}
console.log(usingslidingWindowAlgorithm('iam farzanashaneezabcdefghijkl'))