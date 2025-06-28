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

const btnUpperCase = document.querySelector("#btn-uppercase")

// const textData = "";
const textData = editableDiv.innerText; // plain readable text
// const htmlData = editableDiv.innerHTML; // raw HTML with styles
let liveText;

normalInput.addEventListener("input", ()=>{
       liveText = editableDiv.innerText;
//   const liveHtml = editableDiv.innerHTML;
//   console.log("Plain Text:", liveText);
//   console.log("HTML Data:", liveHtml);
})

// alert(textData)

btnUpperCase.addEventListener("click", ()=>{
    // normalInput.innerHTML = "<b>Hello world</b>!"

    
})