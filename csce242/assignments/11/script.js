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
        imageSection.append(h1);

        imageSection.append(image);


        section.classList.add("one");

        return section;
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
                detailsSection.append(this.paragraph("Growth Rate", Subject.type));
                detailsSection.append(this.paragraph("Height", Subject.height));
                detailsSection.append(this.paragraph("Lifespan", Subject.lifespan));
                detailsSection.append(this.desc(Subject.description));
                
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
    desc(info){
        const p = document.createElement("p");
        p.innerHTML = `${info}`;
        p.classList.add("description");
        return p;
    }

    };







const Trees = [];

Trees.push(new Tree("Oak Tree", "Fast Growth",20, 50,"oak.jpg","One of the most common trees in the USA, and a major source of wood."));
Trees.push(new Tree("Pine Tree", "Fast Growth",15, 150,"pine.jpg","Famous for their needle like leaves, child often enjoy throw and kicking around the trees pine cones."));
Trees.push(new Tree("Cherry Blossom Tree","Moderate Growth",20, 60, "x.jpg","Very popular tree due to its vibrate colors, there are many festivals with this tree as the main focus."));
Trees.push(new Tree("Redwood Tree","Slow Growth", 40, 200,"redwood.jpg","The redwood tree can leave for centuries and go grow to insane heights."));


let Subject = Trees[0];


Trees.forEach((tree) => {
    document.getElementById("tree-list").append(tree.section);


});

Subject.expandSection;



       


