//Define a function called addItemCard(item) inside your in js/items.js
//Write the code so your function can create the same HTML structure of your item card representation replacing the item's information.


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

export function addItemCard(item) {
  const itemHTML = '<div class="card" style="width: 18rem;">\n' + 
  '<img src="' + item.img + ' " class="card-img-top" alt="...">\n' +
  ' <div class="card-body">\n' +
    ' <h5 class="card-title">\n' + item.title + '</h5>\n' +
    ' <h5 class="card-price">\n' + item.price + '</h5>\n'
    ' <p class="card-text">\n' + item.description + '</p>\n' +
    ' <a href="#" class="btn btn-primary">Add to cart</a>\n' +
  ' </div>\n' +
  '</div>\n';
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


/* sample of how to do it:

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div); 

*/


//this is the html we will  use for the function. Melissa will tweak it 
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Mug title</h5>
    <h5 class="card-price">Price</h5>
    <p class="card-text">Description meow</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div> */}



/* sample below

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div); 


*/