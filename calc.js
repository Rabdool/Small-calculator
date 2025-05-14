function appendToDisplay(value) {
    const display = document.calcForm.display;
    display.value += value;
}

function clearDisplay() {
    document.calcForm.display.value = '';
}

function deleteLast() {
    const display = document.calcForm.display;
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.calcForm.display;
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
