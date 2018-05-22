var palindromeChainLength = function (n) {
    var num = n + '';
    var counter = 0;
    var palindrome = false;
    if (num == num.split('').reverse().join('')) {
        palindrome = true;
    }
    //console.log("state : "+palindrome+" and num---n"+num+"---"+n)
    while (palindrome == false) {
        var numTwo = num.split('').reverse().join('')
        num = +num + +numTwo;
        num = num + '';
        //console.log(num+" is a   " + typeof(num)+" and numTwo : " +numTwo+ " is a  " +typeof(numTwo));
        if (num == num.split('').reverse().join('')) {
            palindrome = true;
        }
        counter++;
    };
    //console.log(counter+" for " + n )
    return (counter);
};
