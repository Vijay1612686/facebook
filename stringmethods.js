/*length - Returns the length of string
toUppercase () - converts to entire string to uppercase
tolowercase () - converts to entire string to lowercase
charAt(Index) - Returns the index of the first occurence of the specified substring
Indexof - Returns the index of the last occurence of the specified substring
slice () - extracts a section of the string (similar  to substring)
substring - it is used to gr a particular value in the string value
replace () - Replaces the specified value with a new value
replaceAll () - it is used to replace all the words in the given para
trim () - Removes white space from both ends of the string
split () - splits the string into an array of substring
join - it is used to joining the words
concat () - joins two or more strings
startswith() - check if the string starts with the specified substring 
endswith() - check if the string ends with the specified substring
includes() - check if the  string contains the specified substring
*/

let str = "  hello java welcome to the world of java language  "
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(7));
console.log(str.indexOf("v"));
console.log(str.lastIndexOf("v"));
console.log(str.slice(-7));
console.log(str.slice(7));
console.log(str.substring(1,7));
console.log(str.replace("java","javascript"));
console.log(str.replaceAll("java","javascript"));
console.log(str.trim());
console.log(str.split(" "));
console.log(str.split(" ").join(" "));
console.log(str.concat("in chennai"));
console.log(str.startsWith("j"));
console.log(str.endsWith(" "));
console.log(str.includes("lang"));

//task

let task = "chennai city center"
console.log(task.replaceAll("c","C"));


















