let slider = document.getElementById("myRange");

const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("up").classList.toggle("show");
    document.getElementById("down").classList.toggle("hide");

};

const swap = () => {
    let input = document.getElementById("exercise").value;

    if(input =="b"){
     //   console.log(input);

        document.getElementById("pic1").src="images/read.jpg";
    }
    else if(input == "c"){
       // console.log(input);

        document.getElementById("pic1").src="images/clown.jpg";
    }
    else if(input== "p"){
     //   console.log(input);

        document.getElementById("pic1").src="images/birthday.jpg";
    } 
    else if(input == "r"){
       // console.log(input);

        document.getElementById("pic1").src="images/rain.jpg";
    }
    else if(input == "s"){
      //  console.log(input);

        document.getElementById("pic1").src="images/shovel.jpg";
    }
    else if(input == "w"){
       // console.log(input);

        document.getElementById("pic1").src="images/work.jpg";
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

slider.oninput = () => {
    let slide = ((slider.value/100)*80);

    if(((slide<10) &(slide > 0))){
        document.getElementById("pic2").src="images/yoga1.jpg";
    }
    else if(((slide<10) &(slide > 0))){
        document.getElementById("pic2").src="images/yoga2.jpg";
    }
    else if(((slide<20) &(slide > 10))){
        document.getElementById("pic2").src="images/yoga2.jpg";
    }
    else if(((slide<30) &(slide > 20))){
        document.getElementById("pic2").src="images/yoga3.jpg";
    }
    else if(((slide<40) &(slide > 30))){
        document.getElementById("pic2").src="images/yoga4.jpg";
    }
    else if(((slide<50) &(slide > 40))){
        document.getElementById("pic2").src="images/yoga5.jpg";
    }
    else if(((slide<60) &(slide > 50))){
        document.getElementById("pic2").src="images/yoga6.jpg";
    }
    else if(((slide<70) &(slide > 60))){
        document.getElementById("pic2").src="images/yoga7.jpg";
    }
    else if(((slide<=80) &(slide > 70))){
        document.getElementById("pic2").src="images/yoga8.jpg";
    }
};

document.getElementById("exercise").onkeyup = swap;
document.getElementById("Ex1").onclick = Exercise;
document.getElementById("Ex2").onclick = Yoga;
document.getElementById("hamburger").onclick = showHideNav;



