/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //step through each index 
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        let rightSum = 0
        for(let j = i + 1; j < nums.length; j++) {
            rightSum+= nums[j]
        }
        if(leftSum === rightSum) {
            return i
        }
        leftSum+= nums[i]
    }
    
    return -1
    //compare sum of left indices to sum of right indices
    //if same return that index
    //if exit loop then return -1
};