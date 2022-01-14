# Fizz-Buzz-Puzzle
Create a function that takes a number as a parameter. This function will print out (console.log()) every number from 1 to the number passed as the parameter, now:
- if the number is divisible by 3 then the function will print out the word 'Fizz' instead of the number.
- if the number is divisible by 3 and 5 then the function will print out the word 'Fizz Buzz' instead of the number.

Reasoning:
From my point of view, I will use the if-else statement to do this exercise. The reason why I decided on the if-else statement is because they want me to find any divisible number of 3 and if the number is not only divisible by 3, it should be also divisible by 5. the if else statement will be the easier way to find all numbers divisible by both numbers, in that case the if else statement loop will run until it finds those numbers meaning it will check  whether or not that number is divisible by 3 or both. If the loop realizes that this number is divisible by 3, it will stop and put out Fizz instead of the divisible number, for the opposite where the first statement is false and the second one is true, it will put out the word Fizz Buzz instead of that number.

Pseudo code:

for (variable iterator equals to zero, iterator less than equal 100, add on the iterator) {

if (iterator dividing by the given number is equal to zero) {

    console.log //print out ("Fizz");
    
else if (iterator dividing by the given numbers are equal to zero) {

    console.log //print out ("FizzBuzz");
}

}
