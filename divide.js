function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log("Result of divide function: ", divide(6, 3));
result = divide(10, 2);
console.log("The quotient is: " + result);