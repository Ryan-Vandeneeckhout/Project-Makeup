import axios from "axios";
import React, { useState } from "react";
import BrandInput from "../Input JavaFiles/BrandInput";
import ProductCatgoryInput from "../Input JavaFiles/ProductCatgoryInput";
import ProductTypeInput from "../Input JavaFiles/ProductTypeInput"
import ProductItemCreator from "../ProductItemCreator";
import { Link } from 'react-router-dom';
import { BrandCatgory } from "../Input maps/BrandCatgoryItemsNavList";
import { ProductTypeCatgory } from "../Input maps/ProductTypeCatgoryItemsNavList";
import { TaglistCatgoryItemsNavList } from "../Input maps/TaglistCatgoryITemsNavList";
import Banner from "../../../pages/HomePage/Banner";
import PriceSliderInput from "../Input JavaFiles/PriceSliderInput";
import TaglistInput from "../Input JavaFiles/TaglistInput";

function UserStoreInputCallAPIAndStoreItemCointainer() {
  
  const [ProductItem, setProductItem] = useState([]);
  const [Sephora, setSephora] = useState([]);
  const [background, setBackground] = useState(false);
  const [errorAPI, setErrorAPI] = useState('')

  let keyz = ["8d6e89e079msh65eed6ce5ddd3dbp169916jsn84600802a3f3", "4148b818d4msh2ca5933b5ea1ab5p1b32c4jsnde65d6e0b9f8"]; 
  let newArrivalsProductLine = keyz[Math.floor(Math.random() * keyz.length)];
  
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
      APISephora(); 

    }
    
    if (!TaglistCatgoryItemsNavList.includes(`${query}`) && `${query}`.length > 3) {
    
      queryType = "product_tags";
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
    
    let Price = ""; 

    if (document.querySelector("#price").value === undefined || document.querySelector("#price").value === 0 || document.querySelector("#price").value === "0") {

      Price = "";

    }

    else {

      Price = document.querySelector("#price").value;
    } 

    axios({
      method: "GET",
      url: ` https://makeup-api.herokuapp.com/api/v1/products.json`,
      responseType: "json",
      params: {
        brand: `${branding}`,
        product_type: `${ProductTypeSelected}`,
        product_category: `${ProductCatgorySelected}`,
        price_less_than: `${Price}`,
        product_tags: `${ary}`
      },
      
    }).then((jsonResponse) => {
            
    if (jsonResponse.length !== 0) {
      setProductItem(jsonResponse.data);
      setBackground(true); 
    }
      
    }).catch((error) => {
      if (error.response) {
          setErrorAPI('Sorry our API is unable to get the necessary information!')
      }
  })
    
  
  }

  function APISephora() {
    const ProductTypeSelected = document.querySelector("#productType option:checked").value;
   
    axios({
      method: "GET",
      url: "https://sephora.p.rapidapi.com/products/search",
          params: {
              q: `${ProductTypeSelected}`,
              pageSize: "60",
              currentPage: "1",
          },
          headers: {
              "x-rapidapi-host": "sephora.p.rapidapi.com",
              "x-rapidapi-key": `${newArrivalsProductLine}`,
          },
      
    }).then((jsonResponse) => {
            
    if (jsonResponse.length !== 0) {
        setSephora(jsonResponse.data);
    }
      
    })
    
  
  }
  
  let ary = []; 

  const tagArray = (event) => {  

    if (!ary.includes(event.target.value)) {
      ary.push(`${event.target.value}`);    
      APICallFunction(); 
     
      document.getElementById(event.target.value).classList.add("clickedTagButton");
   
    }

    else if (ary.includes(event.target.value)){
      
      ary = ary.filter(item => item !== event.target.value);
      document.getElementById(event.target.value).classList.remove("clickedTagButton");
      
      if (ary.length !== 0) {
        APICallFunction(); 
        console.log(ary);

      }
      if (ary.length === 0) { 
        ary = []
        
      }

    }
  }
  const APICalls = () => {
    APISephora();
    APICallFunction();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderSephora = () => {
    if (products === undefined || products.length === 0);
    
    else {

      return (
        <React.Fragment>
          {products.map((product) => {
            return (

              <Link to={`sep/${product.currentSku.skuId}/${product.productId}`}>
              <li key={product.currentSku.skuId}>
                <img className="image"
                  src={product.image250}
                  alt={product.currentSku.imageAltText}
                />
                <h3 className="productHeadingName">{product.displayName}</h3>
                <p className="productBrandName">{product.brandName}</p>
                <p className="White">
                  Rating: {parseFloat(`${product.rating}`).toFixed(2)} Stars
                </p>
                <p className="White">Reviews: {product.reviews}</p>
                <p className="White">{product.currentSku.listPrice}</p>
                </li>
              </Link>
            );
          })}
         </React.Fragment>
      );
    }
  };

  const { products } = Sephora;

  return (
    <div className="APISection">
      <Banner/>
      <div className="contentAPISectionContainer">   
      
        <form className="storePageForm" onSubmit={handleSubmit}>    
          <label className="sr-only">Select a Brand</label>
          <BrandInput APICallFunction={APICallFunction}/>
        
          <label className="sr-only">Select a Product Type Such as Blush, Bronzer, Lipstick</label>
          <ProductTypeInput APICallFunction={APICalls} />   
        
          <label className="sr-only">Product Catgory</label>
          <ProductCatgoryInput APICallFunction={APICallFunction} />
          <PriceSliderInput />
          <div className="searchBar">
            <div className="searchIcon">
              <i className="fas fa-search"></i>
            </div> 
            <input type="text" id="fname" name="fname" placeholder="Search for Products" onChange={ren} />
          </div>
        </form>
        
        <form onSubmit={handleSubmit} className="taglistForm ">
          <TaglistInput tagArray={tagArray}/>
        </form>
        <div className="ProductListDivContainer" style={background ? { backgroundColor: 'black' } : {backgroundColor: `rgb(32, 32, 32)` }}>
          <ul id="ProductList" className="ProductList">
          <div className="ApiError">{errorAPI}</div>
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
                  tags={item.tag_list}
                  />
                </Link>
              );
            })}
          {renderSephora()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserStoreInputCallAPIAndStoreItemCointainer;
