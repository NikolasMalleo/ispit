function nsk(x, y){
    let i = 1
    temp1 = -1
    temp2 = -2
    let nsk1 = " "
    let nsk2 = ""
    let temp01 = 0
    let temp02 = 0
    while (nsk1 != nsk2){
        temp1 = x*i
        temp2 = y*i
        
        if (temp1 % y === 0 && temp01 === 0) {
            nsk1 = temp1;
            temp01 = 1
        }
        if (temp2 % x === 0 && temp02 === 0) {
            nsk2 = temp2;
            temp02 = 1
        }
        i++
    }
    console.log("\033[36mНайменше спільне кратне дорівнює =\033[0m", nsk1)
}

nsk(123, 321)