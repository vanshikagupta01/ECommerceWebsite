
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

const items = document.getElementById("items");
const cartCount = document.getElementById("cartCount");
const sub = document.getElementById("sub");
const ship = document.getElementById("ship");
const total = document.getElementById("total");

const search = document.getElementById("q");
const cards = document.querySelectorAll(".card");
const categories = document.querySelectorAll(".catgry");
const sort = document.getElementById("sort");
const placeOrder = document.getElementById("place_order");

let cart = [];

// Open and close cart
function openCartBox() {
    drawer.classList.add("open");
    overlay.classList.add("open");
}

function closeCartBox() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
}

openCart.onclick = openCartBox;
closeCart.onclick = closeCartBox;
overlay.onclick = closeCartBox;

// Add products to cart
const buttons = document.querySelectorAll(".add");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        let card = this.closest(".card");

        let name = card.querySelector("h3").textContent;
        let price = parseFloat(card.querySelector(".price").textContent.replace("₹", ""));
        let image = card.querySelector("img").src;

        cart.push({ name, price, image });

        updateCart();
        openCartBox();
    };
}

// Display cart and calculate total
function updateCart() {
    items.innerHTML = "";
    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {
        let p = cart[i];
        subtotal += p.price;

        items.innerHTML += `
            <div class="cart-item">
                <img src="${p.image}">
                <div>
                    <strong>${p.name}</strong>
                    <p>₹${p.price}</p>
                </div>
                <button onclick="removeItem(${i})">✕</button>
            </div>
        `;
    }

    if (cart.length === 0) {
        items.innerHTML = "<p>Your cart is empty.</p>";
    }

    let delivery = 50;

    if (subtotal >= 300 || subtotal === 0) {
        delivery = 0;
    }

    cartCount.textContent = cart.length;
    sub.textContent = "₹" + subtotal.toFixed(2);
    ship.textContent = delivery === 0 ? "Free" : "₹" + delivery;
    total.textContent = "₹" + (subtotal + delivery).toFixed(2);
}

// Remove product
function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}

// Search products
search.oninput = function() {
    let text = search.value.toLowerCase();

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].querySelector("h3").textContent.toLowerCase();
        let category = cards[i].querySelector(".optn").textContent.toLowerCase();

        cards[i].style.display =
            name.includes(text) || category.includes(text) ? "" : "none";
    }
};

// Filter by category
for (let i = 0; i < categories.length; i++) {
    categories[i].onclick = function() {
        let category = this.textContent.toLowerCase();

        for (let j = 0; j < cards.length; j++) {
            let name = cards[j].querySelector(".optn").textContent.toLowerCase();

            cards[j].style.display =
                category === "all" || name === category ? "" : "none";
        }
    };
}

// Sort products
sort.onchange = function() {
    let grid = document.getElementById("grid");
    let list = Array.from(cards);

    function price(card) {
        return parseFloat(card.querySelector(".price").textContent.replace("₹", ""));
    }

    if (sort.value === "low") {
        list.sort((a, b) => price(a) - price(b));
    } else if (sort.value === "high") {
        list.sort((a, b) => price(b) - price(a));
    } else if (sort.value === "rate") {
        list.sort((a, b) => {
            let rateA = parseFloat(a.querySelector("p").textContent.replace("★", ""));
            let rateB = parseFloat(b.querySelector("p").textContent.replace("★", ""));
            return rateB - rateA;
        });
    }

    for (let i = 0; i < list.length; i++) {
        grid.appendChild(list[i]);
    }
};

// Place order
placeOrder.onclick = function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart = [];
        updateCart();
        closeCartBox();
    }
};

updateCart();
