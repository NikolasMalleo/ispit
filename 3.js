function nsk(x, y){
    let nsk1 = 0
    let nsk2 = -1
    let i = 1
    while (nsk1 != nsk2){
        i++
        temp1 = x*i
        temp2 = y*i
        if (temp % y === 0 && nsk1 === 0) nsk1 = temp1;
        if (nsk1 % y === 0 && nsk2 === -1) nsk2 = temp2;
    }
}

nsk(1, 5)