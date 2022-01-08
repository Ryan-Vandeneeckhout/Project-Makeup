import axios from "axios";
import React, { useState } from "react";
import BrandInput from "../Input JavaFiles/BrandInput";
import ProductCatgoryInput from "../Input JavaFiles/ProductCatgoryInput";
import ProductTypeInput from "../Input JavaFiles/ProductTypeInput"
import ProductItemCreator from "../ProductItemCreator";
import { Link } from 'react-router-dom';
import { BrandCatgory } from "../Input maps/BrandCatgoryItemsNavList";
import { ProductTypeCatgory } from "../Input maps/ProductTypeCatgoryItemsNavList";
import Banner from "../../../pages/HomePage/Banner";

function UserStoreInputCallAPIAndStoreItemCointainer() {

  const [ProductItem, setProductItem] = useState([]);

  function ren() {
    let queryType = ""; 
    let query = document.querySelector("#fname").value;

    if (!BrandCatgory.includes(`${query}`) && `${query}`.length > 3) {
      queryType = "brand";
      calling();
    }
    
    if (!ProductTypeCatgory.includes(`${query}`) && `${query}`.length > 3) {
    
      queryType = "product_type";
      calling();

    }

    function calling(){

      axios({
        method: "GET",
        url: ` https://makeup-api.herokuapp.com/api/v1/products.json?${queryType}=${query}`,
        responseType: "json",
        
      }).then((jsonResponse) => {
              
      setProductItem(jsonResponse.data);
       
      })

    }
    
  }

  function APICallFunction() {
    const branding = document.querySelector("#brand option:checked").value; 
    const ProductTypeSelected = document.querySelector("#productType option:checked").value;
    const ProductCatgorySelected = document.querySelector("#categoryType option:checked").value;
   

    axios({
      method: "GET",
      url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
      responseType: "json",
      params: {
        brand: `${branding}`,
        product_type: `${ProductTypeSelected}`,
        product_category: `${ProductCatgorySelected}`,
      },
      
    }).then((jsonResponse) => {
            
    if (jsonResponse.length !== 0) {
        setProductItem(jsonResponse.data);
    }
      
    })
    
  
  }
  
  const productListBackgroundDynamic = () => { 
    
    let canvas = document.querySelector("#ProductListDivContainer");
    
    if (canvas === null || canvas === undefined) {
      
    }

    else if (ProductItem.map.length !== null || ProductItem.map.length !== undefined || ProductItem.map.length !== 0 || ProductItem.map.length !== "0") {
           
      canvas.style.height = "100%";
      canvas.style.backgroundColor = "black";

    }
   
  
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className="APISection">
      <Banner/>
      <div className="contentAPISectionContainer">   
      
        <form className="storePageForm" onSubmit={handleSubmit}>    
          <label className="sr-only">Select a Brand</label>
          <BrandInput APICallFunction={APICallFunction}/>
        
          <label className="sr-only">Select a Product Type Such as Blush, Bronzer, Lipstick</label>
          <ProductTypeInput APICallFunction={APICallFunction} />   
        
          <label className="sr-only">Product Catgory</label>
          <ProductCatgoryInput APICallFunction={APICallFunction} />
          <input type="text" id="fname" name="fname" onChange={ren}/>
        </form>

        <div className="ProductListDivContainer" id="ProductListDivContainer">
        {productListBackgroundDynamic()}
          <ul className="ProductList">

            {ProductItem.map((item) => {
              return (
                
                <Link to={`/${item.id}`}>
                  <ProductItemCreator
                  key={item.id}
                  brandname={item.brand}
                  productType={item.category}
                  currencyType={item.currency}
                  name={item.name}
                  image={item.image_link}
                  imagealt={item.api_featured_image}
                  price={item.price}
                  rating={item.rating}
                  jokes={item.displayName}
                  />
                </Link>
              );
            })}
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default UserStoreInputCallAPIAndStoreItemCointainer;
