//https://api.openbrewerydb.org/breweries

const getHouses = async () => {
    try {
        return (await fetch("https://portiaportia.github.io/json/house-plans.json")).json();
    }catch (error) {
        console.log(error);
    }

};



const showHouses = async () => {
    const houses = await getHouses();

    houses.forEach((house) => {
        const allHousesSection = document.getElementById("houses-section");
        const houseSection = document.createElement("section");
        allHousesSection.append(houseSection);

        houseSection.classList.add("house");

        const h2 = document.createElement("h2");
        const img = document.createElement("img");
       
        img.src =  "https://portiaportia.github.io/json/images/house-plans/"+house.main_image;
        h2.innerHTML = house.name;

        const paragraph = (title, info, extra) => {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${title}:</strong> ${info} ${extra}`;
            return p;
        }

        const title = document.createElement("section");
        title.append(h2);
        title.classList.add("columns");
        title.classList.add("title");



        const content = document.createElement("section");
        const imageHouse = document.createElement("section");
        const desc = document.createElement("section");

        imageHouse.append(img);
        imageHouse.classList.add("one");
        imageHouse.classList.add("house-img");

        content.append(imageHouse);


        desc.append(paragraph("Size", house.size, " Square Feet"));
        desc.append(paragraph("Bedrooms", house.bedrooms, ""));
        desc.append(paragraph("Bathrooms", house.bathrooms, ""));
        const p = document.createElement("p");
       /*
        const temp = house.features;
        console.log(temp);
        temp.replace(",", "*")
        console.log(temp);
        */
        p.innerHTML = house.features;
        desc.append(p);
        desc.classList.add("three");
        desc.classList.add("desc");

        content.append(desc);
        content.classList.add("columns");


        const bluePrints = document.createElement("section");
        bluePrints.classList.add("columns");



        houseSection.append(title);
        houseSection.append(content);
        
       

        house.floor_plans.forEach((floor_plan) => {

        const h2B = document.createElement("h2");
        const imgB = document.createElement("img");
        const print = document.createElement("section");


        h2B.innerHTML = floor_plan.name;
        imgB.src =  "https://portiaportia.github.io/json/images/house-plans/"+floor_plan.image;


        print.append(h2B);
        print.append(imgB);
       
        print.classList.add("one");

        bluePrints.append(print);
        bluePrints.classList.add("blueprints");



        });

        houseSection.append(bluePrints);

     

      
    });

   

};

showHouses();