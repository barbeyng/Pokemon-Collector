
$(document).ready(function () {

    //set global variables

    var pikachuValue, charmanderValue, squirtleValue, bulbasaurValue;
    var randNumber;
    var userNumber;
    var wins = 0;
    var losses = 0;

    //functions

    function startGame() {
        userNumber = 0;
        //assign randNumber 19-120 and pokemon 1-12
        randNumber = 19 + Math.floor(Math.random() * 102);
        pikachuValue = 1 + Math.floor(Math.random() * 12);
        charmanderValue = 1 + Math.floor(Math.random() * 12);
        squirtleValue = 1 + Math.floor(Math.random() * 12);
        bulbasaurValue = 1 + Math.floor(Math.random() * 12);
        // update DOM
        $("#scoreBoard").text("Wins: " + wins);
        $("#scoreBoard").append(" Losses: " + losses);
        $("#randomNumber").text("Your goal is: " + randNumber);
        $("#tempScore").text("Your score is: " + userNumber);
    }

    startGame();

    //on click functions
    $("#pikachu").on("click", function () {
        userNumber += pikachuValue;
        $("#tempScore").text("Your score is: " + userNumber)
        checkWin();
        console.log(userNumber);
    })

    $("#charmander").on("click", function () {
        userNumber += charmanderValue;
        $("#tempScore").text("Your score is: " + userNumber)
        checkWin();
        console.log(userNumber);
    })

    $("#squirtle").on("click", function () {
        userNumber += squirtleValue;
        $("#tempScore").text("Your score is: " + userNumber)
        checkWin();
        console.log(userNumber);
    })

    $("#bulbasaur").on("click", function () {
        userNumber += bulbasaurValue;
        $("#tempScore").text("Your score is: " + userNumber)
        checkWin();
        console.log(userNumber);
    })

    // check to see if user won or lost
    function checkWin() {
        //if user lost
        if (userNumber > randNumber) {
            losses++;
            alert("The Pokemon escaped, but don't despair! Our courage will pull us through!")
            startGame();
        }

        //if user won
        if (userNumber === randNumber) {
            wins++;
            alert("You did it. You're the very best like no one ever was.");
            startGame();
        }
    }


});


