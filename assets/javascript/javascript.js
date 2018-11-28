$(document).ready(function () {

//An array with a list of cartoons to show gifs for.
var cartoonList = ["Adventure Time", "The Simpsons", "Rick and Morty", "Regular Show", "Bob's Burgers", "Futurama", "Steven Universe", "Archer", "Avatar: The Last Airbender", "Pokemon", "Rugrats", "SpongeBob SquarePants", "Popeye", "Dexter's Laboratory", ];
cartoonList.sort();

//Global var that link to their $counterparts.
var btnHolder = $("#btnHolder");

for (i = 0; i < cartoonList.length; i++) {
    var cartoon = $('<button type="button" class="btn btn-success p-2">').text(cartoonList[i]);
    btnHolder.append(cartoon);
}

});