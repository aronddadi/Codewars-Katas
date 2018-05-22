function validParentheses(parens) {
    console.log(parens)
    parens.split('');
    let leftP = 0;
    let rightP = 0;
    if (parens[0] == ')') return false;
    if (parens[parens.length - 1] == '(') return false;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') {
            leftP++
        }
        else {
            rightP++;
        }
    }
    return leftP == rightP
}