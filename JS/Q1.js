'use strict';

var state = true;
function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

function setTimer() {
  var timeLeft = parseInt(document.getElementById("input").value);
  if (isNaN(timeLeft)) {
    alert("騙我不認識數字嗎？");
  } else {
    document.getElementById("timer").innerHTML = timeLeft;
    function countDownTimer() {
      timeLeft--;
      if (timeLeft <= 0) {
        document.getElementById("image").src = "img/off.jpg";
        state = false;
        clearInterval(count);
      }
      document.getElementById("timer").innerHTML = timeLeft;
    }
    var count = setInterval(countDownTimer, 1000);
  }
}

