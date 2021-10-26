import React, { useState } from "react";
import Data1 from "./data1";
import Data2 from "./data2";
import Data3 from "./data3";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CardGallery = () => {
  let newArrData = [...Data1, ...Data2, ...Data3];

  const [items, setItems] = useState(newArrData);
  const [pItems, setPItems] = useState([]);

  const filterProduct = (e) => {
    let a = e.target.value;
    let b = parseFloat(a);
    if (b > 1) {
      let arr = pItems.filter((x) => {
        return x.price >= b && x.price <= b + 100;
      });
      setItems(arr);
    } else {
      setItems(newArrData);
    }
  };

  const filterItems = (x) => {
    let c = x.target.value;
    if (c == "lunch" || c == "dinner" || c == "breakfast") {
      console.log("Working");
      const updatedItems = newArrData.filter((curElem) => {
        return curElem.category === c;
      });
      setItems(updatedItems);
      setPItems(updatedItems);
    } else {
      setItems(newArrData);
    }
  };

  return (
    <>
      <br />
      <form>
        
        <select onChange={(x) => filterItems(x)}>
          <option value="select ">Select Your Meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        
        
        <label>Select Your Meal First</label>
        <select onChange={(e) => filterProduct(e)}>
          <option value={0}>Price</option>
          <option value={399}>From Rs 400 to 500</option>
          <option value={500}>From Rs 500 to 600</option>
          <option value={600}>From Rs 600 to 700</option>
          <option value={700}>From Rs 700 to 800</option>
          <option value={800}>From Rs 800 to 900</option>
        </select>
        
      </form>
      <br />

      <h1 className="menu">Our Menu</h1>
      <div className="data-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((Celem) => {
                const { name, image, category, price, description } = Celem;
                return <Card values={Celem} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardGallery;
