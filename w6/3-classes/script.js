var infoBlock = document.getElementById("infoBlock");

// Class with constructor
class Pet {
    constructor(name, color, favorite){
        this.name = name;
        this.color = color;
        this.favorite = favorite;
        this.petDiv = document.createElement("div");
        if(favorite){
            this.petDiv.style.backgroundColor = "pink";
        }
    }
    // Function inside Class
    writeName(){document.write("PetName: " + this.name + "<br>");}
    //alternative writing method
    writeColor(){document.write(`<br>Pets color is ${this.color}`)} 
    writeInformation(){
        this.petDiv.classList.add("petInfo");
        this.petDiv.innerHTML = "<h3> Pet: " + this.name + 
        "</h3><hr><br>The Color is: " + this.color;
        infoBlock.appendChild(this.petDiv);
    }
    getName(){return this.name;}
    getColor(){return this.color;}
}

/**
 * Cat Class Extending Class Pet
 */
class Cat extends Pet{
    constructor(name, color, favorite, age, sound){
        //Initializing the Parent Class 
        super(name, color, favorite);
        this.age = age;
        this.sound = sound;
    }
    writeAge(){
        document.write(`The Age is ${this.age}<br>`)
    }
    getSounds(){
        return this.sound;
    }
    writeAllInfo(){
        // Writing all basic Information than adding extra stuff
        this.writeInformation();
        this.petDiv.innerHTML += "<br>Age is " + this.age;
        this.petDiv.innerHTML += `<br><i> ${this.name} makes '${this.sound}'</i>`;
        this.petDiv.innerHTML += `<i class="fas fa-cat"></i>`;
    }
}

/**
 * Dog extends Pet
 */

 class Dog extends Pet{
     constructor(name, color, favorite, owner, street, city){
         super(name, color, favorite);
         this.owner = owner;
         this.street = street;
         this.city = city;
     }
     writeAllInfo(){
        // Writing all basic Information than adding extra stuff
        this.writeInformation();
        this.petDiv.innerHTML += "<br>Owner is<b> " + this.owner + "</b>";
        this.petDiv.innerHTML += `<p>${this.getAddress()}</p>`;
        this.petDiv.innerHTML += '<i class="fas fa-dog"></i>';
    }
    getOwner(){
        return this.owner;
    }
    getStreet(){
        return this.street;
    }
    getCity(){
        return this.city;
    }
    getAddress(){
        return `Street: ${this.street} <br> City: ${this.city}`
    }
 }

 const cat2 = new Cat("Pixie", "Grey", true, 2, "mrrreew");
 cat2.writeAllInfo();

const dog1 = new Dog("Phil", "brown, gold", true, "Philoise", "Messingstr. 12", "22142 Hamburg");
dog1.writeAllInfo();

const dog2 = new Dog("Meany", "dark", false, "Hela", "Underground 666", "The Void");
dog2.writeAllInfo();

const cat1 = new Cat("Lulu", "White and Black", true, 6, "Miau Miau");
cat1.writeAge();
cat1.writeAllInfo();
cat1.petDiv.innerHTML += "<br> This is my favorite Pet!";

var p = new Pet("Miau", "White", false);
p.writeName();
document.write(p.getName());
p.writeInformation();

const p2 = new Pet("Bobbek", "Orange", true);
p2.writeInformation();
p2.writeColor();

const p3 = new Pet("Horst", "brown", false);
p3.writeInformation();
const p4 = new Pet("Henning", "black", false);
p4.writeInformation();