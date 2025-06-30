const navbar = document.querySelector('#navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        console.log("scrolling down");
        navbar.style.position = "relative";
        // navbar.style.top = "1";

    }
    else {
        navbar.style.position = "sticky";
        navbar.style.top = 0;
    }

    lastScrollY = currentScrollY;

})

const startFormattingBtn = document.querySelector("#start-formatting-btn")
const textFormatSection = document.querySelector("#text-format-section")


startFormattingBtn.addEventListener("click", () => {
    textFormatSection.scrollIntoView({ behavior: "smooth" });
})



const formatButtons = document.querySelectorAll('.format-btn');


// modal scripts
const modalContainer = document.querySelector("#modal-container")
const resultTextarea = document.querySelector("#result-textarea")


function openModal() {
    const modalContainer = document.querySelector("#modal-container")
    const htmlBody = document.querySelector("#body")

    modalContainer.classList.toggle("display-flex")

    htmlBody.classList.toggle("disable-scrolling")


}

const fullViewBtn = document.querySelector("#full-view-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")


fullViewBtn.addEventListener("click", () => { openModal() })

closeModalBtn.addEventListener("click", () => { openModal() })



// show placeholder again if it's empty.

const editableDiv = document.getElementById("basic-input");

editableDiv.addEventListener("input", () => {
  if (editableDiv.innerText.trim() === "") {
    editableDiv.innerHTML = ""; // Ensure it's really empty
  }
});


// FORMATTING 


const normalInput = document.querySelector("#basic-input")


// const textData = "";
const textData = editableDiv.innerText; // plain readable text
// const htmlData = editableDiv.innerHTML; // raw HTML with styles
let liveText;

normalInput.addEventListener("input", ()=>{
       liveText = editableDiv.innerText;
//   const liveHtml = editableDiv.innerHTML;
//   console.log("Plain Text:", liveText);
//   console.log(typeof(liveText))
//   console.log("HTML Data:", liveHtml);
})

// alert(textData)
const btnUpperCase = document.querySelector("#btn-uppercase")

btnUpperCase.addEventListener("click", ()=>{
    
   const result =  liveText.toUpperCase();
    normalInput.innerHTML = result;
    
    
})

const btnLowerCase = document.querySelector("#btn-lowercase")
btnLowerCase.addEventListener("click", ()=>{
    
   const result =  liveText.toLowerCase();
    normalInput.innerHTML = result;
    
    
})


const btnCapitalize = document.querySelector("#btn-capitalize");

btnCapitalize.addEventListener("click", () => {
    const text = normalInput.innerText;
    const result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    normalInput.innerText = result;
});


const btnCapitalizeWords = document.querySelector("#btn-capitalize-words");

btnCapitalizeWords.addEventListener("click", () => {
    const text = normalInput.innerText;
    const result = text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    normalInput.innerText = result;
});


const btnRemoveSpace = document.querySelector("#btn-remove-space");

btnRemoveSpace.addEventListener("click", () => {
    const text = normalInput.innerText;
    const result = text.replace(/\s+/g, ' ').trim(); 
    normalInput.innerText = result;
});