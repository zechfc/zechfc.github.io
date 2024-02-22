const slide = () =>{
    //console.log("sliding");
    //find the child of slideshow that does not contain the class of hidden 
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    //on the last image
    if(nextImage == null){
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

setInterval(slide, 1000);