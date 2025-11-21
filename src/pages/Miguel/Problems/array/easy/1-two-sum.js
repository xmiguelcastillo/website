export default {
  code: `
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mp = {}

        for i in range(len(nums)):
            missing = target - nums[i]
            if missing in mp:
                return [mp[missing], i]
            mp[nums[i]] = i
        return -1
`,
};
