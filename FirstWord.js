function firstWord(string)
{
    let wordOne = string.indexOf(' ');
    return string.substr(0, wordOne);
}