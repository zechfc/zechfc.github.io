let associativeArray = {};
const img1 ="images/mountain-lake.jpg";
const img5 ="images/snow.jpg";
const img3 ="images/garden.jpg";
const img4 ="images/small-house.jpg";
const img2 ="images/golden.jpg";

const credit1= ("https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&amp;position=0&amp;from_view=keyword&amp;track=sph&amp;uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7" + "?Image by vecstock");
const credit2= ("https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" + "?Image by wirestock");
const credit3= ("https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" + "?Image by wirestock");
const credit4= ("https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" + "?Image by wirestock");
const credit5= ("https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" + "?Image by wirestock");


let imgs = [img1, img2, img3, img4, img5];
let credits = [credit1, credit2, credit3, credit4, credit5];

const display = () => {

    const container=document.getElementById("container");

    for (let i = 0; i < imgs.length; i++) {
        const div = document.createElement("div")

        const img = document.createElement("img");
        img.src = imgs[i];
      
        const text = credits[i].split("?")[1] + " " ; 
        

        const link = document.createElement("a"); 

        link.href = credits[i].split("?")[0]; 
        link.textContent = text;

        const credit = document.createElement("p");
        credit.textContent = "By Freepik";
        credit.style.display = "inline";

        const line = document.createElement("ul");
        const seg = document.createElement("li");

        div.appendChild(img); 
        seg.appendChild(link); 
        seg.appendChild(credit); 

        line.appendChild(seg); 
        //div.appendChild(line); 

        container.appendChild(div)
        container.appendChild(line)

        


        associativeArray[imgs[i]] = credits[i];
        div.classList.add("center2");
        line.classList.add("center3");


    }
    

}


const slide = () =>{
    //console.log("sliding");
    //find the child of slideshow that does not contain the class of hidden 
    const currentImage = document.querySelector("#slideshow :not(.hide)");
    let nextImage = currentImage.nextElementSibling;

    //on the last image
    if(nextImage == null){
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hide");
    nextImage.classList.remove("hide");
};

setInterval(slide, 2000);
display();