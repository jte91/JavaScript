// Write a function secondIndexOf, taking two strings and determining 
// the second occurrence of the second string in the first string. 
// If the search string does not occur twice, -1 should be returned.
function secondIndexOf(string1, string2)
{
    let str1 = string1.indexOf(string2);
    return string1.indexOf(string2, str1 + 1);
}
secondIndexOf('White Rabbit', 'it');
//Should return 10