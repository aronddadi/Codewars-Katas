function sumStrings(a, b) {
    let firstNumber = a.split('');
    let secondNumber = b.split('');
    let diff = Math.abs(a.length - b.length);
    let arr = []; // value we're going to send back


    if (firstNumber.length != secondNumber.length) {
        if (firstNumber.length > secondNumber.length) {
            for (let i = 0; i < diff; i++) {
                secondNumber.splice(0, 0, "0");
            }
        }
        else {
            for (let i = 0; i < diff; i++) {
                firstNumber.splice(0, 0, "0");
            }
        }
    }

    console.log(a + " is = " + firstNumber)
    console.log(b + " is = " + secondNumber)
    let carryOver = 0;
    for (let i = firstNumber.length - 1; i >= 0; i--) {
        toPush = +firstNumber[i] + +secondNumber[i] + +carryOver;
        carryOver = 0;
        if (toPush >= 10) {
            carryOver = 1;
            toPush = toPush - 10
        }
        toPush = toPush + '';
        console.log(toPush + " and the caryover is " + carryOver);
        arr.push(toPush);
    }
    if (carryOver == 1) {
        arr.push('1');
    }
    arr = arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr[i] = '';
        }
        else {
            i = arr.length;
        }
    }
    arr = arr.join('');


    return arr;
}