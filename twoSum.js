//Run two loops and check for every combo in array

function twoSum(nums,target)
{
    for(i = 0; i < nums.length; i++)
    {
        for(j = 0; j < nums.length; j++)
        {
            if(nums[i] + nums[j] == target)
            {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([3,2,4], 6));

//Perfect Answer
var twoSum = function(nums, target) {
	let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(target-nums[i])) {
            return [obj[target-nums[i]], i]
        }
        obj[nums[i]] = i
        //we loop over the array, we take a value then 
        //we find the difference of the target and number. 
        //if that difference is in the object we can return 
        //the answer(indices) if that difference is not in the 
        //object we add number and its index in the map (obj). 
        //In here we use it to hash. objects use key-value pair 
        //to store data. Object is a good choice for situations 
        //where we need simple structure to store data and the type 
        //of keys needed is either an integer, strings or symbols. 
        //I hope you got the answer if there are any doubts feel free to ask.
    }
};
