import React from "react";
import "./Home.css";
import Item from "./Item";

// dispaly all the grocery items for the specified department
function ItemsContainer(props) {
  // get the department name and its items from props
  const { department, itemsData } = props;

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__sectionHeader">{department}</div>
        <div className="home__row">
          {itemsData && itemsData.map(({ id, name, price, imageFile }) => (
            <Item
              id={id}
              name={name}
              price={price}
              image={'./images/' + imageFile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsContainer;