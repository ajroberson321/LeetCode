class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        numDigits = int(''.join(str(i) for i in digits)) 
        
        newDigits = str(numDigits + 1)
        
        ans = []   
        
        for i in range(len(newDigits)):
            ans.append(int(newDigits[i]))
        
        return ans