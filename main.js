function add(num1, num2) {
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
    return result;
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        console.log(add(num1, num2));
    }
    else if (operator === "-") {
        console.log(subtract(num1, num2));
    }
    else if (operator === "*") {
        console.log(multiply(num1, num2));
    }
    else {
        console.log(divide(num1, num2));
    }
}