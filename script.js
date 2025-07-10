const mode = document.getElementById("header_img");
const Body = document.body;
const cart = document.getElementById("header_img2")
const cartContainer = document.getElementById("cart_container");
const shake = document.getElementById("space_cat_header")
const orderButton = document.getElementById("order_button");
const audio = new Audio("sound.mp3");

const imgChange = () => {
    if(mode.src.includes("icons/paper-cup.png")) {
        mode.src = "icons/coffee-cup.png";
        Body.style.backgroundColor = "rgb(48, 38, 25)";
    } else {
        mode.src = "icons/paper-cup.png";
        Body.style.backgroundColor = "rgb(254, 223, 184)";
    }
}

mode.onclick = imgChange;

const cartChange = () => {
    if(cart.src.includes("icons/shopping-bag.png")) {
        cart.src = "icons/shopping-bag2.png";
        cartContainer.style.display = 'block';
    } else {
        cart.src = "icons/shopping-bag.png";
        cartContainer.style.display = 'none';
    }
}

cart.onclick = cartChange;

orderButton.addEventListener("click", ()=>{
    audio.play();
})


// shake.onclick = 
