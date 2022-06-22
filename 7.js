var arr = [8, 9, 11, 2, 6, 1]

function insert(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var v = arr[i] 
        var j = i - 1;
        for ( ;j >= 0 && arr[j] > v; j--) 
        {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = v;
    }
    return arr;
}


console.log(insert(arr))