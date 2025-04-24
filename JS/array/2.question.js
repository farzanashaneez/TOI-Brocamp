let arr = [5, 1, 3, 7, 9];
let target = 2;

function findSubPairs(arr, target) {
  let set = new Set(arr);
  let res = [];

  for (let num of arr) {
    let needed = num - target;
    if (set.has(needed)) {
      res.push([num, needed]);
      set.delete(num);    // To avoid duplicate pairs
      set.delete(needed); // Optional: if you want truly unique values
    }
  }

  console.log(res);
}

findSubPairs(arr, target);
