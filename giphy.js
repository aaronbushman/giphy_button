// create array of buttons to initialy create with loop to page screen
var topics = ["funkadelic", "james brown", "mc5", "iggy pop", "john lennon", "neil young", "sky saxon", "brian wilson", "miles davis", "john coltrane", "sun ra", "velvet underground"];

// function to create loop to push array to buttons
function buttonPush (array) {
    for (var i = 0; i < topics.length; i++) {
        document.getElementById("buttons").innerHTML += "<button>" + array[i] + "</button>";
    }
  }

buttonPush(topics);
