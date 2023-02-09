
//               01234567
let umaString = "Um Texto";

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em', ' um', ' lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf("Texto"));
console.log(umaString.lastIndexOf("Texto", 7));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.replace('Um', 'outro'));
console.log(umaString.replace('T', 'M'));
console.log(umaString.length);
console.log(umaString.slice(3, 7));
console.log(umaString.slice(-5));
console.log(umaString.split(' '));
console.log(umaString.split(' ', 1));
console.log(umaString.toLowerCase());
console.log(umaString.toUpperCase());
console.log(umaString.toString());