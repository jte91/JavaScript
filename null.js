function nu(num)
{
    let temp = 0;
    let arr = [];

    while(num !== 0)
    {
        temp = num % 10;
        arr.push(temp);
        num = (num - temp) / 10;
    }
    
    if(arr[0] === 0)
    {
        arr.splice(0,1);
    }

    console.log(arr.join(""));
}
nu(1230);