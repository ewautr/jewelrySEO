const baseLink = "https://www.polagratkowska.com/wp-json/wp/v2/jewelry/";
const params = new URLSearchParams(window.location.search);
const itemID = params.get("id");


function showItem(data) {
    document.querySelector(".heading-primary").textContent = data.title.rendered;

    document.querySelector(".price").innerHTML = "price:   " + data.price;

    document.querySelector(".material").textContent = "material:   " + data.material;

    document.querySelector(".kind").textContent = "kind:   " + data.kind;
    
    document.querySelector(".details__main-img").src = data.photo1.guid;

}

fetch(baseLink + itemID + "?_embed").then(e => e.json()).then(showItem);
