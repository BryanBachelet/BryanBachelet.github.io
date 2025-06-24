

const aboutMe = document.querySelector(".AboutMe");
const buttonProjec = document.querySelector(".Project");
const ContactProject = document.querySelector(".Contact");

const galerieTest =  document.querySelector(".GalerieContainer").querySelectorAll(".Project");
const galerieTest2 =  document.querySelector(".GalerieContainer");

let currentGalerie;

const pres = document.querySelector(".aboutme");
const footer = document.querySelector(".Footer")
const project = document.querySelector(".Galerie")

aboutMe.addEventListener("click", function () {
  var element = document.querySelector('.aboutme');
  var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });   
});

buttonProjec.addEventListener("click", function () {
  project.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});

ContactProject.addEventListener("click", function () {
  var element = document.querySelector('.Footer');
  var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });   
});



for( let project of galerieTest)
{
    project.addEventListener("mouseover", function()
  {
        galerieTest2.classList.add("Test")
      var elements = [];
      elements = document.querySelector(".GalerieContainer").getElementsByClassName("Project")

      for(let element of elements)
      { 
        if(this != element) 
          {
            if( window.screen.width  <= 1000)
              {
                element.style.width = "200px";
              
                
              }
              else
              {
                element.style.width = "150px";
                let testTag = element.getElementsByClassName("tag");
                testTag[0].style.visibility = "hidden";
                testTag[0].style.opacity = " 0";
              
              }
          }
        else 
        { 
          if( window.screen.width  <= 1000)
          {
            element.style.width = "275px"

          }else
          {
            element.style.width = "900px"
             let testTag = element.getElementsByClassName("tag");
                testTag[0].style.visibility = "visible";
                 
                testTag[0].style.opacity = " 1";
                testTag[0].style.transition= " opacity 0.5s linear";

          }
        }
      }
  });

  project.addEventListener("mouseleave", function()
  {
    galerieTest2.classList.remove("Test")


    var elements = [];
    elements = document.querySelector(".GalerieContainer").getElementsByClassName("Project")

    for(let element of elements)
    { 
        element.style.width = "275px";
          let testTag = element.getElementsByClassName("tag");
                testTag[0].style.visibility = "visible";
                 
                testTag[0].style.opacity = " 1";
                testTag[0].style.transition= " all 0.5s linear";
    }
  });
}



setTimeout(myTimer, 1000)
function myTimer() {
    var h2 = document.getElementById("content");
   h2.classList.add("test");

    var hint = document.getElementById("hint")
    hint.classList.add("hintVisible")
  }

  