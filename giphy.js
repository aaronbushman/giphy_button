// create array of buttons to initialy create with loop to page screen
var topics = ["funkadelic", "james brown", "mc5", "iggy pop", "john lennon", "neil young", "sky saxon", "brian wilson", "miles davis", "john coltrane", "sun ra", "velvet underground"];
console.log(topics);

var random = Math.floor(Math.random() * 9) + 1;

function gifPush() {
    $("button").on("click", function (event) {
        event.preventDefault();
        var search = $(this).attr("id");
        console.log(search);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=AvjZRtvRW63wJ6k9uypihgqDBWeA2xPG&limit=10";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;

                var gifCard = $("<div class='card'>");

                var gifRating = $("<div class='card-body'>").text("Rating: " + results[Math.floor(Math.random() * 9) + 1].rating);

                var searchGif = $("<img>");

                searchGif.attr("src", results[Math.floor(Math.random() * 9) + 1].images.fixed_width.url);

                gifCard.append(gifRating);

                gifCard.append(searchGif);

                $("#gifs").prepend(gifCard);
            })

    })
};

// function to create loop to push array to buttons
function buttonPush(array) {
    for (var i = 0; i < array.length; i++) {
        document.getElementById("buttons").innerHTML += '<button type="button" class="btn btn-secondary" id="' + array[i] + '">' + array[i] + " " + '</button>';
    }
};

function newButton(boxSearch) {
    document.getElementById("buttons").innerHTML += '<button type="button" class="btn btn-secondary" id="' + boxSearch + '">' + boxSearch + " " + '</button>';
};

function searchFunction() {
    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        var value = $("#searchBox").val();
        newButton(value);
        gifPush(this);
    });
};

    buttonPush(topics);
    gifPush();
    searchFunction();


