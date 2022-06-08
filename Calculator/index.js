//<img src="https://random.imagecdn.app/500/150">
let display = document.getElementById("display")
document.getElementById("clear-text").addEventListener("click", () => { display.value = "" })

// 0 - 9 buttons 
document.getElementById("1-button").addEventListener("click", () => { display.value += "1" })
document.getElementById("2-button").addEventListener("click", () => { display.value += "2" })
document.getElementById("3-button").addEventListener("click", () => { display.value += "3" })
document.getElementById("4-button").addEventListener("click", () => { display.value += "4" })
document.getElementById("5-button").addEventListener("click", () => { display.value += "5" })
document.getElementById("6-button").addEventListener("click", () => { display.value += "6" })
document.getElementById("7-button").addEventListener("click", () => { display.value += "7" })
document.getElementById("8-button").addEventListener("click", () => { display.value += "8" })
document.getElementById("9-button").addEventListener("click", () => { display.value += "9" })
document.getElementById("0-button").addEventListener("click", () => { display.value += "0" })

// operator buttons
document.getElementById("addition-button").addEventListener("click", () => { display.value += "+" })
document.getElementById("subtraction-button").addEventListener("click", () => { display.value += "-" })
document.getElementById("multiplication-button").addEventListener("click", () => { display.value += "*" })
document.getElementById("division-button").addEventListener("click", () => { display.value += "/" })
document.getElementById("percentage-button").addEventListener("click", () => { display.value += "%" })
document.getElementById("negative-button").addEventListener("click", () => { display.value += "-" })
document.getElementById("decimal-button").addEventListener("click", () => { display.value += "." })

//equal button
document.getElementById("equal-button").addEventListener("click", () => {
    display.value = eval(display.value)
})