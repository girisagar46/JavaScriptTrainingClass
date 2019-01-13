**Q1. Determine whether a year is a leap year or not**

Steps:

1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days). 


**Q2. Find the length of the string (entered by the user) without using the built-in function.**

Following is the example of output:
```
Input string: javascript
Output: Length of string: 10
```


**Q3. check whether a number (entered by the user) is a perfect number or not.**

A perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.

    Input: 6
    Proper divisors of 6 are: 1, 2 and 3
    Sum of proper divisors = (1 + 2 + 3) which is equal to 6 (our input)
    Hence, 6 is perfect number


**Q4. check whether the number entered by the user is a strong number or not.**

Strong Numbers are the numbers whose sum of factorial of digits is equal to the original number. Given a number, check if it is a Strong Number or not.

    Input: 145
    Output: Yes
    Sum of digit factorials = 1! + 4! + 5!
                            = 1 + 24 + 120
                            = 145


**Q5. check whether the number entered by the user is a happy number or not. The user will enter 20 input number and program will check if it is a happy number or not.**

A happy number is starting with any positive integer, replace the number by the sum of the squares of its digits in base-ten, and repeat the process until the number either equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)

If a number is happy, then all members of its sequence are happy; if a number is unhappy, all members of the sequence are unhappy.

    Input: n = 19
    Output: 19 is Happy Number,
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
    As we reached to 1, 19 is a Happy Number.


**Q6. count all vowels in a sentence (entered by the user).**

Following example shows the output of the program:

    Input: Hello C Programming
    Output: 5 (vowels)

**Q7. check whether a number entered by the user is magic number or not. The user will enter 1729 input number and program will calculate and check if it is magic number or not and print on the console.**

    What is the magic number?
    Input: 1729
    Sum of digits of the given number.(1 + 7 + 2 + 9 => 19)
    The reverse of 19 is 91
    The product of digit sum and the reverse of digit sum.(19 X 91 = 1729)
    If the product value and the given input are same, 
    then the given number is a magic number.(19 X 91 <=> 1729)
    
    Output: So, 1729 is a magic number.


