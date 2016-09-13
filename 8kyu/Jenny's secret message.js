// Jenny's secret message

Description:

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

//my solution
function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

//others solution

//a ? b : c
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

function greet(name){
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}


