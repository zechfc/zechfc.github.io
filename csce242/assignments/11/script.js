let i = 0;
let order = "x"; 


class Tree {
    constructor(title, type, height, lifespan,picture, description){
        this.title= title;
        this.type = type;
        this.height = height;
        this.lifespan = lifespan;
        this.picture = picture;
        this.description = description;

    }


    get section () {

        const section = document.createElement("section");
        section.classList.add("tree");

        const h1 = document.createElement("h1");
        h1.innerHTML = this.title;
        section.append(h1);


        const columns = document.createElement("section");
        columns.classList.add("columns");
        columns.id = i;
        ++i;
        console.log(i);
        section.append(columns);

        const imageSection = document.createElement("section");
        columns.append(imageSection);
        const image = document.createElement("img");
        image.src ="images/" + this.picture;
        imageSection.append(image);


        section.classList.add("one");

        return section;
    }
        paragraph(title, info){
            const p = document.createElement("p");
            return p;
        }



    get expandSection () {
            //https:www.w3schools.com/w3css model.asp


            
    
            document.getElementById("0").onclick = () => {
            order = "0"; 
            Subject = Trees[0];
            pop();
            };


            document.getElementById("1").onclick = () => {
            order = "1"; 
            Subject = Trees[1];
            pop();
            };


            document.getElementById("2").onclick = () => {
            order = "2"; 
            Subject = Trees[2];
            pop();
            };


            document.getElementById("3").onclick = () => {
            order = "3"; 
            Subject = Trees[3];
            pop();
            };


        const pop = () =>  {


                document.getElementById("dialog").style.display = "block";
         
                const detailsSection = document.getElementById("dialog-content");
                const imgSection = document.getElementById("dialog-img");
        
                if(detailsSection.innerHTML !== null)
                {
                    detailsSection.innerHTML = "";
                    imgSection.innerHTML = "";

                }
                const img = document.createElement("img");
        
                const h1 = document.createElement("h1");
        
                img.src ="images/" + Subject.picture;

                imgSection.append(img);
        
                console.log(Subject.title);
        
                h1.innerHTML = Subject.title;
                detailsSection.append(h1);
                detailsSection.append(this.paragraph("Growth Rate", this.type));
                detailsSection.append(this.paragraph("Height", this.height));
                detailsSection.append(this.paragraph("Lifespan", this.lifespan));
                detailsSection.append(this.description);
                
            };
            

        

            document.getElementById("dialog-close").onclick = () => {
                document.getElementById("dialog").style.display = "none";
            };
       

        
       
    };
    paragraph(title, info){
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }

    };







const Trees = [];
Trees.push(new Tree("Oak Tree", "Fast Growth",20, 50,"oak.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
Trees.push(new Tree("Pine Tree", "Fast Growth",15, 150,"pine.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
Trees.push(new Tree("Cherry Blossom Tree","Moderate Growth",20, 60, "cherry.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
Trees.push(new Tree("Redwood Tree","Slow Growth", 40, 200,"redwood.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));



let Subject = Trees[0];


Trees.forEach((tree) => {
    document.getElementById("tree-list").append(tree.section);


});

Subject.expandSection;



       


