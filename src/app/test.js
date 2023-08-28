/*function getArrayMaxSum(ar) {
  let maxSum = ar[0], currSum=0;
  
  for (let i=0; i<ar.length; i++) {
    if (currSum < 0 ) {
      currSum = 0;
    }

    currSum += ar[i];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}


const maxSum = getArrayMaxSum([1,2,-5,4,5,6,-16,8,9,10]); // 55
console.log(maxSum);*/



function getArrayMaxSumToPointers(ar) {
    let maxSum = ar[0], currSum=0;
    
    for (let i=0; i<ar.length; i++) {
      if (currSum < 0 ) {
        currSum = 0;
      }
  
      currSum += ar[i];
      maxSum = Math.max(maxSum, currSum);
    }
  
    return maxSum;
  }

const maxSum = getArrayMaxSumToPointers([1,2,-5,4,5,6,-16,8,9,10]); // 55
console.log(maxSum);