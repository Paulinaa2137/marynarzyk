// ------------------------------ BAZA DANNYCH --------------------------------------------
var discount = 8;
var consoleLogStyle = "         ";
var products = new Array();
products.push({ id: 1, name: "Juice", amount: 1, weight: "", price: "1" });
products.push({ id: 2, name: "Water", amount: 1, weight: "", price: "1" });
products.push({ id: 3, name: "Coffee", amount: 1, weight: "", price: "0" });
products.push({ id: 4, name: "Tea", amount: 1, weight: "", price: "2" });
products.push({ id: 5, name: "Cake", amount: 1, weight: "", price: "9" });
products.push({ id: 6, name: "Soup", amount: 1, weight: "", price: "9" });
products.push({ id: 7, name: "Rice", amount: 1, weight: "0.1", price: "55" });
products.push({
  id: 8,
  name: "Chicken",
  amount: 1,
  weight: "0.1",
  price: "55",
});
products.push({
  id: 9,
  name: "Silesian noodles",
  amount: 1,
  weight: "0.1",
  price: "55",
});
products.push({
  id: 10,
  name: "Potatoes",
  amount: 1,
  weight: "0.1",
  price: "55",
});
products.push({
  id: 11,
  name: "Dumplings",
  amount: 1,
  weight: "0.1",
  price: "55",
});
products.push({ id: 12, name: "Beans", amount: 1, weight: "0.1", price: "55" });
products.push({
  id: 13,
  name: "Cauliflower",
  amount: 1,
  weight: "0.1",
  price: "55",
});

// --------------------------------- START PROGRAMU -----------------------------------------
const prompt = require("prompt-sync")();
var shoppingCart = new Array();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let amountOfProducts = prompt("Ile produktów kupujemy?:");
let numberOfProduct = 0;

while (numberOfProduct < amountOfProducts) {
  let id = prompt("Które produkty kupujesz? (Wpisz id): ");
  let amount = 0;
  let weight = "";
  if (isCountedProduct(id)) {
    amount = prompt("Wpisz ilość: ");
    weight = "";
  } else {
    amount = 1;
    weight = prompt("Wpisz wage w kg: ");
  }
  shoppingCart.push({
    id: Number(id),
    amount: Number(amount),
    weight: weight,
  });
  numberOfProduct++;
}

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
printReceipt(shoppingCart);

// -------------------------------- POMOCNICZE FUNKCJE --------------------------------------
function printReceipt(shoppingCart) {
  var sum = 0;
  console.log("");
  console.log(consoleLogStyle + "---------------------------");
  console.log(consoleLogStyle + "-----PARAGON FISKALNY------");
  console.log(consoleLogStyle + "----> DATA " + getToday() + " <----");
  console.log(consoleLogStyle + "---------------------------");
  console.log("");

  for (product of shoppingCart) {
    for (priceProduct of products) {
      var price = productPriceCalculation(
        product.amount,
        product.weight,
        priceProduct.price
      );
      if (product.id === priceProduct.id) {
        console.log(
          consoleLogStyle +
            "---> " +
            priceProduct.name +
            " - " +
            price.toFixed(2) +
            " PLN"
        );
        sum += Number(price.toFixed(2));
      }
    }
  }

  console.log("");
  console.log(consoleLogStyle + "---------------------------");
  console.log(consoleLogStyle + "SUMA PLN: " + sum.toFixed(2) + " PLN");
  console.log(
    consoleLogStyle +
      "SUMA PO RABACIE (PLN): " +
      getPriceAfterDiscount(sum, discount).toFixed(2) +
      " PLN"
  );
  console.log("");
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log("");
}

function getToday() {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  const formattedToday = dd + "-" + mm + "-" + yyyy;

  return formattedToday;
}

function productPriceCalculation(amount, weight, price) {
  let productPrice = 0;

  if (weight === "") {
    productPrice = amount * Number(price);
  } else {
    productPrice = Number(weight) * Number(price);
  }

  return Math.round(productPrice * 100) / 100;
}

function getPriceAfterDiscount(price, discount) {
  let priceAfterDiscount = price - discount;

  if (priceAfterDiscount >= 0) {
    return priceAfterDiscount;
  } else {
    return price;
  }
}

function isCountedProduct(id) {
  let isCountedProduct = true;

  for (product of products) {
    if (product.id == id) {
      if (product.weight === "") {
        isCountedProduct = true;
      } else {
        isCountedProduct = false;
      }
    }
  }

  return isCountedProduct;
}
