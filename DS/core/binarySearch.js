function binarysearch(arr, target, li, ri) {
  if (li > ri) return -1;
  let mid = Math.floor((li + ri) / 2);
  if (arr[mid] === target) return true;
  if (arr[mid] > target) return binarysearch(arr, target, li, mid - 1);
  else return binarysearch(arr, target, mid + 1, ri);
}
console.log(binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 0, 9));

function withoutRecursion(arr, target) {
  let mid = Math.floor((arr.length - 1) / 2);
  let li = 0;
  let ri = arr.length - 1;
  while (li <= ri) {
    if (arr[mid] === target) return true;
    if (arr[mid] < target) ri = mid - 1;
    else {
      li = mid + 1;
    }
  }
  return false;
}
console.log(withoutRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 0, 9));
