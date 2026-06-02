
let testData ;
async function fetchJson( str)
{
const response = await fetch(str);

const json =  await response.json();

return json
}
 
testData =  fetchJson("../Scripts/words.json");

const list = document.querySelector("#data-list");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const pageNumberValue = document.querySelector("#page-number")

let sizeProjectPage = 5

let startIndex = 0;
let endIndex = sizeProjectPage;
let pageNumber = 0;

pageNumberValue.value = pageNumber

const mapData = () => {

    testData.then(data =>{ 
  const slicedData = data.users
    .slice(startIndex, endIndex)
    .map((row) => {
      return `<li>
        <a href="${row.link}">
          <div class =imgPart>
           <img src= "${row.imgLink}">
          </div>
          <div class = textPart>  
            <div class = upperPart>   
              <div class=titleProject> ${row.title} </div>
              <div class=tags> ${row.tags} </div>
              <div class=language> ${row.language} </div>
            </div>
              <div class=description> ${row.description} </div>
            </div>
          </a>
        </li>`;
    })
    .join("");

  list.innerHTML = slicedData;
  testData.then(data =>
  {
    if(data.users.length <= sizeProjectPage)
    {
        pageNumberValue.style.display= "none";
        prevButton.style.display= "none";
        nextButton.style.display= "none";
    }
    else
    {
        pageNumberValue.style.display= "visible";
        prevButton.style.display= "visible";
        nextButton.style.display= "visible";
    }

  }

  )
 // pageNumberValue.style.display = 'none'
  } )
}

mapData();

prevButton.addEventListener("click", () => {
  if (endIndex < sizeProjectPage*2) {
    startIndex = 0;
    endIndex = sizeProjectPage;
  } else {
    startIndex -= sizeProjectPage;
    endIndex -= sizeProjectPage;
    pageNumber -= 1;
  }
  pageNumberValue.value = pageNumber;
  mapData();
});

nextButton.addEventListener("click", () => {
  if (endIndex < dataSet.length) {
    startIndex += sizeProjectPage;
    endIndex += sizeProjectPage;
    pageNumber += 1;
  }
  pageNumberValue.value = pageNumber;
  mapData();
});


pageNumberValue.addEventListener("change",(e) => {
  let currentPageNumber = Number.parseInt(e.target.value)
  let maxPageNumber = Math.floor(3/sizeProjectPage)
  if(currentPageNumber > maxPageNumber){
   currentPageNumber = maxPageNumber;
    e.target.value = value
  }
  else if(currentPageNumber < 0){
    currentPageNumber = 0;
    e.target.value = value
  }
   startIndex = currentPageNumber * sizeProjectPage;
   endIndex = startIndex + sizeProjectPage
   pageNumber = currentPageNumber
   mapData();
})