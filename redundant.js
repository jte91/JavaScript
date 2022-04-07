//let str = 'apple';
function redundant(str)
{
    return function()
    {
        return str;
    }
}

console.log(redundant('apple'));