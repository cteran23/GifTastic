$(document).ready(function () {

    // GLOBAL Variables
    var $input = $("#input");
    var $submit = $("#submit");
    var apiKey = "EJuki6kxlIUKbt2eALisWEPi1AW7OUuJ";
    var $imgBody = $(".img-body");


    // get input value when the user presses submit.
    $submit.on("click", function (event) {
        event.preventDefault();
        $imgBody.empty();
        var inputVal = $input.val();
        getGiphys(inputVal);
        $input.val(" ");
    });

    // Make a GET request to the GIPHY API with user input.
    function getGiphys(inputVal) {
        $.get("http://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=" + apiKey + "&limit=10")
            .done(function (data) {
                for (var i = 0; i < 10; i++) {
                    var gifImg = data.data[i].images.downsized.url;
                    createBox(gifImg);
                }
            });
    };

    function createBox(gifImg) {
        var $newImg = $("<img>");
        $newImg.attr("src", gifImg);
        $newImg.addClass("img-box");


        $imgBody.append($newImg);


    }

}); // End Of Code