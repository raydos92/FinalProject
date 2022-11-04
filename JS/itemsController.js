// create ProductsController Class

class ProductsController {
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
  
  
  // const mugs = new ProductsController();
  // mugs.addProduct('catMug1', "it's a mug", 'IMG', 3, '11/22');
  // console.log(mugs.products);
  // mugs.addProduct('catMug2', "it's a mug", 'IMG', 5, '11/22');
  // console.log(mugs.products);