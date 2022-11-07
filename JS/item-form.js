
//Make sure a new ItemsController is initialized near the top of the item-form.js file.

const mugs = new ProductsController();

//In item-form.js, add an event listener to the New Item form, listening to the submit event. If there is already an event //listener used for validation, use that one.
let submit = document.getElementsByType("button");
console.log(submit);



//When the submit event fires, if validation of the form is successful, use the values of each input in the form to call the itemsController's addItem method.

addProduct(title, description, img, price, createdAt)


//Note: Make sure to prevent the default action of the form!
https://wesbos.com/javascript/05-events/prevent-default-and-form-events

//Update the items list in local storage so the data is also reflected on the items.html.

//Clear the values from each form input, ready for the next submission.

//Test out your code by adding some items using the New Item form, and checking the ItemsController instance's items array for the items.

