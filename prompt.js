import promptSync from "prompt-sync";

const prompt = promptSync();

let name = prompt("What is Your name ? ");
let age = prompt("What is your age ? ");
console.log("Your name is : ",name);
console.log("Your age is : ",age);