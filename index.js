let total = 0 //se le va a mostrar al usuario
let currentNumber = "0" //cuenta interna del numero que se digita antes del siguiente signo
let previous_type = "" 

const operation = function(previous,number,type)  {
    switch (type) {
        case "+":
            previous = previous + number
            break;
        case "-":
            previous = previous - number
            break;
        case "*":
            previous = previous * number
            break;
        case "/":
            previous = previous / number
            break;
        case "=":
            const div = document.getElementById("numberToShow")
            div.innerText = previous
            break;
        default:
            previous = Number(currentNumber)
            break;
    }
    return previous

}

function test(evt){
    const div = document.getElementById("numberToShow")
    div.innerText = div.innerText+evt
    if (isNaN(evt)){
        switch (evt) {
            case "=":
                total = operation(total,Number(currentNumber),previous_type)
                total = operation(total,Number(currentNumber),evt)
                currentNumber = total
                previous_type = ""
                console.log(total)
                break;
            case "C":
                currentNumber = ""
                const div = document.getElementById("numberToShow")
                div.innerText = ""
            default:
                total = operation(total,Number(currentNumber),previous_type)
                currentNumber = ""
                console.log(total)
                previous_type = evt
                break;
        }
    }else{
        currentNumber = currentNumber+evt
    }
    
}

