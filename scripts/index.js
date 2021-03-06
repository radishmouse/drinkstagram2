
//when we click on a .picture-frame we see an enlarged version of the image
//that is inside that .picture-frame

// this finds/selects all the elements that have the attribute 'data-target' 

//all images
const targetElements = document.querySelectorAll('[data-image]');
// var lastImageClicked ;

const bigImage = document.querySelector('[data-bigpic]');

const bigGrid = document.querySelector('[data-grid]');
    

//assign event listener to each of the pictures
targetElements.forEach(attachClickHandler);

function attachClickHandler(oneElement) {
    oneElement.addEventListener("click",imageClicked);
}
//assign event listener to big image
bigImage.addEventListener("click",hideBigImage);

function hideBigImage() {
    event.target.classList.toggle('hidden');
    bigImage.src = "";
    bigGrid.classList.toggle('hidden');

}

function imageClicked(){
    console.log(event.target);
    const imgSrc = event.target.src;
    console.log(imgSrc);
    bigImage.src = imgSrc;
    //because of the border, i have to remove the class from both divs
    bigImage.classList.remove('hidden');
    bigGrid.classList.remove('hidden');


    //update the style for bigImage to be the xoffset + 50 pixels
    //otherwise the big picture is constantly at 50px from the top of the page.
    //if you scroll down, you can't see it.
    // use this to change the top value for big image

    //is this OK as an inline style change?
    //OR is it better to use a CSS variable???
    const currYOffset = window.pageYOffset; 

    bigGrid.style.top =  " " + (currYOffset+30) + "px";
    console.log(currYOffset);

    // I like this! You identified an issue
    // with the UI ("User can no longer see the image if they scroll down.")
    // and then wrote code to deal with it.
    // There are other approaches, though. For example,
    // you could make the thumbnails scroll independently
    // by adding this style to the thumbnail container: `overflow-y: auto` and setting
    // the big image to `position: absolute`.
    
}

