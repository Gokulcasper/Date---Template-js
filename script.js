// Date()

const date = Date().toString();
const now = new Date();
const anotherdate = new Date();
anotherdate.setFullYear("1998");

console.log(date);
console.log(now.getFullYear());
console.log(anotherdate.getFullYear());

// String primitives

const message = "Hai Gokul This is Raj \n Full Stack Developer";
const message2 = `Hai Gokul,

This is "Raj"

Full Stack Developer`;

console.log(message);
console.log(message2);
