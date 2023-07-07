let message = "abc";
message.toUpperCase();

console.log(message);

console.log(message.toUpperCase());

let city = "la";
let upperCity = city.toUpperCase();
console.log(upperCity);

let messageEnd = message.endsWith("c");
console.log(messageEnd);

// --------------------------------------------

let message2;
message2 = "abc";

let messageEnd1 = message2.endsWith("c");
// now methods completion doesn't work ! because "message2" is not explicitly declared as string
console.log(messageEnd1);

//

// solution is type assertion

// 1

let messageEnd2 = (<string>message2).endsWith("c");
console.log(messageEnd2);

// 2

let messageEnd2_2 = (message2 as string).endsWith("c");
console.log(messageEnd2_2);
