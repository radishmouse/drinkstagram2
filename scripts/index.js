console.log("hello new new");

//when we click on a .picture-frame we see an enlarged version of the image
//that is inside that .picture-frame

// this finds/selects all the elements that have the attribute 'data-target' 

//all images
const targetElements = document.querySelectorAll('[data-image]');
// var lastImageClicked ;

const bigImage = document.querySelector('[data-bigpic]');

//assign event listener to each of the pictures


targetElements.forEach(attachClickHandler);

function attachClickHandler(oneElement) {
    oneElement.addEventListener("click",imageClicked);
}

bigImage.addEventListener("click",hideBigImage);

function hideBigImage() {
    event.target.classList.toggle('hidden');
    bigImage.src = "";

}

function imageClicked(){
    console.log(event.target);
    const imgSrc = event.target.src;
    console.log(imgSrc);
    bigImage.src = imgSrc;
    bigImage.classList.remove('hidden');

};

