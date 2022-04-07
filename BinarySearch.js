// BASE CONDITION: If starting index is 
//greater than ending index return false.
// Compute the middle index.
// Compare the middle element with number x. 
//If equal return true.
// If greater, call the same function with 
//ending index = middle-1 and repeat step 1.
// If smaller, call the same function with 
//starting index = middle+1 and repeat step 1.
function search(nums, target)
{
    for(i = 4; i < nums.length; i++)
    {
        if(nums[i] === target)
        {
            return i;
        }
        else
        {
            return -1;
        }
    }
}
function search2(nums, target)
{
    let start = 0, end = nums.length - 1;
    while(start <= end)
    {
        let middle = Math.floor((start + end) / 2);
        if(nums[middle] === target)
        {
            return middle;
        }
        else if(nums[middle] < target)
            start = middle + 1;
        else
            end = middle - 1; 
    }
    return -1;
}
function search3(nums,target)
{
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor( ((left + right) / 2) );
        const current = nums[middle];
        
        if (current > target) {
            // ignore the right part from the array and the current index
            right = middle - 1;
        } else if (current < target) {
            // ignore the left part from the array and the current index
            left = middle + 1
        } else {
            return middle;
        }
    }
    // return -1 if middle did never equal the target[]
    return -1;
}
console.log(search3([-1,0,3,5,9,12], 12));