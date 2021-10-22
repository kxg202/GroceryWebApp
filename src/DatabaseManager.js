import { firebase } from "./firebase"

// get all the items for the specified department from the database, 
// and pass it to the specified callback function
function GetItemsByDepartment(department, callbackFunc) {
  let items = [];

  // get the items collection from the database
  let itemsRef = firebase.database().ref("items").orderByChild("department").equalTo(department);
  itemsRef.on('value', function (snapshot) {

    // loop through each item in the collection
    snapshot.forEach(function (docSnapshot) {
      let data = docSnapshot.val();

      // insert the item in the items array
      items.push({ id: data.id, name: data.name, price: data.price, imageFile: data.imageFile })
    });

    // pass the items back to the caller by calling the callback function
    callbackFunc(items);
  })
}

export { GetItemsByDepartment };