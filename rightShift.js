function toTheRight(num1, num2)
{
    let right = 0;
    right = Math.floor(num1 / Math.pow(2,num2))
    return right;
}
console.log(toTheRight(80, 3))