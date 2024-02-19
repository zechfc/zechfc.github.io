
let ball;
let ballPos = 1;
let check = true;
const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("up").classList.toggle("show");
    document.getElementById("down").classList.toggle("hide");

};
const bounceBall = (e) => {

    const countP = document.getElementById("count-p");

    if (e.target.innerHTML.toLowerCase() == "start"){
        e.target.innerHTML="Stop";

        bounce = setInterval(()=>{
            const root = document.querySelector(":root");

            if(check == false )
            {
                
                    ballPos += -5;
                    root.style.setProperty("--ball-height", ballPos + "px")
            
                    if(ballPos <= 10)
                    {                   
                        check = true;
                        console.log(ballPos +" "+ check);
    
                    }
            }
            else
            {
                ballPos += 5;
                root.style.setProperty("--ball-height", ballPos + "px")
                if(ballPos >= 440)
                {                   
                    check = false;

                }
            }
           

        }, 75);
    }
    else{
        e.target.innerHTML = "Start";
        clearInterval(bounce);

    }
    
};

const Exercise = () => {
    //console.log("Ex1");

    document.getElementById("exercise1").classList.remove("hide");
    document.getElementById("exercise1").classList.add("show");
    document.getElementById("exercise2").classList.remove("show");
    document.getElementById("exercise2").classList.add("hide");

};

const Yoga = () => {
    document.getElementById("exercise2").classList.remove("hide");
    document.getElementById("exercise2").classList.add("show");
    document.getElementById("exercise1").classList.remove("show");
    document.getElementById("exercise1").classList.add("hide");


};

let i=2;
const showDetails = (e) => {
    e.target.parentElement.querySelector('p').innerHTML = e.target.getAttribute("rel");



};

document.getElementById("btn-ball").onclick = bounceBall;
document.getElementById("Ex1").onclick = Exercise;
document.getElementById("Ex2").onclick = Yoga;
document.querySelectorAll("#yoga img").forEach((img)=>{
    //console.log(li);
    img.onclick = showDetails;
});
document.getElementById("hamburger").onclick = showHideNav;
