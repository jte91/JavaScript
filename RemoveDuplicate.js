function removeDuplicates(nums) 
{
     let k = 0;
    for (let i = 0; i < nums.length - 1; i++) 
    {
        if (nums[i] != nums[i + 1]) 
        {
            nums[k] = nums[i];
            nums[k + 1] = nums[i + 1];
            k += 1;
        }
    }
    return k+1;
    
};
console.log(removeDuplicates([1,2,3]));
//console.log(removeDuplicates([1,1,2]));