$(document).ready(function () {

    //An array with a list of cartoons to show gifs for.
    var cartoonList = ["Adventure Time", "The Simpsons", "Rick and Morty", "Regular Show", "Bob's Burgers", "Futurama", "Steven Universe", "Archer", "Avatar: The Last Airbender", "Pokemon", "Rugrats", "SpongeBob SquarePants", "Popeye", "Dexter's Laboratory", "Tom and Jerry", "Powerpuff Girls", "King of The Hill",];
    cartoonList.sort();


    //Global var that link to their $counterparts.
    var btnHolder = $("#btnHolder");
    var button = $(".btn");
    var mainText = $("#mainText");


    //A for loop which takes each item from the array and makes it into a button.
    for (i = 0; i < cartoonList.length; i++) {
        var cartoon = $('<button type="button" class="btn btn-success p-2">').text
            (cartoonList[i]);
        cartoon.attr('id', cartoonList[i]);
        btnHolder.append(cartoon);
        clickFunction();
    }


    //A function for what happens when you click on a button.

    function clickFunction() {
        button = $(".btn");
        button.on("click", function () {
            console.log(this.id);

            

        });
    }
});