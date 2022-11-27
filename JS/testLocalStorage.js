
/* Step 3: 
Store and read Items from the LocalStorage

In this step, we'll connect the ItemsController class and items.js with the local storage to persist your items data.
*/

/*
Modify the items.js adding a new function to save sample items data in the local storage. Use the following JSON structure as reference(make sure you save the data as a String).
*/



const sampleItems = [{
  'name': 'juice',
  'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
  'description': 'Orange and Apple juice fresh and delicious'
},
{
  'name': 'Tayto',
  'img': 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
  'description': 'Cheese & Onion Chips'
}];
localStorage.setItem("items", JSON.stringify(sampleItems));
