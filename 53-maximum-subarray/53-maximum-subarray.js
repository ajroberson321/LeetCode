/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  //Declare a variable for our current overall maximum sum
    let maxSum = nums[0];
	//Declare a temporary sum for comparison
    let tempSum = nums[0];
	//Iterate over nums starting at nums[1] since we set our initial sums to nums[0]
    for (let i = 1; i < nums.length; i++) {
		//The temporary sum is either the current number if the prior tempSum was negative for example
		//Or it is the sum of tempSum and the new sum if that figure is larger 
        tempSum = Math.max(nums[i], tempSum + nums[i]);
		//Every time we have a new tempSum we want to compare it to our running maxSum 
        maxSum = Math.max(tempSum, maxSum);
    };
	//return the max sum
  return maxSum;
};