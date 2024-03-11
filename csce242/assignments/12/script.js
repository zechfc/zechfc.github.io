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
        const allBsSection = document.getElementById("houses-section");
        const houseSection = document.createElement("section");
        allBsSection.append(houseSection);

        houseSection.classList.add("brewery");

        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.innerHTML = house.name;
        houseSection.append(h3);

        
        houseSection.append(this.paragraph("Size:", house.size));
        houseSection.append(this.paragraph("Bedrooms:", house.bedroom));
        houseSection.append(this.paragraph("Bathrooms:", house.bathrooms));

        const p = document.createElement("p");
        p.innerHTML = house.features;
        houseSection.append(p);

        house.floor_plans.forEach((floor_plan) => {

        h3.innerHTML = floor_plan.name;
        houseSection.append(h3);

        img.src = brewery.website_url;
        brewerySection.append(a);
        });
     


      
    });

    paragraph(title, info){
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }

};

showHouses();