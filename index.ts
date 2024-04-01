console.log("Day 25 Challenge:");
// Question 73:
function updatingVariables() {
    let number = 10;
    console.log("value is:" ,number);

    number = 20 ;
    console.log("value is update" ,number);
}
updatingVariables()

// Question 74:
// Swapping variables
function swappValues() {
    let a= 5 ,b = 10;
    console.log("a", a , " : "," b", b ); // orignal values

    let c = a  // c = 5
    a = b;// a = 10 
    b = c; // b = 5

     console.log(`Swap:a = ${a} b = ${b}`);  // swappValues
}
swappValues();

//Question 75: Compound Assignment Operators:
function compoundOperators() {
    let x = 4;
    console.log(`x : ${x}`);
    
    x += 2; 
    console.log(`Addition ${x}`)

    x -= 1; 
    console.log(`Subturction ${x}`)

    x /= 2; 
    console.log("divission:", x);

    x *= 3;
    console.log("multiplication:", x);
    
}
compoundOperators();