
setTimeout(myTimer, 1000)

function myTimer() {
    var h2 = document.getElementById("content");
    h2.classList.add("test");

    var hint = document.getElementById("hint")
    hint.classList.add("hintVisible")
  }