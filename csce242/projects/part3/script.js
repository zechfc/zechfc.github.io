//Javascript for later
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

const fade = () => {
    document.getElementById("pic1").style.display = "none";

  
};

const show = () => {
    document.getElementById("pic1").style.display = "block";

  
};
const fade2 = () => {
    document.getElementById("pic2").style.display = "none";

  
};
const show2 = () => {
    document.getElementById("pic2").style.display = "block";
  
};

const toggleMenu = () => {
        const mainNav= document.getElementById("main-nav");
        mainNav.classList.toggle("show-menu");
    };

const pickmeup = () => {
    alert("test");
    window.open("login.html");
  
};
const putmedown = () => {
    alert("test");

    window.open("cart.html");
  
};


//document.getElementById("signin").onclick = signin;
//document.getElementById("cart-btn").onclick = cart;
document.getElementById("pic1").onmouseenter = fade;
document.getElementById("pic1").onmouseleave = show;

document.getElementById("pic2").onmouseenter = fade2;
document.getElementById("pic2").onmouseleave = show2;

document.getElementById("btn-day").onclick = pickmeup;
document.getElementById("btn-night").onclick = putmedown;

document.getElementById("order1").onclick = Order;
document.getElementById("order2").onclick = Order;
document.getElementById("order3").onclick = Order;
document.getElementById("order4").onclick = Order;

document.getElementById("hamburger-btn").onclick = toggleMenu;
