import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  //   console.log(products);
  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getproducts();
    }
  };

  const handleSearch = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      setProducts(result);
    } else {
      getproducts();
    }
  };
  return (
    <div >
      <div className="search-cont">
        <input type="text" placeholder="type to search...." onChange={handleSearch} />
      </div>
      <div className="product-cont">
      <ul className="product-heading">
        <li>S.I. No.</li>
        <li>name</li>
        <li>price</li>
        <li>Category</li>
        <li>Company</li>
        <li>
          Operations
        </li>
      </ul>

      {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <>
              <ul key={item._id} className="product-heading">
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                  <button><Link   to={"updateproduct/" + item._id}>update</Link></button>
                </li>
              </ul>
            </>
          );
        })
      ) : (
        <h1>Result Not Found...</h1>
      )}
      </div>
    </div>
  );
}

export default Product;
