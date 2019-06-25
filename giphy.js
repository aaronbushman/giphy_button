// create array of buttons to initialy create with loop to page screen
var topics = ["funkadelic", "james brown", "mc5", "iggy pop", "john lennon", "neil young", "sky saxon", "brian wilson", "miles davis", "john coltrane", "sun ra", "velvet underground"];
console.log(topics);


function gifPush() {
    $("button").click(function () {
        var search = $(this).attr("id");
        console.log(search);
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=AvjZRtvRW63wJ6k9uypihgqDBWeA2xPG&limit=1";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;

                console.log(results);

                var gifCard = $("<div class='card'>");

                // Creating a paragraph tag with the result item's rating
                var gifRating = $("<div class='card-body'>").text("Rating: " + results.rating);
    
                // Creating and storing an image tag
                var searchGif = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                searchGif.attr("src", results.images.fixed_height.url);
    
                // Appending the paragraph and image tag to the animalDiv
                gifCard.append(gifRating);
                gifCard.append(searchGif);
    
                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs").prepend(gifCard);
            })

    })
};

// function to create loop to push array to buttons
function buttonPush(array) {
    for (var i = 0; i < topics.length; i++) {
        document.getElementById("buttons").innerHTML += '<button type="button" class="btn btn-secondary" id="' + array[i] + '">' + array[i] + " " + '</button>';
        gifPush();
    }
};

$("#searchButton").click(function () {
    var value = $("#searchBox").val();
    $("#buttons").append('<button type="button" class="btn btn-secondary" id="' + value + '">' + value + '</button>');
    
});


buttonPush(topics);


