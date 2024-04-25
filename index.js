function makeArticle(type,price,taill,image){
    return {
        type,
        price,
        taill ,
        image,
        id: id()
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
var article1=makeArticle(type="robe",price=100,taill="standart",image="C:\Users\pc\Desktop\pair project\pair-project\boutique-16.jpg")
var article2 = makeArticle(type="robe",price=250,taill="standart",image="")
var article3 = makeArticle(type="robe",price=18,taill="standar",image="")
var article4 = makeArticle(type="t-shirt",price=45,taill="standar",image="")
var article5 = makeArticle(type="t-shirt",price=50,taill="standar",image=" ")
var article4 = makeArticle(type="t-shirt",price=45,taill="standar",image="")
var arrman = [article1,article2,article3,article4,article5]



$("#button".on("click",function(){
    $('search').append()
    
console.log(`${arrman[i]}`)
}))

function show(arrman) { 
$('.showw').empty()
each(arrman, function(element, i){
console.log(element)
 $('.showw ').append(`
<div> 
<img id="${element.type}" src="${element.image}" />
 <h2>${element.price}</h2>
<h2>${element.taill}</h2>

</div>`

    )})
} 
show(arrman)
function filter(array, predicate) {
 var acc = [];
 each(array, function (element, i) {
if (predicate(element, i)) {
acc.push(element);
}
});
return acc;
}
    
var filtered=function(arrman){
var holder= $('.Search').val()
return each(arrman,function(elem){
if(''===holder){
show(arrman)
}
 else if(elem.type===holder){
$('.showw ').append(`
<div> 
<img id="${elem.type}" src="${elem.image}" />
 <h2>${elem.price}</h2>
<h2>${elem.taill}</h2>
</div>`)
        
} 
    })
    }
    
    
   

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
      
    

