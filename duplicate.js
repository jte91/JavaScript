function containsDuplicate(nums)
{
    if(nums == null || nums.length == 0)
    {
        return false;
    }
    for(i = 0; i < nums.length; i++)
    {
        for(j = i + 1; j < nums.length; j++)
        {
           if(nums[i] == nums[j])
             {
                return true;
            }
        }        
    }
    return false;
}

console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));
