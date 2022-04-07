function possible(a, b)
{
    if(b - a == 6)
    {
        return true;
    }
    else if(b - a == 5)
    {
        return true;
    }
    else if(b - a == 4)
    {
        return true;
    }
    else if(b - a == 3)
    {
        return true;
    }
    else if(b - a == 2)
    {
        return true;
    }
    else if(b - a == 1)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
// function possibleBonus(a, b) 
// {
// 	return a + 1 <= b && b <= a + 6;
// }
console.log(possible(5, 3));