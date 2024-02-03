let pos = 0; //used let bc it keeps changing 

const colorSquare = () => {

    document.getElementById("square").classList.add("rainbow");
    //document.querySelector("#square") same as above (allows you to access css property)
    //test to see if it pops up in console means you made it 
    //into the console successfully 
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
}

const addCircle = () => {
    const color = document.getElementById("txt-color").value;
    const root = document.querySelector(":root");
    //root.style.setProperty("--ball-color", color); changes all the circles color

    const playground=document.getElementById("circle-playground");

   // playground.innerHTML += "<section class='circle'></section>"; one way
   
   const ball = document.createElement("section");
   playground.append(ball); //img .src =
   ball.classList.add("circle");
   ball.style.background = color;

}

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;


//google slider for hw