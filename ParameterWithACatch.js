function perimeter(l, num)
{
    let square = 4 * num
    let circle = 6.28 * num
    switch(perimeter)
    {
        case "s":
            console.log(square);
            break;
        case "c":
            console.log(circle);
            break;
        // default:
        //     console.log("VALID VALUE");
    }
}
console.log(perimeter("s", 7))
console.log(perimeter("c", 4))
console.log(perimeter("c", 9))