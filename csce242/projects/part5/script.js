const showHideNav = () => {
    const root = document.querySelector(":root");
        //root.style.setProperty("--ball-color", color); changes all the circles color
    if(document.getElementById("nav-items").classList.toggle("hide-small"))
        {
            root.style.setProperty("--top1", "500px");
            root.style.setProperty("--top2", "800px");
        }
    else
    {
      
            root.style.setProperty("--top1", "800px");
            root.style.setProperty("--top2", "900px");
    }
   



};

const slideForward = () => {
    //at the end of the list of images
    if(getCurrentImage().nextElementSibling == null)
    {
        slide(document.querySelector("#preview img"));
    }
    else
    {
        slide(getCurrentImage().nextElementSibling);
    }
};

const slideBackward = () => {
    if(getCurrentImage().previousElementSibling == null)
    {
        slide(document.querySelector("#preview :last-child"));
    }
    else
    {
        slide(getCurrentImage().previousElementSibling);
    }};

const slide = (nextImage) => {
    getCurrentImage().classList.add("hide");
    nextImage.classList.remove("hide");
};

const getCurrentImage = () => {
    return document.querySelector("#preview :not(.hide)")
};


const signin = () =>{
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const cart = () => {
    alert("cart");

  
};
const Order = () => {
    
    alert("added to order");  
};


const toggleMenu = () => {
        const mainNav= document.getElementById("main-nav");
        mainNav.classList.toggle("show-menu");
    };


const attributions = (e) => {

    const countP = document.getElementById("count-p");

    if (e.target.innerHTML.toLowerCase() == "show attributions"){
        console.log("test");
        e.target.innerHTML="hide attributions";
        document.getElementById("attributions").classList.toggle("hide");


        
    }
    else{
        e.target.innerHTML = "hide attributions";
        console.log("test");
        e.target.innerHTML="show attributions";
        document.getElementById("attributions").classList.add("hide");
    }
    
};

const putmedown = () => {

    window.location.href="down.html";
  
};

const pickmeup = () => {
    window.location.href="up.html";
  
};
//document.getElementById("signin").onclick = signin;
//document.getElementById("cart-btn").onclick = cart;
//document.getElementById("pic1").onmouseenter = fade;
//document.getElementById("pic1").onmouseleave = show;

//document.getElementById("pic2").onmouseenter = fade2;
//document.getElementById("pic2").onmouseleave = show2;


if(document.getElementById("btn-day"))
{
    document.getElementById("btn-day").onclick = pickmeup;
}

if(document.querySelector("order"))
{
    document.querySelector("order").onclick = Order;
}

if(document.getElementById("hamburger"))
{
    document.getElementById("hamburger").onclick = showHideNav;
}

if(document.getElementById("btn-night"))
{
    document.getElementById("btn-night").onclick = putmedown;
}

if(document.getElementById("btn-attributions"))
{
    document.getElementById("btn-attributions").onclick = attributions;
}


document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backward-arrow").onclick = slideBackward;

document.querySelectorAll("#thumbs img").forEach((img, index) => {
    img.onclick = () => {
        slide(document.querySelector(`#preview :nth-child(${index+1})`));
    };
});