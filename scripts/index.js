console.log("hello new new");

//when we click on a .picture-frame we see an enlarged version of the image
//that is inside that .picture-frame

// this finds/selects all the elements that have the attribute 'data-target' 
const targetElements = document.querySelectorAll('[data-target]');
var lastImageClicked ;

const bigImage = document.querySelector('[data-bigpic]');

// function respondToClick(event)  works too
function respondToClick() {
    lastImageClicked = event;
    //add the "big" class to the .picture-frame div
    //when we clikc - we click on the image, but we need to go up one level to the 
    //parent elemnent, the .picture-frame div
    console.log(event.target.parentElement);
    //this adds the class 'big' to the element you clicked on
    event.target.parentElement.classList.toggle("big");
}
function attachClickHandler(oneElement) {
    oneElement.addEventListener("click",respondToClick);
}
//this is how we handle one element:
// targetElements[0].addEventListener("click",respondToClick);



// this is not working:
// well now, it is working, but the page click overrides the image click...
function respondToClickedPage() {
    //if the place clicked is the image
    // console.log(event);
    // console.log(event.target.parentElement);
    if (event == lastImageClicked){
        //  clicking on an image effectively creates two events.
        // one for the image and one for the document
        // but those events WILL BE THE SAME.
        //so, if they are the same...the document call should do NOTHING
        console.log("just clicked");
    }
    else{
        //if they aren't the same, then you clicked elsewhere on the page
        //remoce the .big class from everything
        console.log ("event click not on last image");
        targetElements.forEach(removeBig);
    }
    
}
function removeBig(theElement) {
        theElement.classList.remove("big");
}


targetElements.forEach(attachClickHandler);

document.addEventListener("click",respondToClickedPage);
