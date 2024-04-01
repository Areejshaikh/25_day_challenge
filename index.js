console.log("Day 25 Challenge:");
// Question 73:
function updatingVariables() {
    var number = 10;
    console.log("value is:", number);
    number = 20;
    console.log("value is update", number);
}
updatingVariables();
// Question 74:
// Swapping variables
function swappValues() {
    var a = 5, b = 10;
    console.log("a", a, " : ", " b", b); // orignal values
    var c = a; // c = 5
    a = b; // a = 10 
    b = c; // b = 5
    console.log("Swap:a = ".concat(a, " b = ").concat(b)); // swappValues
}
swappValues();
//Question 75: Compound Assignment Operators:
function compoundOperators() {
    var x = 4;
    console.log("x : ".concat(x));
    x += 2;
    console.log("Addition ".concat(x));
    x -= 1;
    console.log("Subturction ".concat(x));
    x /= 2;
    console.log("divission:", x);
    x *= 3;
    console.log("multiplication:", x);
}
compoundOperators();
