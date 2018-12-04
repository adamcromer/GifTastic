$(document).ready(function () {

    //An array with a list of cartoons to show gifs for.
    var cartoonList = ["Adventure Time", "The Simpsons", "Rick and Morty", "Regular Show", "Bob's Burgers", "Futurama", "Steven Universe", "Archer", "Avatar: The Last Airbender", "Pokemon", "Rugrats", "SpongeBob SquarePants", "Popeye", "Dexter's Laboratory", "Tom and Jerry", "Powerpuff Girls", "King of The Hill", "Garfield", "Johnny Bravo", "Batman", "Spider-Man: The Animated Series", "X-Men: The Animated Series", "Scooby-Doo", "Jonny Quest", "Transformers", "Teenage Mutant Ninja Turtles"];
    cartoonList.sort();


    //Global var that link to their $counterparts.
    var btnHolder = $("#btnHolder");
    var mainText = $("#mainText");


    //A for loop which takes each item from the array and makes it into a button.
    for (var i = 0; i < cartoonList.length; i++) {
        var cartoon = $('<button type="button" class="btn btn-success p-2 mr-1 ml-1 float-left">').text(cartoonList[i]);
        cartoon.attr('data-name', cartoonList[i]);
        btnHolder.append(cartoon);
        var button = $(".btn");
    }


    //A function for what happens when you click on a button.        
    button.click(function () {

        mainText.empty();
        var thisCartoon = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thisCartoon + "&api_key=3cIsIeloVUjq1nketG9GZn3hRsKSFI3S&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            for (var i = 0; i < 10; i++) {
                // console.log(response);
                var newDiv = $("<div class='m-1 float-left'>");
                var gifDiv = $("<img class='gif m-1'>");
                var rating = $("<h1 class='btn text-light'>");
                gifDiv.attr("class", "gif");
                // console.log(gifDiv.attr('class'));
                gifDiv.attr('data-name', i);
                gifDiv.attr('src', response.data[i].images.fixed_height_still.url);
                gifDiv.attr('data-state', 'still');
                gifDiv.attr('data-still', response.data[i].images.fixed_height_still.url);
                gifDiv.attr('data-animate', response.data[i].images.fixed_height.url);
                newDiv.append(gifDiv);
                rating.text("Rated: " + (response.data[i].rating).toUpperCase());
                newDiv.append(rating);
                mainText.append(newDiv);
                var image = $(".gif");
            }
        });
    });

    //A function for what happens once you click on the gif or still.
    $(document).on("click", ".gif", function () {

        console.log("test");
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {

        //     var thisIndex = $(this).attr("data-name");
        //     console.log(thisIndex);
        //     gif.attr("src", response.data[thisIndex].images.fixed_height.url);
        // });
    });



});