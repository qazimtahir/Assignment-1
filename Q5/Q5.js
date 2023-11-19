//Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//SOLUTION
var famous_person = "William Shakespeare";
var message = '"There is nothing either good or bad, but thinking makes it so."';
// results using concatenation
console.log(famous_person + " said in Hemlet, " + message);
// results using Template Literals
console.log("".concat(famous_person, " said in Hemlet, ").concat(message));
