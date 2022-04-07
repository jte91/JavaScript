function num_of_digits(num) {
	num = Math.abs(num)
	let arr = []
	if (num == 0)
    {
		return 1
	}
    else
    {
	    while(num>0)
        {
		    arr.push(num % 10)
		    num = parseInt(num / 10)
	    }
	console.log(arr)
	return arr.length	
	}
	
}