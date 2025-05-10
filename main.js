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

let one = document.getElementById("one");
one.addEventListener("click", (e) => {
    if (sessionStorage.getItem("num1")===null) {
        sessionStorage.setItem("num1", "1");
    }
    else if (sessionStorage.getItem("num1") !== null && sessionStorage.getItem("num2") == null) {
        sessionStorage.setItem("num2", "1");
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
}
);

let equal = document.getElementById("equal");
equal.addEventListener("click", (e) => {
    let num1 = Number(sessionStorage.getItem("num1"));
    let num2 = Number(sessionStorage.getItem("num2"));
    let operator = sessionStorage.getItem("operator");
    console.log(operate(num1, num2, operator));
    sessionStorage.removeItem("num1");
    sessionStorage.removeItem("num2");
    sessionStorage.removeItem("operator");
}
);