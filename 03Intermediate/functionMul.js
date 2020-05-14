function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(10000000000, 9954654651313313));


// let user = null;
// let books = null;

let purchase = function (user = 'Test', books = '0') {
    return ("Thanks " + user + " for this " + books + " Amazing Books");

}

console.log(purchase("Semikha", 1975));
