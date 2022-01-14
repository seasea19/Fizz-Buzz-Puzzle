// For loop which itterates from 0 to 100. 
    for(var i = 0; i <= 100; i++) {
        // a conditional statement that will divide numbers by 3 to find the ones that do not have any remainders left meaning they are divisible by 3.
        if  (i % 3 === 0) {
            // Any numbers the conditional statement above found divisible by 3 will be print out as Fizz and the number will not be show.
           console.log("Fizz") ;
        // a conditional statement that will divide numbers by 3 and 5 to find the ones that do not have any remainders left meaning they are divisible by 3 and 5.
        } else if (i%3 && i%5 === 0 ) {
            console.log("FizzBuzz");
         // Any numbers the conditional statement above found divisible by 3 and 5 will be print out as FizzBuzz and the number will not be show.
        }
    }