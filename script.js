const display = document.getElementById('display')

function appendToDisplay(input) {
    display.value += input
}

function toDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function calculate(input) {
    display.value = eval(display.value)
}