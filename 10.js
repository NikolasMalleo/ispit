var m1 = [[1, 8, 7], [3, 7, 3], [1, 9, 4]]
var m2 = [[5, 2, 3], [9, 4, 7], [9, 5, 11]]

function mnozhenya(m1, m2) {
    var rowsm1 = m1.length
    var colsm1 = m1[0].length
    var rowsm2 = m2.length
    var colsm2 = m2[0].length
    var fin = [];
    if (colsm1 != rowsm2) return false;
    for (var i = 0; i < rowsm1; i++) fin[i] = [];
    for (var k = 0; k < colsm2; k++) {
        for (var i = 0; i < rowsm1; i++) {
            var t = 0;
            for (var j = 0; j < rowsm2; j++) {
                t += m1[i][j] * m2[j][k];
            }
            fin[i][k] = t;
        }
    }
    return fin;
}

console.log(mnozhenya(m1, m2))