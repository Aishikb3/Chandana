// Set the date we're counting down to
var countDownDate = new Date();
countDownDate.setMonth(countDownDate.getMonth());
countDownDate.setDate(countDownDate.getDate() + 7); // example: 7 days from now

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}, 1000);

function showMessage() {
    var message = document.getElementById("personalMessage").value;
    if (message.trim() === "") {
        alert("Please write a message before sending.");
        return;
    }
    document.getElementById("displayMessage").innerText = "Your message: " + message;
    document.getElementById("personalMessage").value = "";
}

function playSong() {
    var song = document.getElementById("birthdaySong");
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}
