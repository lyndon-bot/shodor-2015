/* Author: Aaron Weeden, Shodor, 2015 */

/* This code runs when the user clicks the "Run" button */
run = function() {

  /* Generate a random number */
  var randNum = Math.random();
  var output;
if (randNum < 1/21) {
output = "It is certain";


}

else if (randNum < 2/21) {

output = "It is decidedly so";

}
else if (randNum < 3/21) {

output = "Without a doubt";
}
else if (randNum < 4/21) {

output = "Yes definitely";
}
else if (randNum < 6/21) {

output = "As I see it, yes";
}
else if (randNum < 7/21) {

output = "Most likely";
}
else if (randNum < 8/21) {

output = "yes";
}
else if (randNum < 9/21) {

output = "signs point to yes";
}
else if (randNum < 10/21) {

output = "reply hazy try again";
}
else if (randNum < 11/21) {

output = "ask again later";
}else if (randNum < 12/21) {

output = "beter not to tell you now";
}

else if (randNum < 13/21) {

output = "cannot predict now";
}
else if (randNum < 14/21) {

output = "Concentrate and ask again";
}else if (randNum < 15/21) {

output = "Don't count on it";
}

else if (randNum < 16/21) {

output = "My reply is no";
}else if (randNum < 17/21) {

output = "My sources say no";
}
else if (randNum < 18/21) {

output = "Outlook not so good";
}

else if (randNum < 19/21) {

output = "Very doubtful";
}
else if (randNum < 20/21) {

output = "You may rely on it";
}


else {
output = "Outlook good";

}

  /* Print the computed output in HTML */
  document.getElementById("output-box").innerHTML = output;
}
