

export function addItemCard(item) {
  const itemHTML = '<div class="card" style="width: 18rem;">\n' + 
  '<img src="' + item.img + ' " class="card-img-top" alt="...">\n' +
  ' <div class="card-body">\n' +
    ' <h5 class="card-title">\n' + item.title + '</h5>\n' +
    ' <h5 class="card-price">\n' + item.price + '</h5>\n' 
   + ' <p class="card-text">\n' + item.description + '</p>\n' +
    ' <a href="#" class="btn btn-primary">Add to cart</a>\n' +
  ' </div>\n' +
  '</div>\n';
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


/*
 const obj = {
   id: 44,
   title: 'mug1',
   description: 'this is a mug',
   img: 'IMG',
   price: 6,
   createdAt: '11/22',
 }

const test = addItemCard(obj);
console.log(test);





localStorage.setItem("test", JSON.stringify(obj));


function loadFromStorage(){
const result = JSON.parse(localStorage.getItem("test"))
console.log(result);
console.log("omg did we do it?");
}

loadFromStorage();
console.log(obj.description)








*/










/* sample below

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div); 


*/







// +++++++++++++++++++++++++++++++ 
// all this below is trying  the "append child" way
//+++++++++++++++++++++++++++++++



// function addItemCard(item) {
//   //creating card div
//   let newCardDiv = document.createElement("div");
//   //styling
//   newCardDiv.style.class = "card";
//   newCardDiv.style.width = "18 rem";


// //creating inner div
// // creating img
//   let img = document.createElement("img");
//   img.style.class = "card-img-top";
//   img.style.setAttribute('src', item.img);
//   newCardDiv.appendChild(img);

//   //adding card div to main div
//   document.getElementById("list-items").appendChild(newCardDiv);

// }