<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quick Store</title>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Sans:wght@400;500;700&display=swap" 
    rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="bar">
        <div class="logo">Quick<span>Store</span></div>
        <input id="q" class="search" type="search" placeholder="Search shoes, clothes, watches, toys…">
        <button class="icon-btn" id="openCart">Cart <span class="badge" id="cartCount">0</span></button>
      </div>
    </header>
    <main class="wrap">
      <section class="hero">
        <div> 
          <h1>Everything you need, in one basket.</h1>
          <p>Fashion, tech, home, food, toys and more from independent makers. Cash on Delivery • Lowest Prices • 7 Days Easy Return</p>
          <a class="btn" href="#shop">Start shopping</a>
         
        </div>
        <div class="stack">
          <div class="tile"><img src="https://m.media-amazon.com/images/I/71bkjOHqZ0L._AC_UL320_.jpg"></div>
          <div class="tile"><img src="https://m.media-amazon.com/images/I/71CzM6hiu6L._AC_UY218_.jpg"></div>
          <div class="tile"><img src="https://m.media-amazon.com/images/I/61Vk-Npjs-L._AC_UL320_.jpg"></div>
          <div class="tile"><img src="https://m.media-amazon.com/images/I/51KPFz4tPOL._AC_UL320_.jpg"></div>
        </div>
      </section>
      <section id="shop">
        <div class="toolbar">
          <button class="catgry">All</button>
          <button class="catgry">Fashion</button>
          <button class="catgry">Tech</button>
          <button class="catgry">Home</button>
          <button class="catgry">Toys</button>
          <button class="catgry">Sports</button>
          <button class="catgry">Beauty</button>
          <button class="catgry">Books</button>
          <button class="catgry">Bags</button>
          <select id="sort">
            <option value="pop">Most popular</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="rate">Top rated</option>
          </select>
        </div>
        <p class="count" id="count">12 Products</p>
        <div class="grid" id="grid">
          <div class="card" id="card1">
            <img src="https://m.media-amazon.com/images/I/71f81uWoaLL._SY500_.jpg">
            <span class="optn">Fashion</span>
            <h3>Red Tape Men's Sneakers</h3>
            <p>★ 4.7</p>
            <div class="row">
              <span class="price">₹989</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card2">
            <img src="https://m.media-amazon.com/images/I/71-05lf9pNL._AC_UL320_.jpg">
            <span class="optn">Home</span>
            <h3>Buddha Idol Statue Showpiece</h3>
            <p>★ 4.2</p>
            <div class="row">
              <span class="price">₹374</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card3">
            <img src="https://m.media-amazon.com/images/I/61+G3n153hL._AC_UL320_.jpg">
            <span class="optn">Toys</span>
            <h3>Mirada Standing Dinosaur</h3>
            <p>★ 4.5</p>
            <div class="row">
              <span class="price">₹739</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card4">
            <img src="https://m.media-amazon.com/images/I/61dj32WdrxL._SL1500_.jpg">
            <span class="optn">Tech</span>
            <h3>Realme Earbuds</h3>
            <p>★ 4.2</p>
            <div class="row">
              <span class="price">₹2139</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card5">
            <img src="https://m.media-amazon.com/images/I/719xkgdzLRS._AC_UL320_.jpg">
            <span class="optn">Home</span>
            <h3>Elephant Family Statue Showpiece</h3>
            <p>★ 4.3</p>
            <div class="row">
              <span class="price">₹340</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card6">
            <img
              src="https://rukminim1.flixcart.com/image/1358/1358/xif0q/backpack/e/e/z/-watermarked-original-imahmyzzpnvtqvft.jpeg?q=90">
            <span class="optn">Bags</span>
            <h3>Safari Ashper Plus Backpack</h3>
            <p>★ 4.4</p>
            <div class="row">
              <span class="price">₹899</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card7">
            <img src="https://m.media-amazon.com/images/I/71-aLaiY8WL._SL1500_.jpg">
            <span class="optn">Sports</span>
            <h3>Non Slip Yoga Mat</h3>
            <p>★ 4.2</p>
            <div class="row">
              <span class="price">₹1299</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card8">
            <img src="https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg">
            <span class="optn">Books</span>
            <h3>The Psychology Of Money</h3>
            <p>★ 4.6</p>
            <div class="row">
              <span class="price">₹289</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card9">
            <img src="https://m.media-amazon.com/images/I/516DS6NdsqL._SL1500_.jpg">
            <span class="optn">Beauty</span>
            <h3>Swiss Beauty Concealer</h3>
            <p>★ 4.2</p>
            <div class="row">
              <span class="price">₹217</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card10">
            <img src="https://m.media-amazon.com/images/I/41eQyJq6jFL._SY606_.jpg">
            <span class="optn">Fashion</span>
            <h3>Casual Wear Jacket</h3>
            <p>★ 3.9</p>
            <div class="row">
              <span class="price">₹699</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card11">
            <img src="https://m.media-amazon.com/images/I/71ComclLq2L._AC_UL320_.jpg">
            <span class="optn">Home</span>
            <h3>Foldable Study Desk</h3>
            <p>★ 4.1</p>
            <div class="row">
              <span class="price">₹399</span>
              <button class="add">Add</button>
            </div>
          </div>
          <div class="card" id="card12">
            <img src="https://m.media-amazon.com/images/I/51ykbSj-eoL._AC_UL320_.jpg">
            <span class="optn">Tech</span>
            <h3>Titan Watch</h3>
            <p>★ 4.4</p>
            <div class="row">
              <span class="price">₹1995</span>
              <button class="add">Add</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div id="overlay"></div>
    <aside id="drawer">
      <button id="closeCart">✕</button>
      <h2>Your cart</h2>
      <div id="items"></div>
      <div class="foot">
        <div class="line">Subtotal <span id="sub">₹0.00</span> </div>
        <div class="line">Delivery <span id="ship">Free</span> </div>
        <div class="line total">Total <span id="total">₹0.00</span> </div>
        <button id="place_order">Place order</button>
      </div>
    </aside>
    <footer>© 2026 QuickStore. Own your look. Elegance never goes out of style.</footer>
    <script src="sj.js"></script>
  </body>
</html>
