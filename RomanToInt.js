function Roman2Int(string)
{
    const RomanList = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
     };
    let result = 0;
    for(let i = 0; i < string.length; i++)
    {
        if(i != 0 && RomanList[string[i - 1]] < RomanList[string[i]])
        {
            result = result - RomanList[string[i - 1]];
            result = result + (RomanList[string[i]] - RomanList[string[i - 1]])
        }
        else
        {
            result = result + (RomanList[string[i]])
        }
    }
    return result;
}
console.log(Roman2Int("II"));