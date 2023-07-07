var message = "abc";
message.toUpperCase();
console.log(message);
console.log(message.toUpperCase());
var city = "la";
var upperCity = city.toUpperCase();
console.log(upperCity);
var messageEnd = message.endsWith("c");
console.log(messageEnd);
// --------------------------------------------
var message2;
message2 = "abc";
var messageEnd1 = message2.endsWith("c");
// now methods completion doesn't work ! because "message2" is not explicitly declared as string
console.log(messageEnd1);
//
// solution is type assertion
// 1
var messageEnd2 = message2.endsWith("c");
console.log(messageEnd2);
// 2
var messageEnd2_2 = message2.endsWith("c");
console.log(messageEnd2_2);
