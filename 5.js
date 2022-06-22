var print = "1"

function seggs(x){
    for (let i = 2; x != 1; i++){
        while (x % i == 0)
        {
          x = x / i;
          print += " * " + i
        }
    }
    console.log(print)
}

seggs(13)