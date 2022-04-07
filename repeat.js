function repeat(num)
{
    let characters = [...new Set(num)];  
    return characters;
}

console.log(repeat([1,1,2]))