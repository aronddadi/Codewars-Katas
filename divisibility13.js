function thirt(n) {
    let valueToBeHad = n % 13;
    let testVal = 0;
    let powers = [1, 10, 9, 12, 3, 4];
    let numArr = [];
    let cast = n.toString().split('').reverse();
    for (var i = 0, n = cast.length; i < n; i++) {
        numArr.push(parseInt(cast[i]));
    }
    let j = 0;
    let count = 0;
    while (count < 3) { //testVal%13 != valueToBeHad 
        testVal = 0;
        for (let i = 0; i < numArr.length; i++) {
            if (j >= powers.length) { j = 0; }
            testVal = testVal + numArr[i] * powers[j];
            j++
        }
        numArr = [];
        let changeArr = testVal.toString().split('').reverse();
        for (i = 0, n = changeArr.length; i < n; i++) {
            numArr.push(parseInt(changeArr[i]));
            j = 0;
        }
        count++
    }
    return testVal
    //console.log(testVal)
}