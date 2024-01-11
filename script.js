function showslider() {
  const body = document.querySelector("body");
  const navdesktop = document.querySelector("#nav--desktop");
  const hamburger_menu = document.querySelector(".hamburger-menu");
  body.style.backgroundColor = "#00000012";
  body.style.backdropFilter = "blur(10px)";
  hamburger_menu.style.display = "flex";
  navdesktop.style.position = "fixed";
}
function hideslider() {
  const body = document.querySelector("body");
  const navdesktop = document.querySelector("#nav--desktop");
  const hamburger_menu = document.querySelector(".hamburger-menu");
  hamburger_menu.style.display = "none";
  navdesktop.style.display = "flex";
  body.style.backgroundColor = "";
  navdesktop.style.position = "";
}

function activeCart() {
  const navcart = document.querySelector(".nav-cart");

  navcart.classList.toggle("active");
}

function disableCart() {
  const navcart = document.querySelector(".nav-cart");
  navcart.classList.add("active");
}

document.addEventListener("click", (e) => {
  const nav_cart = document.querySelector(".nav-cart");
  const cart = document.querySelector(".cart");
  if (!nav_cart.contains(e.target) && e.target !== cart) {
    nav_cart.classList.add("active");
  }
});
function plusNum() {
  let anciene = document.querySelector(".sum");
  var valeurActuelle = parseInt(anciene.innerHTML);
  var nouvelleValeur = valeurActuelle + 1;
  anciene.innerHTML = nouvelleValeur;
}
function minusNum() {
  let anciene = document.querySelector(".sum");
  var valeurActuelle = parseInt(anciene.innerHTML);
  if (valeurActuelle > 0) {
    var nouvelleValeur = valeurActuelle - 1;
    anciene.innerHTML = nouvelleValeur;
  }
}

function Update() {
  let count = document.querySelector(".sum");
  var NV = count.innerHTML;
  if (count.innerHTML > 0) {
    let numbercart = document.querySelector(".number-cart");
    numbercart.innerHTML = NV;

    const cartdetails = document.querySelector(".cart-details");

    cartdetails.innerHTML =
      ' <img src="/E-commerce-product-page/images/image-product-1-thumbnail.jpg" width="50px"><p>Fall Limites Edition Sneakers x <span class="priceSpan">$125.00</span>' +
      ' <span class="NumberSpan"></span></p><span class="priceTot">$</span>';
    var NumberSpan = document.querySelector(".NumberSpan");
    NumberSpan.innerHTML = NV;
    var PriceTot = document.querySelector(".priceTot");

    PriceTot.innerHTML = "$" + parseFloat(NV * 125.0).toFixed(2);
  }
}
