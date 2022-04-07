// Given an integer array nums, find the contiguous 
// subarray (containing at least one number) which has 
// the largest sum and return its sum.
// A subarray is a contiguous part of an array.
//look up Kadane's algorithum
function maxSubArrary(nums)
{
    let max = nums[0]
    for(i = 1; i < nums.length; i++)
    {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(nums[i], max)
    }
    return max
}

console.log(maxSubArrary([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArrary([1]))
console.log(maxSubArrary([5,4,-1,7,8]))