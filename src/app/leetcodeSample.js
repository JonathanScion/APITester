//length of longest subarray with same value in each position
function longestSubarraySameValue(ar) {
    let l=0, r=0, max=0;
    for (let i = 0; i < ar.length; i++) {
        if(ar[i]===ar[i+1]){
            r++;
            max=Math.max(max,r-l+1);
        }else{
            l=i+1;
            r=i+1;
        }
    }
    return max;
}



const ret = longestSubarraySameValue([1, 4, 4, 4, 4, 4, 3, 3, 3, 5, 5, 5, 5, 5, 5]);
console.log(ret);