var arr = [8, 9, 11, 2, 6, 1]

function bubble(arr){
    var n = arr.length
    for (j = 0; j<n-1; j++)
    {
        for (i = 0; i<n-1-j; i++)
        {
            if (arr[i] > arr[i + 1]){
                temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}


console.log(bubble(arr))