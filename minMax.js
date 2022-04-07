const arr = [1, 2, 3, 4, 5];

function minMax(arr)
{
//     for(j = 0; j < arr.length; j ++)
//     {
//         if(arr[j] < arr[j + 1])
//         {
//             let min = arr[j];
//             return min;
//         }
//         else
//         {
//             return Math.max(arr);
//         }
//         // let n
//         // let x
//         //  n = Math.min(arr);
//         //  x = Math.max(arr);
//         // console.log(`[` + n + `, ` + x + `]`);
//    }
    return [Math.min(arr), Math.max(arr)];
}

console.log(minMax(arr));