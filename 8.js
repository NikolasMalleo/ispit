var arr = [8, 9, 11, 2, 6, 1]

function selection(arr) 
{
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) 
    {
        var min = i;
        for (var j = i + 1; j < n; j++) 
        { 
            if (arr[j] < arr[min]) min = j; 
        }
        var t = arr[min]; 
        arr[min] = arr[i]; 
        arr[i] = t;
    }
    return arr;
}

console.log(selection(arr))
