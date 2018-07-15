//Name: Brian Tu
//Tools Class
//Last Updated: May 4, 2018

//This function takes a string of any length and prints out each letter on a new line
function printString(str) {
    for (i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}

//This returns the most recurring character in a string
function googleInterview1(str) {

    for (var i = 0; i < str.length; i++) {

        for (var j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return str[i]
            }
        }
    }
    return null
}

//Solution to Project Euler #1
function pe1(n) {
    var sum = 0;

    for (var i = 0; i < n; i++) {

        if (i%3 == 0 || i%5 == 0) {
            sum = sum + i
        }
    }
    return sum
}

//Solution to Project Euler #2
function pe2(n) {

    var s = 2; //accounts for first even number
    var n1 = 1;
    var n2 = 2;
    var nc = 3;

    while (nc < n) {

        if (nc%2 == 0) {

            s += nc;
        }

        nc = n1 + n2;
        n1 = n2;
        n2 = nc;
    }
    return s;

}

function pe3(n) {

    var maxfactor = 0;

    for (var i = 2; i <= n; i++) {
        while (n%i == 0) {
            maxfactor = i;
            n = n/i;
        }
    }
    return maxfactor;
}

//This function finds the sum of the digits in a number
function sumDigits(n) {

    var sum = 0;

    for (i = 0; i < n.length; i++) {

        sum += parseInt(n[i]);

    }

    return sum;
}


//This functions prints true if prime and false if composite
function isPrime(n) {

    if (n == 1) {
        return false;
    }

    else if (n == 0 || n%1 != 0) {
        return 'You are stupid. Please input integer.';
    }

    else if (n == 2) {
        return true;
    }
    else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }

            return true;
        }
    }
}


