window.onbeforeunload = function() {
  sessionStorage.clear();
};

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
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
}

let display = document.querySelector(".display");

let one = document.getElementById("one");
one.addEventListener("click", (e) => {
    if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "1");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}1`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "1");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}1`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let two = document.getElementById("two");
two.addEventListener("click", (e) => {
 if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "2");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}2`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "2");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}2`);
            display.textContent = sessionStorage.getItem("num2");
    };
});

let three = document.getElementById("three");
three.addEventListener("click", (e) => {
 if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "3");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}3`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "3");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}3`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let four = document.getElementById("four");
four.addEventListener("click", (e) => {
 if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "4");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}4`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "4");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}4`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let five = document.getElementById("five");
five.addEventListener("click", (e) => {
 if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "5");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}5`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "5");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}5`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let six = document.getElementById("six");
six.addEventListener("click", (e) => {
 if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "6");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}6`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "6");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}6`);
            display.textContent = sessionStorage.getItem("num2");
    }
});

let seven = document.getElementById("seven");
seven.addEventListener("click", (e) => {
     if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "7");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}7`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "7");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}7`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let eight = document.getElementById("eight");
eight.addEventListener("click", (e) => {
   if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "8");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}8`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "8");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}8`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let nine = document.getElementById("nine");
nine.addEventListener("click", (e) => {
     if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "9");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}9`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "9");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}9`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let zero = document.getElementById("zero");
zero.addEventListener("click", (e) => {
   if (sessionStorage.getItem("operator")===null) {
        if (sessionStorage.getItem("num1")===null) {
            sessionStorage.setItem("num1", "0");
            display.textContent = sessionStorage.getItem("num1");
        }
        else {
            num1temp = sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", `${num1temp}0`);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2")===null) {
            sessionStorage.setItem("num2", "0");
            display.textContent = sessionStorage.getItem("num2");

    }
    else if (sessionStorage.getItem("operator") !== null 
    && sessionStorage.getItem("num2") !==null) {
            num2temp = sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", `${num2temp}0`);
            display.textContent = sessionStorage.getItem("num2");
    }
    }
);

let plus = document.getElementById("plus");
plus.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "+");
}
);

let minus = document.getElementById("minus");
minus.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "-");
}
);

let times = document.getElementById("times");
times.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "*");
}
);

let divideSym = document.getElementById("divide");
divideSym.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "/");
}
);

let clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    sessionStorage.removeItem("num1");
    sessionStorage.removeItem("num2");
    sessionStorage.removeItem("operator");
    display.textContent = "";
}
);

let backspace = document.getElementById("backspace");
backspace.addEventListener("click", (e) =>{
    let slicedNum;
    if (sessionStorage.getItem("num2") === null) {
        slicedNum = sessionStorage.getItem("num1").slice(0, -1);
        sessionStorage.setItem("num1", slicedNum);
        display.textContent = sessionStorage.getItem("num1");
        }
    else if (sessionStorage.getItem("num2") !== null) {
        slicedNum = sessionStorage.getItem("num2").slice(0, -1);
        sessionStorage.setItem("num2", slicedNum);
        display.textContent = sessionStorage.getItem("num2");
    }
    });

let integer = document.getElementById("integer");
integer.addEventListener("click", (e) => {
    let negative = "-";
    let newNum;
    if (sessionStorage.getItem("num1") === null) {
        sessionStorage.setItem("num1", "-");
        display.textContent = sessionStorage.getItem("num1");
        console.log(typeof(sessionStorage.getItem("num1")));
    }
    if (sessionStorage.getItem("num2") !==null) {
        if (sessionStorage.getItem("num1").includes("-")) {
            newNum = sessionStorage.getItem("num1").replace("-", "");
            sessionStorage.setItem("num1", newNum);
            display.textContent = sessionStorage.getItem("num1");
        }
        else if (!(sessionStorage.getItem("num1").includes("-"))) {
            newNum = negative + sessionStorage.getItem("num1");
            sessionStorage.setItem("num1", newNum);
            display.textContent = sessionStorage.getItem("num1");
        }
    }
    
    else if (sessionStorage.getItem("num2") !== null) {
         if (sessionStorage.getItem("num2").includes("-")) {
            newNum = sessionStorage.getItem("num2").replace("-", "");
            sessionStorage.setItem("num2", newNum);
            display.textContent = sessionStorage.getItem("num2");
        }
        else if (!(sessionStorage.getItem("num2").includes("-"))) {
            newNum = negative + sessionStorage.getItem("num2");
            sessionStorage.setItem("num2", newNum);
            display.textContent = sessionStorage.getItem("num2");
        }
    }
});

