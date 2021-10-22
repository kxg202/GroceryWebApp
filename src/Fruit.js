import React, {useState, useEffect} from "react";
import ItemsContainer from "./ItemsContainer";
import {GetItemsByDepartment} from "./DatabaseManager"

function Fruit() {
  const department = 'Fruit';

  // get the current items and state updater function from the local state
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    // retrieve the items from the database and store them in
    // the local state 
    GetItemsByDepartment(department,(items)=>{setItemsData(items)});
  }, [])

  return (
    <ItemsContainer
      department={department}
      itemsData={itemsData}
    />
  );
}

export default Fruit;