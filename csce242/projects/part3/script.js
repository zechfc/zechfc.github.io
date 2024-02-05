//let- variable that can change
//const- variable that does not change (constant)
//when putting parathesis at the end of the function it calls the function

//put all functions at the top
const signin = () =>{
    alert("login");

};

const cart = () => {
    alert("cart");

  
};

document.getElementById("signin").onclick = signin;
document.getElementById("cart-btn").onclick = cart;
