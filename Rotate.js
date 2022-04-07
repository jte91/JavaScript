//Both work but the second is faster 
function rotation(nums, k)
{
    for(i = 0; i < k; i++)
    {
        var n = nums.pop();
        nums.unshift(n);      
    }
    if(nums[i] == nums.length)
    {
        console.log(nums);
    }
    
}
function rotate(nums,k) 
{
    k = k % nums.length;
    let count = 0;
    for (i = 0; count < nums.length; i++) {
        let current = i;
        let prev 
        = nums[i];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (i != current);
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3))



