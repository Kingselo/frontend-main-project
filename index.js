const shareButton = document.querySelector('.share-icon');
const secShareButton = document.querySelector('.second-share');
const shareBox = document.querySelector('.share-box');
const shareButtonImg = document.getElementById('img')
let firstImg = 'images/icon-share.svg'
let secondImg = 'icon-share-second.svg'

let clickCount;

shareButton.addEventListener('click', ()=>{
    shareBox.classList.toggle('active')

    if(shareBox.classList.contains('active')) {
        console.log(shareButton.style.backgroundColor)
        shareButton.style.backgroundColor = 'hsl(212, 23%, 69%)'
        shareButtonImg.src = "images/icon-share-second.svg"
    } else {
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)'
         shareButtonImg.src = "images/icon-share.svg"
    }

})

secShareButton.addEventListener("click", ()=> {
    shareBox.style.display = "none"
})