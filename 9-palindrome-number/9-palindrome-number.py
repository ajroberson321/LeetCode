class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        stringNum = str(x)
        reverseNum = stringNum[::-1]
        if stringNum == reverseNum:
            return True
        else:
            return False