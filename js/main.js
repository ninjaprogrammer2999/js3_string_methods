// javascript chapter 3 string methods
// string methods 
// let's create a variable
const myVariable = "Machine learning";
// need to use keyword 'const' if you don't wanna change the 
// - value of the variable or re-assign the value of the variable***** 
//console.log(myVariable);
// length method
//console.log(myVariable.length);

// string methods
console.log(myVariable.slice(5,7));
// add index(start parameter and end parameter)
// end parameter should not be greater than or equal to 
// - start parameter*** incase it returns nothing***
// it should be greater than start parameter always***
///////////////////////////////////////////////////////////////
console.log(myVariable.charAt(0));
/////////////////////////////////////////////////
console.log(myVariable.indexOf("M"));
/////////////////////////////////////////////////
console.log(myVariable.lastIndexOf("in"));
/////////////////////////////////////////////////
console.log(myVariable.includes("dude"));
console.log(myVariable.includes("Machine"));
/////////////////////////////////////////////////
console.log(myVariable.split("i"));
console.log("dude,bro,mate,pal".split(","));
console.log("dude bro mate pal".split(" "));
console.log(myVariable.split(" "));














