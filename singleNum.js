var singleNumber = function(nums) 
{
    // let count = 0;
    // let val;
    // for(i = 0; i < nums.length; i++)
    //     {
    //         for(j = i + 1; j < nums.length; j++)
    //             {
    //               if(nums[i] == nums[j])
    //                   {
    //                       count++;                          
    //                   }
    //                   count = val;
    //                   nums[i] = val;                    
    //             }
    //     }
    //     if(nums[i] < 1)
    //     {
    //         return nums[i];
    //     }
    let sortedArr = nums.sort();

for(let i=0; i<sortedArr.length; i++)
{
    if(sortedArr[i]===sortedArr[i+1])
    {
        i++;
    }
    else
    {
        return sortedArr[i];
    }
}
}
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2,2,1]));