let square = document.getElementById("square");
square.addEventListener("click", (e) =>{
    if (sessionStorage.getItem("num1") === null &&
    sessionStorage.getItem("num2") === null) {
        square.disabled = true;
        }
    else if (sessionStorage.getItem("num1") !==null &&
    sessionStorage.getItem("num2") !== null) {
        square.disabled = true;
        }
    else if (sessionStorage.getItem("num1") !==null &&
    sessionStorage.getItem("num2") === null) {
        square.disabled = false;
        let solution = Math.sqrt(sessionStorage.getItem("num1"));
        sessionStorage.setItem("num1", solution);
        display.textContent = solution;
    }
    else if (sessionStorage.getItem("num1") !== null &&
    sessionStorage.getItem("num2").length === 0) {
        square.disabled = false;
        sessionStorage.removeItem("num2");
        sessionStorage.removeItem("operator");
        let solution = Math.sqrt(sessionStorage.getItem("num1"));
        sessionStorage.setItem("num1", solution);
        display.textContent = solution;
    }
    // need to fix bug for button being disabled after hitting clear on 2 variables without using equal 
});

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num2") === null &&
    sessionStorage.getItem("num1").includes(".")) {
        decimal.disabled;
    }
    else if (sessionStorage.getItem("num2") === null &&
    !(sessionStorage.getItem("num1").includes("."))) {
        decimal.enabled;
        let floatNum1 = sessionStorage.getItem("num1") + ".";
        sessionStorage.setItem("num1", floatNum1);
        display.textContent = sessionStorage.getItem("num1");
    }
    else if (sessionStorage.getItem("num2") === null &&
    sessionStorage.getItem("num1") === null) {
        sessionStorage.setItem("num1", "0.");
        display.textContent = sessionStorage.getItem("num1");
    }
    else if (sessionStorage.getItem("num2") !== null &&
    sessionStorage.getItem("num2").includes(".")) {
        decimal.disabled;
    }
    else if (sessionStorage.getItem("num2") !==null &&
    !(sessionStorage.getItem("num2").includes("."))) {
        decimal.enabled;
        let floatNum2 = sessionStorage.getItem("num2") + ".";
        sessionStorage.setItem("num2", floatNum2);
        display.textContent = sessionStorage.getItem("num2");
    }
    else if (sessionStorage.getItem("num2") === null &&
    sessionStorage.getItem("num1") !== null) {
        sessionStorage.setItem("num2", "0.");
        display.textContent = sessionStorage.getItem("num2");
    } 
}
)

let equal = document.getElementById("equal");
equal.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num2") === null) {
        equal.disabled = true;
    }
    else if (sessionStorage.getItem("num2") !== null) {
        equal.disabled = false;
        let num1 = Number(sessionStorage.getItem("num1"));
        let num2 = Number(sessionStorage.getItem("num2"));
        let operator = sessionStorage.getItem("operator");
        let solution = `${operate(num1, num2, operator)}`;
        if (Number.isInteger(Number(solution)) === true) {
            sessionStorage.removeItem("num1");
            sessionStorage.removeItem("num2");
            sessionStorage.removeItem("operator");
            display.textContent = solution;
            sessionStorage.setItem("num1", `${solution}`);
        }
        else if (Number.isInteger(Number(solution)) === false) {
            let roundSolution = Number(solution).toFixed(2);
            sessionStorage.removeItem("num1");
            sessionStorage.removeItem("num2");
            sessionStorage.removeItem("operator");
            display.textContent = `${roundSolution}`;
            sessionStorage.setItem("num1", `${roundSolution}`);
        }
    }
}
);