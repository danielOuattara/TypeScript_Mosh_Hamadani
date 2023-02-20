var message = "abc";
// message.
console.log(message);
var city = "la";
var upperCity = city.toUpperCase();
console.log(upperCity);
var messageEnd = message.endsWith('c');
console.log(messageEnd);
// --------------------------------------------
var message2;
message2 = "abc";
// now methods completion doesn't work ! because "message2" is not explicitly  declared as string
// solution is type assertion
var messageEnd2 = message2.endsWith('c');
console.log(messageEnd2);
var messageEnd2_2 = message2.endsWith('c');
console.log(messageEnd2_2);
