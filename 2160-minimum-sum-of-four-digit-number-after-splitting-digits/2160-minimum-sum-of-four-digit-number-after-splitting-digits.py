class Solution:
    def minimumSum(self, num: int) -> int:
        numsList = []
        stringNum = str(num)

        for i in range(len(stringNum)):
            numsList.append(int(stringNum[i]))
        numsList.sort()
        num1 = str(numsList[0]) + str(numsList[2])
        num1 = int(num1)
        num2 = str(numsList[1]) + str(numsList[3])
        num2 = int(num2)
        ans = num1 + num2
        return ans