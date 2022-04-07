function toTheLeft(num1, num2)
{
    let left = 0;
    left = num1 * Math.pow(2, num2);
    return left;
}
console.log(toTheLeft(5, 2));
