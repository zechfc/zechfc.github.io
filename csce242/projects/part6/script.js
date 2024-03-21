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

const slideForwardFood = () => {
    //at the end of the list of images
    if(getCurrentImageFood().nextElementSibling == null)
    {
        slideFood(document.querySelector("#preview img"));
    }
    else
    {
        slideFood(getCurrentImageFood().nextElementSibling);
    }
};

const slideBackwardFood = () => {
    if(getCurrentImageFood().previousElementSibling == null)
    {
        slideFood(document.querySelector("#preview :last-child"));
    }
    else
    {
        slideFood(getCurrentImageFood().previousElementSibling);
    }};

const slideForwardDrink = () => {
    //at the end of the list of images
    if(getCurrentImageDrink().nextElementSibling == null)
    {
        slideDrink(document.querySelector("#preview img"));
    }
    else
    {
        slideDrink(getCurrentImageDrink().nextElementSibling);
    }
};

const slideBackwardDrink = () => {
    if(getCurrentImageFood().previousElementSibling == null)
    {
        slideDrink(document.querySelector("#preview :last-child"));
    }
    else
    {
        slideDrink(getCurrentImageFood().previousElementSibling);
    }};    

const slideDrink = (nextImage) => {
    getCurrentImage().classList.add("hide");
    nextImage.classList.remove("hide");
};

const slideFood = (nextImage) => {
    getCurrentImage().classList.add("hide");
    nextImage.classList.remove("hide");
};


const getCurrentImageDrink = () => {
    return document.querySelector("#preview :not(.hide)")
};

const getCurrentImageFood = () => {
    return document.querySelector("#preview :not(.hide)")
};

const signin = () =>{
    const root = document.querySelector(":root");
    document.getElementById("signin-pop").classList.remove("hide");

    
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
//https://api.openbrewerydb.org/breweries

const getItems = async () => {
        const url = "menu.json";
        try {
          const response = await fetch(url);
          return response.json();
        } catch (error) {
          console.log(error);
        }
      };

      const loadMenu = async () => {
        const items = await getItems();
    
        items.forEach((item) => {
            if (item.menu == "dawn") {
                if (item.type == "Drink" && item.feature == true) {
                    FeaturedDay(item);
                } else if (item.type == "Drink" && item.feature == false) {
                    drinkDay(item);
                } else if (item.type == "Food" && item.feature == true) {
                    FeaturedDayFood(item);
                } else if (item.type == "Food" && item.feature == false) {
                    FoodDay(item);
                }
            } 
            if (item.menu == "dusk") {
                if (item.type == "Drink" && item.feature == true) {
                    FeaturedNite(item);
                } else if (item.type == "Drink" && item.feature === false) {
                    drinkNite(item);
                } else if (item.type == "Food" && item.feature === true) {
                    FeaturedNiteFood(item);
                } 
                else if (item.type == "Food" && item.feature === false) {
                    FoodNite(item);
                }
            }
        });
    };
  
                    

const submitForm = (e) => {
    e.preventDefault(); //don't refresh the page
    console.log("xxx");
    const result = document.getElementById("result");

    result.innerHTML = "";

    const Container = document.getElementById("side");

    const form = e.target
    const name = form.elements["item-name"].value;
    const desc = form.elements["item-description"].value;
    const img = form.elements["imgupload"].value;
    const recipie = form.elements["recipieupload"].value;


    const type = getRadioValue("Type");
    const ing1 = form.elements["ing-1"].value;
    const ing2 = form.elements["ing-2"].value;
    const ing3 = form.elements["ing-3"].value;
    const ing4 = form.elements["ing-4"].value;
    const ing5 = form.elements["ing-5"].value;
    const ing6 = form.elements["ing-6"].value;


    //console.log(name + " "+ desc + " "+ img + " "+ type + " "+ ing1);

    const list = document.createElement("ul");
    const nameli = document.createElement("li");
    const descli = document.createElement("li");
    const imgli = document.createElement("li");
    const typeli = document.createElement("li");
    const recipieli = document.createElement("li");

    const ing1li = document.createElement("li");
    const ing2li = document.createElement("li");
    const ing3li = document.createElement("li");
    const ing4li = document.createElement("li");
    const ing5li = document.createElement("li");
    const ing6li = document.createElement("li");


    nameli.innerHTML = "name:" + name;
    descli.innerHTML = "desc:" + desc;
    imgli.innerHTML = "img:" + img;
    recipieli.innerHTML = "recipie:" + recipie;

    typeli.innerHTML = "type:" + type;
    ing1li.innerHTML = "ing1:" + ing1;
    ing2li.innerHTML = "ing2:" + ing2;
    ing3li.innerHTML = "ing3:" + ing3;
    ing4li.innerHTML = "ing4:" + ing4;
    ing5li.innerHTML = "ing5:" + ing5;
    ing6li.innerHTML = "ing6:" + ing6;


    list.append(nameli);
    list.append(descli);
    list.append(imgli);
    list.append(typeli);
    list.append(recipieli);
    list.append(ing1li);
    list.append(ing2li);
    list.append(ing3li);
    list.append(ing4li);
    list.append(ing5li);
    list.append(ing6li);

    
    // let i=1;
    // let ingredients= "ing"+1+"li";
   // console.log(ingredients);
   
    // while(ingredients != null)
    // {
    //     list.append(ingredients);
    //     i++

    // }

    Container.append(list);
    result.innerHTML = "Form successfully sent";

};


const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";

};


//Side panel credit ->https://codepen.io/dcode-software/pen/OJxEWWz
document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
    if(document.getElementById("side-panel-button").innerHTML=="Close Panel")
    {
        document.getElementById("side-panel-button").innerHTML="Recommend A Day Menu Item"
    }
    else{
        document.getElementById("side-panel-button").innerHTML="Close Panel"

    }

  });



//document.getElementById("signin").onclick = signin;
//document.getElementById("cart-btn").onclick = cart;


loadMenu();
document.getElementById("items").onsubmit = submitForm;
document.getElementById("contact-form").onsubmit = showEmailResult;

if(document.getElementById("btn-day"))
{
    document.getElementById("btn-day").onclick = pickmeup;
};

if(document.querySelector("order"))
{
    document.querySelector("order").onclick = Order;
};

if(document.getElementById("hamburger"))
{
    document.getElementById("hamburger").onclick = showHideNav;
};

if(document.getElementById("btn-night"))
{
    document.getElementById("btn-night").onclick = putmedown;
};

if(document.getElementById("btn-attributions"))
{
    document.getElementById("btn-attributions").onclick = attributions;
};




// document.getElementById("forward-arrow-drink").onclick = slideForwardDrink;
// document.getElementById("backward-arrow-drink").onclick = slideBackwardDrink;


// document.getElementById("forward-arrow-food").onclick = slideForwardFood;
// document.getElementById("backward-arrow-food").onclick = slideBackwardFood;

// document.querySelectorAll("#thumbs img").forEach((img, index) => {
//     img.onclick = () => {
//         slide(document.querySelector(`#preview :nth-child(${index+1})`));
//     };
// });