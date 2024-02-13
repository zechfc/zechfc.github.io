//Javascript for later
const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");


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


const putmedown = () => {

    window.open("down.html");
  
};

const pickmeup = () => {
    window.open("up.html");
  
};
//document.getElementById("signin").onclick = signin;
//document.getElementById("cart-btn").onclick = cart;
//document.getElementById("pic1").onmouseenter = fade;
//document.getElementById("pic1").onmouseleave = show;

//document.getElementById("pic2").onmouseenter = fade2;
//document.getElementById("pic2").onmouseleave = show2;


document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("btn-day").onclick = pickmeup;
document.getElementById("btn-night").onclick = putmedown;
document.querySelector("order").onclick = Order;
