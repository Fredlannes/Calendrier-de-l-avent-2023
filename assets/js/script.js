import quotes from "./quotes.js"

const boxes = document.querySelectorAll(".js_box");
const today = new Date(Date.now());
const dateNumber = today.getDate();



boxes.forEach(box => {
    box.addEventListener("click", () => {
        const boxNumber = parseInt(box.textContent)
        if(boxNumber <= dateNumber){
            playSong();
            showImage(box);
            openModal(boxNumber)
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
    const author = document.querySelector(".js-author")
    const openModal = (index) => {
        quote.textContent = quotes[index].quote
        author.textContent = quotes[index].author
        modal.showModal()
    }