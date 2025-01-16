// Write a function logArguments that takes any number of arguments and logs them to 
// the console. Use rest parameters to collect the arguments. 

function logArguments(...args) {
    console.log(args);
}


logArguments(10, 20, 30, 40, 50);