// create ProductsController Class


//Modify the ItemsController so it loads the data from the local storage implementing a new function items.js




export class ProductsController {
    constructor(currentId = 0) {
      this.products = [];
      this.currentId = currentId;
    }
  
    // create addProduct method
    
    addProduct(title, description, img, price, createdAt) {
      const item = {
        id: this.currentId++,
        title: title,
        description: description,
        img: img,
        price: price,
        createdAt: createdAt,
      };
  
      // push item to items array
      
      this.products.push(item);
    }
  }

  let item = getElementBy

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
    // const mugs = new ProductsController();
    // mugs.addProduct('catMug1', "it's a mug", 'IMG', 3, '11/22');
    // console.log(mugs.products);
    // mugs.addProduct('catMug2', "it's a mug", 'IMG', 5, '11/22');
    // console.log(mugs.products);