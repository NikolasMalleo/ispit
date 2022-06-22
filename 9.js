var arr = [8, 9, 11, 2, 6, 1, 11, 8, 2]

function delet(arr){
    var n = arr.length
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (arr[i] === arr[j] && i != j)
            {
                arr.splice(j, 1)
                continue
            }
        }
    }
    return arr
}

console.log(delet(arr))