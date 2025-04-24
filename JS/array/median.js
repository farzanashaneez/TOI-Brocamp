function median(arr1,arr2){
    let end=arr1.length+arr2.length;
    let middleindex=Math.ceil(end/2);
    let start=0;
    let res=[]
  
  while(arr1.length&&arr2.length&&start<=middleindex){
    if(arr1[0]<arr2[0])
    res.push(arr1.shift())
    else{
        res.push(arr2.shift())
    }
    start++
  }
  while(arr1.length&&start<=middleindex){
    res.push(arr1.shift())
  }
  while(arr2.length&&start<=middleindex){
    res.push(arr2.shift())
  }
  console.log(res,res.length,start,middleindex)
}
median([10,20,30,40,50,60],[1,22,33,45,88,99])