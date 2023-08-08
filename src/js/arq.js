function red(){
    var cor = document.getElementById("red")
    cor.style.background = "red"

    setTimeout(()=>{
        cor.style.background = "rgb(90, 28, 28)"
        green()
    },7000)
}

function orange(){
    var cor = document.getElementById("orange")
    cor.style.background = "orangered"

    setTimeout(()=>{
        cor.style.background = "rgb(61, 33, 23)"
        red()
    },3000)
}

function green(){
    var cor = document.getElementById("green")
    cor.style.background = "lime"

    setTimeout(()=>{
        cor.style.background = "rgb(27, 85, 27)"
        orange()
    },5000)
}

green()