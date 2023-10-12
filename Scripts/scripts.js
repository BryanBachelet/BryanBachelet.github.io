

const aboutMe = document.querySelector(".AboutMe");
const buttonProjec = document.querySelector(".Project");
const ContactProject = document.querySelector(".Contact");

const pres = document.querySelector(".aboutme");
const footer = document.querySelector(".Footer")
const project = document.querySelector(".Galerie")

aboutMe.addEventListener("click", function () {
    pres.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

buttonProjec.addEventListener("click", function () {
  project.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});

ContactProject.addEventListener("click", function () {
  footer  .scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
});


setTimeout(myTimer, 1000)
function myTimer() {
    var h2 = document.getElementById("content");
    h2.classList.add("test");

    var hint = document.getElementById("hint")
    hint.classList.add("hintVisible")
  }

  