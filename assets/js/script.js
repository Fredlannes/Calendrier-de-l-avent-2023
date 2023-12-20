//  sauvegarder les cases cliquées dans le navigateur (session storage , localstorage)


import quotes from "./quotes.js"

const boxes = document.querySelectorAll(".js_box");
const today = new Date(Date.now());
const dateNumber = today.getDate();

const showPreviouslyOpenedBoxes = () => {
    const openedBoxes = localStorage.getItem("openedBoxes")
    if(openedBoxes !== null){
        const listOfBoxes = openedBoxes.split(",")
        for(let i=0; i<listOfBoxes.length; i++){
            const boxNumber = listOfBoxes[i]
            const box = document.querySelector(`[data-number="${boxNumber}"]`)
            showImage(box)
        }
    }
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const boxNumber = parseInt(box.textContent)
        if(boxNumber <= dateNumber){
            playSong();
            showImage(box);
            openModal(boxNumber)
            saveHistory(boxNumber)
        }
    })
});


const url = "assets/audios/opening-song.mp3";
const song = new Audio (url);

const playSong = () => {
    song.pause()
    song.currentTime = 0
    song.play()
    
};

const showImage = (boxToHide) => {
    boxToHide.classList.add("hide");
}

const modal = document.querySelector(".js-modal");
const quote = document.querySelector(".js-quote");
const author = document.querySelector(".js-author");
const openModal = (index) => {
    quote.textContent = quotes[index].quote
    author.textContent = quotes[index].author
    modal.showModal()
};

modal.addEventListener("close", () => {
    song.pause();
});

const saveHistory = (boxNumber) => {
    let openedBoxes = []
    let localValue = localStorage.getItem("openedBoxes")
    if (localValue != null) {
        openedBoxes= localValue.split(',') 
    } 
        openedBoxes.push(boxNumber)
        localStorage.setItem("openedBoxes", openedBoxes)
};

showPreviouslyOpenedBoxes()