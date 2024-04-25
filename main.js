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

function makeArticle(type,price,taill,image){
    return {
        type,
        price,
        taill ,
        image,
        id: id(),
        } 

    } 
     




function generateId() {
    var counter = 0
    return function count() {
        var x = counter
        counter = counter + 1
        return x
    }
}
var id = generateId()
var article1=makeArticle("t-shirt",50,"XL","https://5.imimg.com/data5/SELLER/Default/2023/8/331638288/NK/CR/BA/187501904/nike-t-shirt.jpg")
var article2 = makeArticle("t-shirt",200,"L","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEzr9Xzp7EWnBUU7gh8Y2QxyVZeBstzJzdnP2P3Z_uw&s")
var article3 = makeArticle("t-shirt",50,"L","https://www.emp-online.fr/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc9ba387c/images/4/7/4/6/474609wa.jpg?sfrm=png")
var article4 = makeArticle("hoodie",100,"M","https://x-techwear.fr/wp-content/uploads/Hoodie-techwear-noir.jpg")
var article5 = makeArticle("caps",80,"standart","https://i.ebayimg.com/images/g/wngAAOSwFN1i6zzZ/s-l500.jpg")
var article6 = makeArticle("jacket",500,'M','https://pos.nvncdn.com/54d0ad-14353/ps/20221026_qXKBfg3QY9mK7jpcP8hc3Hxr.jpeg')
var article7 = makeArticle('jacket',150,"L","https://media.intersport.fr/is/image/intersportfr/0A853I_SKQ_FA?$produit_l$&$product_grey$")
var article8 = makeArticle('jacket',200,'M','https://images.asos-media.com/products/the-north-face-himalayan-parka-chaude-noir/203246179-3?$n_640w$&wid=513&fit=constrain')
var article9 = makeArticle('sac',90,'standard','https://m.media-amazon.com/images/I/61VrIt-WtiL._AC_UY900_.jpg')

var array1 = [article1,article2,article3,article4,article5,article6,article7,article8,article9]


function show(array1) { 
    $('.showw').empty()
    each(array1, function(element, i) {
        console.log(element); 
        $('.showw ').append(
            `<div>
              <div> <img id="${element.type}" src="${element.image}" />
              <div>
              <div>
              <h2>${element.type}</h2>
              <h3>${element.price}</h3>
              <h2>${element.taill}</h2>
             <button class='buybutton' onclick="buy('${element.type}',${i})" >buy</button>
             `
        );

    });
}


var filtered=function(){
    var data = $('.Search').val()
    var a =  filter(array1,function(elem){
return elem.type === data
    })
    console.log(a);
    show(a)


} 

$('#searchg').click(function(){
    filtered()
})



function buy(type, index) {
    var article = array1[index];
    array1.splice(index, 1);
    alert("your choice added in your box ")
    show(array1);
}


























