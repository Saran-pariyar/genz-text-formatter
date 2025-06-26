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

// JFF

function readOutLoud(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'en-US'; // or change it to 'en-GB', 'es-ES', etc.
    speech.rate = 1.5; // set to 1.5 or 2 for faster speaking if needed
    window.speechSynthesis.speak(speech);
}

formatButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnId = e.target.id;
        // console.log(`Button clicked: ${btnId}`);
        readOutLoud("Ruko jara, sabar karo. Bolana dhaka muki nahi karneka. Still functionality add gareko chaina")

        // You can use a switch or if-else here based on btnId
        // to trigger the right function
    });
});
