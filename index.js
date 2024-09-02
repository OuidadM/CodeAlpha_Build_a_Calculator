// CALCULATOR PROGRAM

const display= document.getElementById("display")


function appendToDisplay(input) {
    // Check if the current display value starts with '0' and is followed by a digit (and not '.')
    if (display.value === "0" && input !== ".") {
        display.value = input; // Replace '0' with the new input
    } else {
        display.value += input; // Append the input to the display
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
       // Do nothing, keep the current display value as is
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}