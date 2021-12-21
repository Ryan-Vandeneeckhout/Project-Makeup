import axios from "axios";
import React, { useState } from "react";
import Product from "./ProductItemCreator";
import { ProductCatgory } from "./NavigationItems";

function API() {

  const [ProductItem, setProductItem] = useState([]);

  function APICallFunction() {
    const branding = document.querySelector("#brand option:checked").value;
    const ProductTypeSelected = document.querySelector("#productType option:checked").value;
    const ProductCatgorySelected = document.querySelector("#productCategory option:checked").value;
    axios({
      method: "GET",
      url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
      responseType: "json",
      params: {
        brand: `${branding}`,
        product_type: `${ProductTypeSelected}`,
        product_category: `${ProductCatgorySelected}`,
     
      },
    }).then((response) => {
      setProductItem(response.data);
    });
  }

  return (
    <div className="APISection">
      <h2>Endless Demands Products</h2>
      <div className="contentAPISectionContainer">
        <nav className="NavAids">        
        <form> 
        <label className="sr-only">Select a brand</label>
          <select name="brand" id="brand" onChange={APICallFunction} className="customSelect brandSelect">         
            <option className="brandTypeClass" value="" id="brandHeader">Brand: </option>
            <option className="brandTypeClass" value="annabelle" id="brand4">Annabelle</option>
            <option className="brandTypeClass" value="benefit" id="brand5">Benefit</option>
            <option className="brandTypeClass" value="boosh" id="brand6">Boosh</option>
          </select>

        <label className="sr-only">Select a Product Type Blush, Bronzer, Lipstick</label>
        <select name="productType" id="productType" onChange={APICallFunction} className="customSelect productSelect">
          <option className="productTypeClass" value="">Product Type: </option>
          <option className = "productTypeClass" value="lipstick" id="lipstick">Lipstick</option>
          <option className = "productTypeClass" value="lip_liner" id="lip_liner">Lip Liner</option>
          <option className = "productTypeClass" value="foundation" id="foundation">Foundation</option>
          <option className = "productTypeClass" value="eyeshadow" id="eyeshadow">Eyeshadow</option>
          <option className = "productTypeClass" value="eyeliner" id="eyeliner">Eyeliner</option>
          <option className = "productTypeClass" value="bronzer" id="bronzer">Bronzer</option>
          <option className = "productTypeClass" value="blush" id="blush">Blush</option>
        </select>

        <label className="sr-only">Product Catgory</label>
        <select name="productCategory" id="productCategory"  onChange={APICallFunction} className="customSelect productSelect">
            {ProductCatgory.map((item, index) => {
              return (
                <option className={item.classNameProductCategory} value={item.valueProductCategory} key={index}>{item.nameProductCategory}
              </option>
              );
            })}
        </select>
    
        </form>

        </nav>
        <div className="ProductListDivContainer">
          <ul className="ProductList">
            {ProductItem.map((item) => {
              return (
                <Product
                  key={item.id}
                  brandname={item.brand}
                  productType={item.name}
                  currencyType={item.currency}
                  name={item.name}
                  image={item.image_link}
                  imagealt={item.api_featured_image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default API;
