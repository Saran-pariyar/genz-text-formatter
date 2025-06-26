const navbar = document.querySelector('#navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY){
        console.log("scrolling down");
        navbar.style.position = "relative";
        // navbar.style.top = "1";

    }
    else{
        navbar.style.position = "sticky";
        navbar.style.top = 0;


    }


    lastScrollY = currentScrollY;

})

const startFormattingBtn = document.querySelector("#start-formatting-btn")
const textFormatSection = document.querySelector("#text-format-section")


startFormattingBtn.addEventListener("click", () => {
    textFormatSection.scrollIntoView({   behavior: "smooth" });
})