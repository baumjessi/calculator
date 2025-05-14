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
   if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "2");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "2");
    }
     display.textContent = "2";
}
);

let three = document.getElementById("three");
three.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "3");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "3");
    }
    display.textContent = "3";
}
);

let four = document.getElementById("four");
four.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "4");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "4");
    }
    display.textContent = "4";
}
);

let five = document.getElementById("five");
five.addEventListener("click", (e) => {
 if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "5");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "5");
    }
    display.textContent = "5";
}
);

let six = document.getElementById("six");
six.addEventListener("click", (e) => {
   if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "6");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "6");
    }
    display.textContent = "6";
}
);

let seven = document.getElementById("seven");
seven.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "7");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "7");
    }
    display.textContent = "7";
}
);

let eight = document.getElementById("eight");
eight.addEventListener("click", (e) => {
  if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "8");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "8");
    }
    display.textContent = "8";
}
);

let nine = document.getElementById("nine");
nine.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "9");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "9");
    }
    display.textContent = "9";
}
);

let zero = document.getElementById("zero");
zero.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "0");
    }
    else if (sessionStorage.getItem("num1") !== null 
    && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "0");
    }
    display.textContent = "0";
}
);

let plus = document.getElementById("plus");
plus.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "+");
    console.log(sessionStorage.getItem("operator"));
}
);

let minus = document.getElementById("minus");
minus.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "-");
    console.log(sessionStorage.getItem("operator"));
}
);

let times = document.getElementById("times");
times.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "*");
    console.log(sessionStorage.getItem("operator"));
}
);

let divideSym = document.getElementById("divide");
divideSym.addEventListener("click", (e) => {
    sessionStorage.setItem("operator", "/");
    console.log(sessionStorage.getItem("operator"));
}
);

let clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
    sessionStorage.removeItem("num1");
    sessionStorage.removeItem("num2");
    sessionStorage.removeItem("operator");
    sessionStorage.removeItem("num3");
    display.textContent = "";
}
);

let equal = document.getElementById("equal");
equal.addEventListener("click", (e) => {
    let num1 = Number(sessionStorage.getItem("num1"));
    let num2 = Number(sessionStorage.getItem("num2"));
    let operator = sessionStorage.getItem("operator");
    let solution = `${operate(num1, num2, operator)}`;
    sessionStorage.removeItem("num1");
    sessionStorage.removeItem("num2");
    sessionStorage.removeItem("operator");
    sessionStorage.removeItem("num3")
    console.log(solution);
    display.textContent = `${solution}`;
}
);

function concNum() {
    let num1 = Number(sessionStorage.getItem("num1"));
    let num2 = Number(sessionStorage.getItem("num2"));
    let num3 = num1.toString() + num2.toString();
    Number(num3);
    sessionStorage.setItem("num3", num3);
    console.log(num3);
}

concNum();