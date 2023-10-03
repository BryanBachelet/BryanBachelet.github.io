
setTimeout(AppearContent,300)

function AppearContent()
{
    var title =  document.getElementById("title");
    title.classList.add("test")

    var introInfo = document.getElementById("info");
    introInfo.classList.add("infoAppear")

    var videoVar =  document.getElementById("videoContent");
    videoVar.classList.add("trailerVid");
}