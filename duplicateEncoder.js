function duplicateEncode(word) {
    let wurd = word.toLowerCase().split('');
    let arr = []
    for (let i = 0; i < wurd.length; i++) {
        let count = 0;
        for (let j = 0; j < wurd.length; j++) {
            if (wurd[i] == wurd[j]) {
                count++
            }
        }
        if (count >= 2) {
            arr.push(')');
        }
        else {
            arr.push('(');
        }


    }

    arr = arr.join('');
    return arr;
}