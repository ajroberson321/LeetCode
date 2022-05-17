class Solution(object):
    def getConcatenation(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        length = len(nums) * 2
        ans = []
        for i in range(length):
            if(i < len(nums)):
                ans.append(nums[i])
            else:
                ans.append(nums[i - len(nums)])
        
        return ans