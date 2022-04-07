let arr = [true, false, false, true, false];

function trueSort(arr)
{
    let value = 0;
    for( j = 0; j < arr.length; j++)
    {
        
        if(arr[j] === true)
        {
            value++;
        }       
    }
    return value;
}