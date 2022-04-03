/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //result array
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j]
            }
        }
    }
    //start at first index
    //loop and check each other number with that index
    //move to next index and check nums past it
    //return result
    return result;
};