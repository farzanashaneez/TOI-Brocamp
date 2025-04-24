function findMaxsubarray(arr){
    let subarr=[];
    let maxsum=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<=arr.length;j++){
            let sliced=arr.slice(i,j)
            let sum=sliced.reduce((acc,crr)=>acc+crr,0)
            if(sum>maxsum){
                maxsum=sum;
                subarr=sliced
            }
        }
    }
    console.log(subarr)
}
findMaxsubarray([1,2,3,4,5,6,-1,2,-5])

function findMaxSubarrayOptimised(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    const subarray = arr.slice(start, end + 1);
    console.log("Subarray with max sum:", subarray);
    console.log("Max sum:", maxSum);
}
findMaxSubarrayOptimised([1,2,3,4,5,6,-1,2,-95,100])
