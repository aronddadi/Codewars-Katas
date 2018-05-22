function persistence(num) {
    let g = num;
    let arr = 1;
    let counter = 0;
    g = g.toString().split('');
    while (g.length != 1) {
        for (let i = 0; i < g.length; i++) {
            arr = arr * g[i];
        }
        g = arr.toString().split('');
        arr = 1;
        counter++
    };
    return counter
}