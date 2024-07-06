let ArrProducts = [
    {
        id: 1,
        name: "HTML Tutorials",
        image: "/html.png",
        price: 20,
        rating: 5,
        description: "The product is so so work.",
    },
    {
        id: 2,
        name: "CSS Tutorials",
        image: "css.png",
        price: 15,
        rating: 4,
        description: "The product is so so work.",
    },
    {
        id: 3,
        name: "JavaScript Course",
        image: "js.png",
        price: 30,
        rating: 5.5,
        description: "The product is so so work.",
    },
    {
        id: 4,
        name: "Bootstrap Course",
        image: "bootstrap.png",
        price: 5,
        rating: 5,
        description: "The product is so so work.",
    },
    {
        id: 5,
        name: "jQuery Course",
        image: "/jquery.png",
        price: 25,
        rating: 3.5,
        description: "The product is so so work.",
    },
    {
        id: 6,
        name: "React.js Course",
        image: "/react.png",
        price: 50,
        rating: 5,
        description: "The product is so so work.",
    },
    {
        id: 7,
        name: "Django Course",
        image: "/django.png",
        price: 50,
        rating: 5.5,
        description: "The product is so so work.",
    },
    {
        id: 8,
        name: "Python course",
        image: "/python.png",
        price: 60,
        rating: 6,
        description: "The product is so so work.",
    },
    {
        id: 9,
        name: "PHP Course",
        image: "/php.png",
        price: 20,
        rating: 4.5,
        description: "The product is so so work.",
    },
    {
        id: 10,
        name: "Git Tutorials",
        image: "/git.png",
        price: 20,
        rating: 3.5,
        description: "The product is so so work.",
    },
    {
        id: 11,
        name: "Java Course",
        image: "/java.png",
        price: 60,
        rating: 3.5,
        description: "The product is so so work.",
    },
    {
        id: 12,
        name: "Mobile Application Course",
        image: "/and.png",
        price: 100,
        rating: 3.5,
        description: "The product is so so work.",
    },
];

const body = document.querySelector("body");
products = document.querySelector(".products");

let checkOutlist = []

function onInIt() {
    ArrProducts.forEach((item, key) => {
        //console.log(item);
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
          <img src="images/${item.image}" />
          <div class="name">${item.name}</div>
          <div class="price"><small>$</small>${item.price}</div>
          <div class="description"><b>${item.description}</b></div>
          <button class="btn" onclick="addToCart();"><i class="fa fa-cart-plus"></i>Add to Cart</button>
        `;

        products.appendChild(div);
    });
}
onInIt();

function addToCart() {}