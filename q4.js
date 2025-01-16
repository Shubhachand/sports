// Create a function createMessage that takes a default message and an indefinite 
// number of names. The function should return an array of personalized messages for 
// each name. 

function createMessage(message, ...name){
   return name.map((name) =>`${message} ${name}`);
}


let message = "Thanks for joining us, ";
let name = ["aryan","gopal"];
console.log(createMessage(message, ...name));