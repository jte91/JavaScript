function numOfSquares(num)
{
    let squares = 0;
    squares =  num * (num + 1) * (2 * num + 1) / 6
    return squares;
}
console.log(numOfSquares(4));
