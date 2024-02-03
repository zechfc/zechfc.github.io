let slider = document.getElementById("myRange");
let deg = 0;



const swap = () => {
    document.getElementById("pic1").src="https://place-hold.it/200x200/193C40/2E590";
    //document.getElementById("pic").src;
    //for assignment .src = to change img source (must be in the same directory)
};


slider.oninput = () => {
    let deg = ((slider.value/100)*360) + "deg";
   // console.log(deg);
    if((slider.value/100)*360>4)
    {
        document.getElementById("rotate").style.transform = "rotate("+deg+")";

    }
    else
    {
        document.getElementById("rotate").style.transform = "rotate(0deg)";

    }
}

const addStar = () => {
    img = document.createElement("img");

    stars.append(img)
    img.setAttribute('src','images/star.png');



}
//const clickButton = document.getElementById("btn-click");
document.getElementById("pic1").onclick = swap; //no parathesis 
document.getElementById("stars").onclick = addStar;



