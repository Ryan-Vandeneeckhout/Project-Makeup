import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../../firebase/Posts";

const SephoaraPage = () => {
    const productscurrentSkuskuId = useParams()
    const productId = useParams()

    const renderImage = () => {
        let W = document.getElementById("priceSep");
        if (currentSku === undefined || currentSku.length === 0 || currentSku === null);
        
        else {
            
            if (W === undefined || W === null);
                
            else {

                W.innerText = `Available for  ${currentSku.listPrice}`; 

            }
            
            return (
                <React.Fragment>
                <img src={currentSku.skuImages.image450} alt={imageAltText}/>                   </React.Fragment>
            );
        }
    };
    const renderBrand = () => {

        if (brand === undefined || brand.length === 0 || brand === null);
    
        else {
    
            return (
                <React.Fragment>
                    <h4 className='productPageSubHeading'>{brand.displayName}</h4>
                    <p>{brand.description}</p>
                </React.Fragment>
            );
        }
    };

    const renderLongDescription = () => {
        
        let Z = document.getElementById("Sept");
        let E = document.getElementById("Eight"); 

        if ( longDescription === undefined || longDescription.length === 0 || longDescription === null || suggestedUsage === undefined || suggestedUsage === null);
    
        else {
            
            if (Z === undefined || Z === null || E === null || E === undefined);
                
            else {

                Z.innerHTML = `${longDescription}`;
                E.innerHTML = `${suggestedUsage}`; 

            }
            
          
        }
    };
    const [individualProducts, setIndividualProduct] = useState({});
    useEffect(() => {
        axios({
            method: "GET",
            url: 'https://sephora.p.rapidapi.com/products/detail',
            params: {productId: `${productId.productId}`, preferedSku: `${productscurrentSkuskuId.productscurrentSkuskuId}`},
            headers: {
            'x-rapidapi-host': 'sephora.p.rapidapi.com',
            'x-rapidapi-key': 'b9263c5decmsh8dcb4581774082bp124b6ejsn10fb92520995'
              
            }
        }).then((response) => {
            console.log(response.data)
            setIndividualProduct(response.data)
        })
    }, [productId.productId, productscurrentSkuskuId.productscurrentSkuskuId])

    const { displayName, brand, longDescription, suggestedUsage, lovesCount, imageAltText, currentSku } = individualProducts; 
    const page = true; 
    return (
        
        <div className="wrapperProductPage">
            <div className='ProductPageContainer'>
                <div className="paragrapghContainerProductPage">
                    <h3 className="nameProduct">{displayName}</h3>
                    {renderBrand()}
                    {renderLongDescription()}
                    <p id="Sept" className="Sept"></p>
                    <p id="priceSep" className="SeptPrice"></p>
                    <p id="Eight" className="Eight"></p>
                </div>
                <div className="imageContainerProductPage">
                    {renderImage()}
                <p>{lovesCount}</p>
                </div> 
            </div>
            <div className='PostWrapper'>
                    <Posts page={page} passedprops={productscurrentSkuskuId.productscurrentSkuskuId}/>
                </div>  
        </div>
    );
};

export default SephoaraPage; 