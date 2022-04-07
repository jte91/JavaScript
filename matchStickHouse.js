function match(num)
{
    if(num < 1)
    {
        return 0;
    }
    else 
    {
        let s = 6
        s += (num - 1) * 5;
        return s; 
    }
}
console.log(match(4));
