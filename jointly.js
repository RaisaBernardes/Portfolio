const slideshowImages = document.querySelectorAll(".intro .slideshow-img"); //Storing .slideshow-img into a variable. Using querySelectorAll method in order to get all slideshow image elements.

const nextImageDelay = 3000; //Defining a delay (3 secs) between each image in the slideshow.
let currentImageCounter = 0; //To keed track of the currently displayed image, starting from 0. Using "let" because I'm expecting reassigment of its value

//slideshowImages [currentImageCounter].style.display = "block"; //Setting the first slideshow image
slideshowImages [currentImageCounter].style.opacity = 1; 

setInterval(nextImage, nextImageDelay); //After 3 secs (nextImageDelay) it'll move to the next image

function nextImage() {
    
    //slideshowImages [currentImageCounter].style.display = "none"; //Hidding the current image.
    //slideshowImages [currentImageCounter].style.opacity = 0; 
    slideshowImages [currentImageCounter].style.zIndex = -2; 

    const tempCounter = currentImageCounter;

    setTimeout(() => {
        slideshowImages [tempCounter].style.opacity = 0; 
    }, 1000);

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length; //increasing counter by 1. "% slideshowImages.length" is in order to display the images cyclically.
    //slideshowImages [currentImageCounter].style.display = "block"; 
    slideshowImages [currentImageCounter].style.opacity = 1; 
    slideshowImages [currentImageCounter].style.zIndex = -1; 
}







