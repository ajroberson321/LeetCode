/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tracker = {}
    for(let i = 0; i < nums.length; i++) {
        if(tracker[nums[i]]) {
            return true
        } else {
            tracker[nums[i]] = 1
        }
    }
    return false;
};