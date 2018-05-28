var moveZeros = function (arr) {
    let length = arr.length;
    arr = arr.filter(zero => zero !== 0);
    for (let i = arr.length; i < length; i++) {
        arr.push(0);
    }
    return arr;
}