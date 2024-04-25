function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

function makeArticle(type, price, taill, image) {
  return {
    type,
    price,
    taill,
    image,
    id: id(),
  };
}

function generateId() {
  var counter = 0;
  return function count() {
    var x = counter;
    counter = counter + 1;
    return x;
  };
}
var id = generateId();
var articl1 = makeArticle(
  "t-shirt",
  50,
  "XL",
  "https://5.imimg.com/data5/SELLER/Default/2023/8/331638288/NK/CR/BA/187501904/nike-t-shirt.jpg"
);
var articl2 = makeArticle(
  "t-shirt",
  200,
  "L",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEzr9Xzp7EWnBUU7gh8Y2QxyVZeBstzJzdnP2P3Z_uw&s"
);
var articl3 = makeArticle(
  "t-shirt",
  50,
  "L",
  "https://www.emp-online.fr/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc9ba387c/images/4/7/4/6/474609wa.jpg?sfrm=png"
);
var articl4 = makeArticle(
  "hoodie",
  100,
  "M",
  "https://x-techwear.fr/wp-content/uploads/Hoodie-techwear-noir.jpg"
);
var articl5 = makeArticle(
  "caps",
  80,
  "standart",
  "https://i.ebayimg.com/images/g/wngAAOSwFN1i6zzZ/s-l500.jpg"
);
var articl6 = makeArticle(
  "jacket",
  500,
  "M",
  "https://pos.nvncdn.com/54d0ad-14353/ps/20221026_qXKBfg3QY9mK7jpcP8hc3Hxr.jpeg"
);
var articl7 = makeArticle(
  "jacket",
  150,
  "L",
  "https://media.intersport.fr/is/image/intersportfr/0A853I_SKQ_FA?$produit_l$&$product_grey$"
);
var articl8 = makeArticle(
  "jacket",
  200,
  "M",
  "https://images.asos-media.com/products/the-north-face-himalayan-parka-chaude-noir/203246179-3?$n_640w$&wid=513&fit=constrain"
);
var articl9 = makeArticle(
  "sac",
  90,
  "standard",
  "https://m.media-amazon.com/images/I/61VrIt-WtiL._AC_UY900_.jpg"
);

var array1 = [
  articl1,
  articl2,
  articl3,
  articl4,
  articl5,
  articl6,
  articl7,
  articl8,
  articl9,
];

function show(array1) {
  $(".showw").empty();
  $(".showw").append(
    ' <div> <input class="Search" type="text" placeholder="Search Item" /> <button id="searchg" type="text">Search</button></div> '
  );
  each(array1, function (element, i) {
    console.log(element);

    $(".showw ").append(
      `<div>
            <div class="item">
            <img id="${element.type}" src="${element.image}" />
            <div class="item-info">
              <h2>${element.type}</h2>
              <h3>${element.price}$</h3>
              <h6>Size:${element.taill}</h6>
              <div class="rating">
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

              <button class='buybutton' onclick="buy('${element.type}',${i})">Buy</button>
              </div>
            </div>
          </div>
             </div>
             `
    );
  });
}

var filtered = function () {
  var searchTerm = $(".Search").val().toLowerCase(); 
  var filteredArticles = filter(array1, function (elem) {
    
    return elem.type.toLowerCase().includes(searchTerm); 
  });
  show(filteredArticles);
};
$(document).ready(function() {
  $("#searchg").on('click', filtered);
});

function buy(type, index) {
  var article = array1[index];
  array1.splice(index, 1);
  alert("your choice added in your box ");
  show(array1);
}
