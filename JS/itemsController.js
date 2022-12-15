

//Modify the ItemsController so it loads the data from the local storage implementing a new function items.js

// TASK 10: In js/ItemsController.js, implement a new function called save that will POST the new item's data using the fetch function

//code from task below

function save(name, description, imageUrl, price){
  const data = { name, description, imageUrl, price };

  fetch('http://localhost:8080/item-form', {
  method: 'POST', // or 'PUT'
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
  console.log('Success:', data);
  })
  .catch((error) => {
  console.error('Error:', error);
  });
}






//stuff from before is below
export class ItemController {
    constructor(currentId = 0) {
      this.item = [];
      this.currentId = currentId;
    }
  
    // create addItem method
    
    addItem(name, description, imageUrl, price) {
      const item = {
        id: this.currentId++,
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
      
      };
  
      // push item to items array
      
      this.item.push(item);
    }
  }

  // let item = getElementBy

  /*

  localStorage.setItem("test", JSON.stringify(obj));


  function loadFromStorage(){
  const result = JSON.parse(localStorage.getItem("test"))
  console.log(result);
  console.log("omg did we do it?");
  }
  
  loadFromStorage();


*/









  
  // tests
    // const mugs = new itemController();
    // mugs.addProduct('catMug1', "it's a mug", 'imageUrl', 3, '11/22');
    // console.log(mugs.item);
    // mugs.addProduct('catMug2', "it's a mug", 'imageUrl', 5, '11/22');
    // console.log(mugs.item);