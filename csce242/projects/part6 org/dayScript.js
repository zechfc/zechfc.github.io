const FeaturedDay = async (item) => {

    
    const allMenusSection = document.getElementById("dawnmenu");
    const drinksContainer = document.createElement("div");
    const foodContainer = document.createElement("div");

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

const drinkDay = async (item) => {


const allMenusSection = document.getElementById("dawnmenu");
const drinksContainer = document.getElementById("drinkCont");

const logo = document.createElement("div");
logo.setAttribute("id","center");



logo.classList.add("three");

const logoImg = document.createElement("img");
logoImg.src =  "images/sun.png";


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

const FeaturedDayFood = async (item) => {


    const allMenusSection = document.getElementById("dawnmenu");
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

    const FoodDay = async (item) => {
            
                
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

        