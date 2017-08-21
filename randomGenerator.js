function randomNumber() {
  var pickUpLines = [
    "I must be a snowflake, because I've fallen for you.",
    "Can I tie your shoes? I don’t want you falling for anyone else.",
    "If you were a steak you would be well done.",
    "Are you a beaver? Cause daaaaaaaaam!",
    "If you were a library book, I would check you out.",
    "I'm no photographer, but I can picture us together.",
    "Your hand looks heavy. Here, let me hold it for you.",
    "Are you from Starbucks? Because I like you a latte.",
    "Is your name Wi-fi? Because I'm really feeling a connection.",
    "Are you from China? Because I'm China get your number."
    ]; //created an array of pick up lines//
  
  var x = Math.floor(Math.random() * 10); //generated a random number and saved it as a variable//

  window.alert(pickUpLines[x]); //made a pick up line appear on screen//
}