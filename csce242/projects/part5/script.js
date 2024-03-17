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
            
            if(item.menu == "dawn" && item.type == "Drink" && item.feature == true)
            {
                FeaturedDay(item);
            }
            else if(item.menu == "dawn" && item.type == "Drink" && item.feature == false){
                drinkDay(item);
            }
            else if(item.menu == "dawn" && item.type == "Food" && item.feature == true){
                FeaturedDayFood(item);
            }
            else if(item.menu == "dawn" && item.type == "Food" && item.feature == false){
                FoodDay(item);
            }
            else if(item.menu == "dusk" && item.type == "Drink" && item.feature == true)
            {
                FeaturedNite(item);
            }
            else if(item.menu == "dusk" && item.type == "Drink" && item.feature == false){
                drinkNite(item);
            }
            else if(item.menu == "dusk" && item.type == "Food" && item.feature == true){
                FeaturedNiteFood(item);
            }
            else if(item.menu == "dusk" && item.type == "Food" && item.feature == false){
                FoodNite(item);
            }
        });
    
    };

    

const FeaturedDay = async (item) => {

    
    const allMenusSection = document.getElementById("dawnmenu");
    const drinksContainer = document.createElement("div");



    drinksContainer.classList.add("two");
    drinksContainer.classList.add("drinksContainer");



    
        const featuredItem = document.createElement("table");
        featuredItem.classList.add("top");


        const featuredHeader = document.createElement("tr");
        const featuredContent = document.createElement("tr");

        const featuredDrink = document.createElement("th");
        const featuredName = document.createElement("th");

        const featuredPic = document.createElement("td");
        const featuredDesc = document.createElement("td");
        const featuredIng = document.createElement("h3");
        const featuredPrice = document.createElement("h3");

        const featuredList = document.createElement("ul");
        const featuredPriceList = document.createElement("div");

        const featuredDetail = document.createElement("p");
        const space = document.createElement("p")
        const featuredImg = document.createElement("img");

        const button = document.createElement("button");
        button.classList.add("order");
        button.innerHTML= "Order";
        
        const p= (prefix, info) => {
            const p= document.createElement("p");
            p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
            return p;
        };


        featuredItem.classList.add("drinks");
        featuredItem.classList.add("top");

        featuredDrink.innerHTML = "Drink of the Week"
        featuredName.innerHTML= item.name;

        featuredHeader.append(featuredDrink);
        featuredHeader.append(featuredName);

        featuredImg.src = item.img;
        featuredIng.innerHTML = "Ingredients";
        featuredPrice.innerHTML = "Price";
        featuredDetail.innerHTML = item.description

        featuredPic.append(featuredImg);

        featuredPic.append(featuredImg);
        featuredPic.append(space);
        featuredPic.append(button);

        item.ingredients.forEach((ingredient) => {
           
            const liIng = document.createElement("li");
            liIng.innerHTML = ingredient;
            featuredList.append(liIng);
        });

        let i=0;
            let size="";

            if(item.amt[0] == null){

                item.prices.forEach((price) => {       


                if(i==0){
    
                    size="Large";

                }
                if(i==1){
                    size="Medium";
                }
                if(i==2){
                    size="Small";
                }

                featuredPriceList.append(p(size, item.prices[i]));
                i++;
            });}

           
               
           

            featuredDesc.append(featuredDetail);
            featuredDesc.append(featuredIng);
            featuredDesc.append(featuredList);
            featuredDesc.append(featuredPrice);
            featuredDesc.append(featuredPriceList);


            featuredContent.append(featuredPic)
            featuredContent.append(featuredDesc);
            
            featuredPriceList.classList.add("bullets");


            featuredItem.append(featuredHeader);
            featuredItem.append(featuredContent);


        drinksContainer.append(featuredItem);
        drinksContainer.setAttribute("id","drinkCont");

    };

    const drinkDay = async (item) => {

    
        const allMenusSection = document.getElementById("dawnmenu");
        const drinksContainer = document.getElementById("drinkCont");
        
        const logo = document.createElement("div");
        logo.setAttribute("id","center");

    

        logo.classList.add("three");
    
        const logoImg = document.createElement("img");
        logoImg.src =  "images/sun.png";

        logo.append(logoImg);
    


    
            const drinkItem = document.createElement("table");
            drinkItem.classList.add("top");
    
    
            const drinkHeader = document.createElement("tr");
            const drinkContent = document.createElement("tr");
    
            const drinkDrink = document.createElement("th");
            const drinkName = document.createElement("th");
    
            const drinkPic = document.createElement("td");
            const space = document.createElement("p");
            const drinkDesc = document.createElement("td");
            const drinkIng = document.createElement("h3");
            const drinkPrice = document.createElement("h3");
    
            const drinkList = document.createElement("ul");
            const drinkPriceList = document.createElement("div");
    
            const drinkDetail = document.createElement("p");
            const drinkImg = document.createElement("img");
    
            const button = document.createElement("button");

            button.classList.add("order");
            button.innerHTML= "Order";
            
            const p= (prefix, info) => {
                const p= document.createElement("p");
                p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                return p;
            };
    
    
            drinkItem.classList.add("drinks");
            drinkItem.classList.add("top");
    
            drinkDrink.innerHTML = "Beverage Menu"
            drinkName.innerHTML= item.name;
    
            drinkHeader.append(drinkDrink);
            drinkHeader.append(drinkName);
    
            drinkImg.src = item.img;
            drinkIng.innerHTML = "Ingredients";
            drinkPrice.innerHTML = "Price";
            drinkDetail.innerHTML = item.description
    
            drinkPic.append(drinkImg);
            drinkPic.append(space);
            drinkPic.append(button);

    
            item.ingredients.forEach((ingredient) => {
               
                const liIng = document.createElement("li");
                liIng.innerHTML = ingredient;
                drinkList.append(liIng);
            });
            

            let i=0;
            let size="";

            if(item.amt[0] == null){

                item.prices.forEach((price) => {       


                if(i==0){
    
                    size="Large";

                }
                if(i==1){
                    size="Medium";
                }
                if(i==2){
                    size="Small";
                }

                drinkPriceList.append(p(size, item.prices[i]));
                i++;
            });}

            
            
           
    
                drinkDesc.append(drinkDetail);

                drinkDesc.append(drinkIng);
                drinkDesc.append(drinkList);
                drinkDesc.append(drinkPrice);
                drinkDesc.append(drinkPriceList);
    
    
                drinkContent.append(drinkPic)
                drinkContent.append(drinkDesc);
                
                drinkPriceList.classList.add("bullets");
    
    
                drinkItem.append(drinkHeader);
                drinkItem.append(drinkContent);
    
    
    
        };
    
        const FeaturedDayFood = async (item) => {

    
            const allMenusSection = document.getElementById("dawnmenu");
            const foodContainer = document.createElement("div");
        
        
        
            foodContainer.classList.add("two");
            foodContainer.classList.add("foodContainer");
    
        
            
                const featuredItem = document.createElement("table");
                featuredItem.classList.add("top");
                featuredItem.classList.add("food");
        
        
                const featuredHeader = document.createElement("tr");
                const featuredContent = document.createElement("tr");
        
                const featuredDrink = document.createElement("th");
                const featuredName = document.createElement("th");
                const space = document.createElement("p")
        
                const featuredPic = document.createElement("td");
                const featuredDesc = document.createElement("td");
                const featuredIng = document.createElement("h3");
                const featuredPrice = document.createElement("h3");
        
                const featuredList = document.createElement("ul");
                const featuredPriceList = document.createElement("div");
        
                const featuredDetail = document.createElement("p");
                const featuredImg = document.createElement("img");
        
                const button = document.createElement("button");
                button.classList.add("order");
                button.innerHTML= "Order";

                const p= (prefix, info) => {
                    const p= document.createElement("p");
                    p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                    return p;
                };
        
        
                featuredItem.classList.add("food");
                featuredItem.classList.add("top");
        
                featuredDrink.innerHTML = "Food of the Week"
                featuredName.innerHTML= item.name;
        
                featuredHeader.append(featuredDrink);
                featuredHeader.append(featuredName);
        
                featuredImg.src = item.img;
                featuredIng.innerHTML = "Ingredients";
                featuredPrice.innerHTML = "Price";
                featuredDetail.innerHTML = item.description
                
                featuredPic.append(featuredImg);

                featuredPic.append(featuredImg);
                featuredPic.append(space);
                featuredPic.append(button);
        
        
                item.ingredients.forEach((ingredient) => {
                   
                    const liIng = document.createElement("li");
                    liIng.innerHTML = ingredient;
                    featuredList.append(liIng);
                });
        
                let i=0;
                let size="";

                item.amt.forEach((amount) => {

                     

                            console.log(i)
                            featuredPriceList.append(p(`${amount} serving amt`, `$${item.prices[i]}`));
                            i ++;


                        });
        
                    featuredDesc.append(featuredDetail);

                    featuredDesc.append(featuredIng);
                    featuredDesc.append(featuredList);
                    featuredDesc.append(featuredPrice);
                    featuredDesc.append(featuredPriceList);
        
        
                    featuredContent.append(featuredPic)
                    featuredContent.append(featuredDesc);
                    
                    featuredPriceList.classList.add("bullets");
        
        
                    featuredItem.append(featuredHeader);
                    featuredItem.append(featuredContent);
        
        
                foodContainer.append(featuredItem);
                foodContainer.setAttribute("id","foodCont");
        
            };
        
            const FoodDay = async (item) => {
        
            
                const allMenusSection = document.getElementById("dawnmenu");
                const foodContainer = document.getElementById("foodCont");
              
            
                    const foodItem = document.createElement("table");
                    foodItem.classList.add("top");
                    foodItem.classList.add("food");
            
            
                    const foodHeader = document.createElement("tr");
                    const foodContent = document.createElement("tr");
            
                    const foodDrink = document.createElement("th");
                    const foodName = document.createElement("th");
            
                    const foodPic = document.createElement("td");
                    const foodDesc = document.createElement("td");
                    const foodIng = document.createElement("h3");
                    const foodPrice = document.createElement("h3");
            
                    const foodList = document.createElement("ul");
                    const foodPriceList = document.createElement("div");
            
                    const foodDetail = document.createElement("p");
                    const space = document.createElement("p");

                    const foodImg = document.createElement("img");
            
                    const button = document.createElement("button");
                    button.classList.add("order");
                    button.innerHTML= "Order";

                    const p = (prefix, info) => {
                        const p = document.createElement("p");
                        p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                        return p;
                    };
            
            
                    foodItem.classList.add("food");
                    foodItem.classList.add("top");
            
                    foodDrink.innerHTML = "Food Menu"
                    foodName.innerHTML= item.name;
            
                    foodHeader.append(foodDrink);
                    foodHeader.append(foodName);
            
                    foodImg.src = item.img;
                    foodIng.innerHTML = "Ingredients";
                    foodPrice.innerHTML = "Price";
                    foodDetail.innerHTML = item.description
            
                    foodPic.append(foodImg);

                    foodPic.append(foodImg);
                    foodPic.append(space);
                    foodPic.append(button);
            
                    item.ingredients.forEach((ingredient) => {
                       
                        const liIng = document.createElement("li");
                        liIng.innerHTML = ingredient;
                        foodList.append(liIng);
                    });
            
                    let i=0;
                    let size="";

                    item.amt.forEach((amount) => {

                          
                       
                                console.log(i)
                                foodPriceList.append(p(`${amount} serving amt`, `$${item.prices[i]}`));
                                i ++;


                            });            
                        foodDesc.append(foodDetail);
                        foodDesc.append(foodIng);
                        foodDesc.append(foodList);
                        foodDesc.append(foodPrice);
                        foodDesc.append(foodPriceList);
            
            
                        foodContent.append(foodPic)
                        foodContent.append(foodDesc);            
            
                        foodItem.append(foodHeader);
                        foodItem.append(foodContent);
            
            
            
                };
        
      
                
            
            const FeaturedNite = async (item) => {
            
                
                const allMenusSection = document.getElementById("duskmenu");
                const drinksContainer = document.createElement("div");
            
                allMenusSection.append(drinksContainer);
            
            
                drinksContainer.classList.add("two");
                drinksContainer.classList.add("drinksContainer");
            
               
                
                    const featuredItem = document.createElement("table");
                    featuredItem.classList.add("top");
            
            
                    const featuredHeader = document.createElement("tr");
                    const featuredContent = document.createElement("tr");
            
                    const featuredDrink = document.createElement("th");
                    const featuredName = document.createElement("th");
            
                    const featuredPic = document.createElement("td");
                    const featuredDesc = document.createElement("td");
                    const featuredIng = document.createElement("h3");
                    const featuredPrice = document.createElement("h3");
            
                    const featuredList = document.createElement("ul");
                    const featuredPriceList = document.createElement("div");
            
                    const featuredDetail = document.createElement("p");
                    const space = document.createElement("p")
                    const featuredImg = document.createElement("img");
            
                    const button = document.createElement("button");
                    button.classList.add("order");
                    button.innerHTML= "Order";
                    
                    const p= (prefix, info) => {
                        const p= document.createElement("p");
                        p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                        return p;
                    };
            
            
                    featuredItem.classList.add("drinks");
                    featuredItem.classList.add("top");
            
                    featuredDrink.innerHTML = "Drink of the Week"
                    featuredName.innerHTML= item.name;
            
                    featuredHeader.append(featuredDrink);
                    featuredHeader.append(featuredName);
            
                    featuredImg.src = item.img;
                    featuredIng.innerHTML = "Ingredients";
                    featuredPrice.innerHTML = "Price";
                    featuredDetail.innerHTML = item.description
            
                    featuredPic.append(featuredImg);
            
                    featuredPic.append(featuredImg);
                    featuredPic.append(space);
                    featuredPic.append(button);
            
                    item.ingredients.forEach((ingredient) => {
                       
                        const liIng = document.createElement("li");
                        liIng.innerHTML = ingredient;
                        featuredList.append(liIng);
                    });
            
                    let i=0;
                        let size="";
            
                        if(item.amt[0] == null){
            
                            item.prices.forEach((price) => {       
            
            
                            if(i==0){
                
                                size="Large";
            
                            }
                            if(i==1){
                                size="Medium";
                            }
                            if(i==2){
                                size="Small";
                            }
            
                            featuredPriceList.append(p(size, item.prices[i]));
                            i++;
                        });}
            
                       
                           
                       
            
                        featuredDesc.append(featuredDetail);
                        featuredDesc.append(featuredIng);
                        featuredDesc.append(featuredList);
                        featuredDesc.append(featuredPrice);
                        featuredDesc.append(featuredPriceList);
            
            
                        featuredContent.append(featuredPic)
                        featuredContent.append(featuredDesc);
                        
                        featuredPriceList.classList.add("bullets");
            
            
                        featuredItem.append(featuredHeader);
                        featuredItem.append(featuredContent);
            
            
                    drinksContainer.append(featuredItem);
                    drinksContainer.setAttribute("id","drinkCont");
            
                };
            
                const drinkNite = async (item) => {
            
                
                    const allMenusSection = document.getElementById("duskmenu");
                    const drinksContainer = document.getElementById("drinkCont");
                    
                    const logo = document.createElement("div");
                    logo.setAttribute("id","center");
            
                
            
                    logo.classList.add("three");
                
                    const logoImg = document.createElement("img");
                    logoImg.src =  "images/moon.png";
            
                    logo.append(logoImg);
                    allMenusSection.append(logo);
                
            
            
                
                        const drinkItem = document.createElement("table");
                        drinkItem.classList.add("top");
                
                
                        const drinkHeader = document.createElement("tr");
                        const drinkContent = document.createElement("tr");
                
                        const drinkDrink = document.createElement("th");
                        const drinkName = document.createElement("th");
                
                        const drinkPic = document.createElement("td");
                        const space = document.createElement("p");
                        const drinkDesc = document.createElement("td");
                        const drinkIng = document.createElement("h3");
                        const drinkPrice = document.createElement("h3");
                
                        const drinkList = document.createElement("ul");
                        const drinkPriceList = document.createElement("div");
                
                        const drinkDetail = document.createElement("p");
                        const drinkImg = document.createElement("img");
                
                        const button = document.createElement("button");
            
                        button.classList.add("order");
                        button.innerHTML= "Order";
                        
                        const p= (prefix, info) => {
                            const p= document.createElement("p");
                            p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                            return p;
                        };
                
                
                        drinkItem.classList.add("drinks");
                        drinkItem.classList.add("top");
                
                        drinkDrink.innerHTML = "Beverage Menu"
                        drinkName.innerHTML= item.name;
                
                        drinkHeader.append(drinkDrink);
                        drinkHeader.append(drinkName);
                
                        drinkImg.src = item.img;
                        drinkIng.innerHTML = "Ingredients";
                        drinkPrice.innerHTML = "Price";
                        drinkDetail.innerHTML = item.description
                
                        drinkPic.append(drinkImg);
                        drinkPic.append(space);
                        drinkPic.append(button);
            
                
                        item.ingredients.forEach((ingredient) => {
                           
                            const liIng = document.createElement("li");
                            liIng.innerHTML = ingredient;
                            drinkList.append(liIng);
                        });
                        
            
                        let i=0;
                        let size="";
            
                        if(item.amt[0] == null){
            
                            item.prices.forEach((price) => {       
            
            
                            if(i==0){
                
                                size="Large";
            
                            }
                            if(i==1){
                                size="Medium";
                            }
                            if(i==2){
                                size="Small";
                            }
            
                            drinkPriceList.append(p(size, item.prices[i]));
                            i++;
                        });}
            
                        
                        
                       
                
                            drinkDesc.append(drinkDetail);
            
                            drinkDesc.append(drinkIng);
                            drinkDesc.append(drinkList);
                            drinkDesc.append(drinkPrice);
                            drinkDesc.append(drinkPriceList);
                
                
                            drinkContent.append(drinkPic)
                            drinkContent.append(drinkDesc);
                            
                            drinkPriceList.classList.add("bullets");
                
                
                            drinkItem.append(drinkHeader);
                            drinkItem.append(drinkContent);
                
                
                        drinksContainer.append(drinkItem);
                
                    };
                
                    const FeaturedNiteFood = async (item) => {
            
                
                        const allMenusSection = document.getElementById("duskmenu");
                        const foodContainer = document.createElement("div");
                    
                        allMenusSection.append(foodContainer);
                    
                    
                        foodContainer.classList.add("two");
                        foodContainer.classList.add("foodContainer");
                
                    
                        
                            const featuredItem = document.createElement("table");
                            featuredItem.classList.add("top");
                            featuredItem.classList.add("food");
                    
                    
                            const featuredHeader = document.createElement("tr");
                            const featuredContent = document.createElement("tr");
                    
                            const featuredDrink = document.createElement("th");
                            const featuredName = document.createElement("th");
                            const space = document.createElement("p")
                    
                            const featuredPic = document.createElement("td");
                            const featuredDesc = document.createElement("td");
                            const featuredIng = document.createElement("h3");
                            const featuredPrice = document.createElement("h3");
                    
                            const featuredList = document.createElement("ul");
                            const featuredPriceList = document.createElement("div");
                    
                            const featuredDetail = document.createElement("p");
                            const featuredImg = document.createElement("img");
                    
                            const button = document.createElement("button");
                            button.classList.add("order");
                            button.innerHTML= "Order";
            
                            const p= (prefix, info) => {
                                const p= document.createElement("p");
                                p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                                return p;
                            };
                    
                    
                            featuredItem.classList.add("food");
                            featuredItem.classList.add("top");
                    
                            featuredDrink.innerHTML = "Food of the Week"
                            featuredName.innerHTML= item.name;
                    
                            featuredHeader.append(featuredDrink);
                            featuredHeader.append(featuredName);
                    
                            featuredImg.src = item.img;
                            featuredIng.innerHTML = "Ingredients";
                            featuredPrice.innerHTML = "Price";
                            featuredDetail.innerHTML = item.description
                            
                            featuredPic.append(featuredImg);
            
                            featuredPic.append(featuredImg);
                            featuredPic.append(space);
                            featuredPic.append(button);
                    
                    
                            item.ingredients.forEach((ingredient) => {
                               
                                const liIng = document.createElement("li");
                                liIng.innerHTML = ingredient;
                                featuredList.append(liIng);
                            });
                    
                            let i=0;
                            let size="";
            
                            item.amt.forEach((amount) => {
            
                                 
            
                                        console.log(i)
                                        featuredPriceList.append(p(`${amount} serving amt`, `$${item.prices[i]}`));
                                        i ++;
            
            
                                    });
                    
                                featuredDesc.append(featuredDetail);
            
                                featuredDesc.append(featuredIng);
                                featuredDesc.append(featuredList);
                                featuredDesc.append(featuredPrice);
                                featuredDesc.append(featuredPriceList);
                    
                    
                                featuredContent.append(featuredPic)
                                featuredContent.append(featuredDesc);
                                
                                featuredPriceList.classList.add("bullets");
                    
                    
                                featuredItem.append(featuredHeader);
                                featuredItem.append(featuredContent);
                    
                    
                            foodContainer.append(featuredItem);
                            foodContainer.setAttribute("id","foodCont");
                    
                        };
                    
                        const FoodNite = async (item) => {
                    
                        
                            const allMenusSection = document.getElementById("duskmenu");
                            const foodContainer = document.getElementById("foodCont");
                          
                        
                                const foodItem = document.createElement("table");
                                foodItem.classList.add("top");
                                foodItem.classList.add("food");
                        
                        
                                const foodHeader = document.createElement("tr");
                                const foodContent = document.createElement("tr");
                        
                                const foodDrink = document.createElement("th");
                                const foodName = document.createElement("th");
                        
                                const foodPic = document.createElement("td");
                                const foodDesc = document.createElement("td");
                                const foodIng = document.createElement("h3");
                                const foodPrice = document.createElement("h3");
                        
                                const foodList = document.createElement("ul");
                                const foodPriceList = document.createElement("div");
                        
                                const foodDetail = document.createElement("p");
                                const space = document.createElement("p");
            
                                const foodImg = document.createElement("img");
                        
                                const button = document.createElement("button");
                                button.classList.add("order");
                                button.innerHTML= "Order";
            
                                const p = (prefix, info) => {
                                    const p = document.createElement("p");
                                    p.innerHTML = `<strong>${prefix}</strong> -  ${info}`;
                                    return p;
                                };
                        
                        
                                foodItem.classList.add("food");
                                foodItem.classList.add("top");
                        
                                foodDrink.innerHTML = "Food Menu"
                                foodName.innerHTML= item.name;
                        
                                foodHeader.append(foodDrink);
                                foodHeader.append(foodName);
                        
                                foodImg.src = item.img;
                                foodIng.innerHTML = "Ingredients";
                                foodPrice.innerHTML = "Price";
                                foodDetail.innerHTML = item.description
                        
                                foodPic.append(foodImg);
            
                                foodPic.append(foodImg);
                                foodPic.append(space);
                                foodPic.append(button);
                        
                                item.ingredients.forEach((ingredient) => {
                                   
                                    const liIng = document.createElement("li");
                                    liIng.innerHTML = ingredient;
                                    foodList.append(liIng);
                                });
                        
                                let i=0;
                                let size="";
            
                                item.amt.forEach((amount) => {
            
                                      
                                   
                                            console.log(i)
                                            foodPriceList.append(p(`${amount} serving amt`, `$${item.prices[i]}`));
                                            i ++;
            
            
                                        });            
                                    foodDesc.append(foodDetail);
                                    foodDesc.append(foodIng);
                                    foodDesc.append(foodList);
                                    foodDesc.append(foodPrice);
                                    foodDesc.append(foodPriceList);
                        
                        
                                    foodContent.append(foodPic)
                                    foodContent.append(foodDesc);            
                        
                                    foodItem.append(foodHeader);
                                    foodItem.append(foodContent);
                        
                        
                                foodContainer.append(foodItem);
                        
                            };
        



//document.getElementById("signin").onclick = signin;
//document.getElementById("cart-btn").onclick = cart;
//document.getElementById("pic1").onmouseenter = fade;
//document.getElementById("pic1").onmouseleave = show;

//document.getElementById("pic2").onmouseenter = fade2;
//document.getElementById("pic2").onmouseleave = show2;

loadMenu();


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


// document.getElementById("forward-arrow-drink").onclick = slideForwardDrink;
// document.getElementById("backward-arrow-drink").onclick = slideBackwardDrink;


// document.getElementById("forward-arrow-food").onclick = slideForwardFood;
// document.getElementById("backward-arrow-food").onclick = slideBackwardFood;

// document.querySelectorAll("#thumbs img").forEach((img, index) => {
//     img.onclick = () => {
//         slide(document.querySelector(`#preview :nth-child(${index+1})`));
//     };
// });