//Define a function called addItemCard(item) inside your in js/items.js
//Write the code so your function can create the same HTML structure of your item card representation replacing the item's information.


function addItemCard(item) {
  //creating card div
  let newCardDiv = document.createElement("div");
  //styling
  newCardDiv.style.class = "card";
  newCardDiv.style.width = "18 rem";
  //adding card div to main div
  document.getElementById("list-items").appendChild(newCardDiv);

//creating inner div
// creating img


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
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Mug title</h5>
    <h5 class="card-price">Price</h5>
    <p class="card-text">Description meow</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>



/* sample below

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div); 


*/