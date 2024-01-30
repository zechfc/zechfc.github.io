//let- variable that can change
//const- variable that does not change (constant)
//when putting parathesis at the end of the function it calls the function

//put all functions at the top
const doStuff = () =>{
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello user";
    messageP.classList.toggle("special");
};

const hidepic = () => {
    document.getElementById("pic").classList.add("hidden");
    //for assignment .src = to change img source (must be in the same directory)
};

//const clickButton = document.getElementById("btn-click");
document.getElementById("btn-click").onclick = doStuff; //no parathesis 
document.getElementById("pic").onclick = hidepic;
