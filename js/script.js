let myBaseLink = "https://www.polagratkowska.com/wp-json/wp/v2/";
const template = document.querySelector("#myJewellery").content;
const parent = document.querySelector("main");
const navCatsK = document.querySelector(".navCatsK");
const navCatsM = document.querySelector(".navCatsM");
const urlParams = new URLSearchParams(window.location.search);
const catID = urlParams.get("cat");


//BASIC DISPLAY OF DATA

function loadAll() {
    fetch(myBaseLink + "jewelry?_embed&per_page=100").then(e => e.json()).then(show);
}


function show(data) {
    data.forEach(object => {
        console.log(object);

        //cloning the template
        const clone = template.cloneNode(true);

        //populating it
        const name = clone.querySelector(".name");
        name.textContent = object.title.rendered;

        const price = clone.querySelector(".price");
        price.textContent = "// " + object.price + "dkk";

        const kind = clone.querySelector(".kind");
        kind.textContent = "// " + object.kind;

        const material = clone.querySelector(".material");
        material.textContent = "// " + object.material;

        const img1 = clone.querySelector(".img1");
        img1.src = object.photo1.guid;

        const a = clone.querySelector(".btn__link");
        a.href = "details.html?id=" + object.id;

        //appending to DOM
        parent.appendChild(clone) // puts the tamplate in my <main>
    })
}



//CREATING CATEGORIES



function loadCatsK() {
    fetch(myBaseLink + "categories?per_page=100").then(e => e.json()).then(makeCatK);
}

function makeCatK(data) {
    //console.log(data);
    data.forEach(cat => {
        if (cat.parent == 10) {
            console.log(cat.parent)
            const newA = document.createElement("a");
            newA.classList.add("navItemK");
            newA.textContent = cat.name;
            newA.href = "?cat=" + cat.id;
            navCatsK.appendChild(newA);
        }
    })
}

loadCatsK();


//MAKING CATEGORIES LOAD BY DISPLAY

function loadJewelryByCat(cat) {
    fetch(myBaseLink + "jewelry?categories=" + cat + "&_embed").then(e => e.json()).then(show);
}


//CALLING FUNCTION THAT LOADS ITEMS BY CATEGORIES IF CLICKED

if (catID) {
    loadJewelryByCat(catID);
} else {
    loadAll();
};

