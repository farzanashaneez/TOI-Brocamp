function megesort(arr) {
    if(arr.length<2)
    return arr
    let mid=Math.ceil(arr.length/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)
    return merge(megesort(leftarr),megesort(rightarr))

}
function merge(leftarr, rightarr) {
  let res = [];
  while (leftarr.length && rightarr.length) {
    if (leftarr[0] < rightarr[0]) res.push(leftarr.shift());
    else {
      res.push(rightarr.shift());
    }
  }
  return [...res,...leftarr,...rightarr]
}
console.log(megesort([44,53,20,10,88,79,102]))
