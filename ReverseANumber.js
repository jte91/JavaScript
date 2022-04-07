//Write a Java function that a reverse a number.
//Sample Data and output:
//Example x = 32243;
//Expected Output: 34223
function reverse_a_number(num)
{
    num = num + "";
    return num.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));a