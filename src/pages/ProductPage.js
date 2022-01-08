import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductPage.css';

const ProductPage = () => { 
    const [individualProducts, setIndividualProduct] = useState({})
    const itemid = useParams()

    const renderTaglistHighlights = () => {
        
        if (tag_list === undefined || tag_list.length === 0)
            return <p>Highlights: Unavailable</p>
        
        else {
            return (
            
            <div className='taglist'>
            
            {renderPurpicks()}
            {renderCanadain()}
            {renderCertClean()}
            {renderChemicalFree()}
            {renderDairyFree()}
            {renderEWGVerified()}
            {renderEcoCert()}
            {renderFairTrade()}
            {renderGlutenFree()}
            {renderHypoallergenic()}
            {renderNatural()}
            {renderNoTalc()}
            {renderNonGmo()}
            {renderOrganic()}
            {renderPeanutFreeProduct()}
            {renderSugarFree()}
            {renderUSDAOrganic()}
            {renderVegan()}
            {renderAlcoholFree()}
                
            </div>
            )    
        }
    }


    const renderVegan = () => {

        if (tag_list.includes('Vegan')) {

            return (
            
                <div className="lol">
                    <p>Vegan</p>
                </div>

            )
        
        }

        else { 

            return (
            
                <div className='No'>
                     <p>Vegan</p>
                    {renderNO()}
                </div>
            )
        }
   
    }
    
    const renderCanadain = () => {
        
        if (tag_list.includes('canadian')) {

            return (
                
            <div className="lol">
                <p>Canadain</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                      <p>Canadain</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderNO = () => { 

        return <p>Nope</p>

    }
    
    const renderCertClean = () => {
        
        if (tag_list.includes('Cert Clean')) {

            return (
                
            <div className="lol">
                <p>Cert Clean</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Cert Clean</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderChemicalFree = () => {
        
        if (tag_list.includes('Chemical Free')) {

            return (
                
            <div className="lol">
                <p>Chemical Free</p>
            </div>
    
            )
             
        }
        else { 

            return (
            
                <div className='No'>
                     <p>Chemical Free</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderDairyFree = () => {
        
        if (tag_list.includes('Dairy Free')) {

            return (
                
            <div className="lol">
                <p>Dairy Free</p>
            </div>
    
            )
             
        }
        else { 

            return (
            
                <div className='No'>
                    <p>Dairy Free</p>
                    {renderNO()}
                </div>
            )
        }
        
    }

    const renderPurpicks = () => {
        
        if (tag_list.includes('purpicks')) {

            return (
                
            <div className="lol">
                <p>Purpicks</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>Purpicks</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderEWGVerified = () => {
        
        if (tag_list.includes('EWG Verified')) {

            return (
                
            <div className="lol">
                <p>EWG Verified</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>EWG Verified</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderEcoCert = () => {
        
        if (tag_list.includes('EcoCert')) {

            return (
                
            <div className="lol">
                <p>EcoCert</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>EcoCert</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderFairTrade = () => {
        
        if (tag_list.includes('Fair Trade')) {

            return (
                
            <div className="lol">
                <p>Fair Trade</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>Fair Trade</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderGlutenFree = () => {
        
        if (tag_list.includes('Gluten Free')) {

            return (
                
            <div className="lol">
                <p>Gluten Free</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Gluten Free</p>
                    {renderNO()}
                </div>
            )
        }
        
    }


    const renderHypoallergenic = () => {
        
        if (tag_list.includes('Hypoallergenic')) {

            return (
                
            <div className="lol">
                <p>Hypoallergenic</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Hypoallergenic</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderNatural = () => {
        
        if (tag_list.includes('Natural')) {

            return (
                
            <div className="lol">
                <p>Natural</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Natural</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderNoTalc = () => {
        
        if (tag_list.includes('No Talc')) {

            return (
                
            <div className="lol">
                <p>No Talc</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>No Talc</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderNonGmo = () => {
        
        if (tag_list.includes('Non-Gmo')) {

            return (
                
            <div className="lol">
                <p>Non-Gmo</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>Non-Gmo</p>
                    {renderNO()}
                </div>
            )
        }
        
    }


    const renderOrganic = () => {
        
        if (tag_list.includes('organic')) {

            return (
                
            <div className="lol">
                <p>Organic</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                     <p>Organic</p>
                    {renderNO()}
                </div>
            )
        }
        
    }

    const renderPeanutFreeProduct = () => {
        
        if (tag_list.includes('Peanut Free Product')) {

            return (
                
            <div className="lol">
                <p>Peanut Free Product</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Peanut Free Product</p>
                    {renderNO()}
                </div>
            )
        }
        
    }

    const renderSugarFree = () => {
        
        if (tag_list.includes('Sugar Free')) {

            return (
                
            <div className="lol">
                <p>Sugar Free</p>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Sugar Free</p>
                    {renderNO()}
                </div>
            )
        }
        
    }

    const renderUSDAOrganic = () => {
        
        if (tag_list.includes('USDA Organic')) {

            return (
                
            <div className="lol">
                    <p>USDA Organic</p>
                    <i class="fa-solid fa-check"></i>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>USDA Organic</p>
                    <i className='fa-solid fa-square-check'></i>
                    {renderNO()}
                </div>
            )
        }
        
    }

    const renderAlcoholFree = () => {
        
        if (tag_list.includes('alcohol free')) {

            return (
                
            <div className="lol">
                <p>Alcohol Free</p>
                <i className="fas fa-rocket"></i>
            </div>
    
            )
             
        }

        else { 

            return (
            
                <div className='No'>
                    <p>Alcohol Free</p>
                    {renderNO()}
                </div>
            )
        }
        
    }
    const renderRating = () => {
        if(rating === null)
            return <p className='productParagraph'>Rating: Sorry No Rating Currently Available. Be the First To Rate!</p>
        
        else {
            return <p className='productParagraph'>Rating: {rating} Stars.</p>
        }
    }
    const renderPrice = () => {
    
        if (price === null || price === '0.0')
            return <p className='productParagraph'>Price: Currently Unavailable.</p>

        else {

            let Z = parseFloat(price).toFixed(2);

            return <a className="productPageBuyNowLink productParagraph" href={product_link}>Buy Now for ${Z}</a>
        }
    }
    const renderColors = () => {
        if(product_colors === undefined || product_colors.length === 0)
            return <p>Colours: Unavailable</p>
        
        else {
            return (
            <div className="coloursWrapper">
            
                {product_colors.map((product) => {
                    return (
                        <div className='colourItem' key={product.hex_value}>
                            <div className='colourCircle' style={{background: `${product.hex_value}`}}>{product.hex_value}</div>
                            <p>{product.colour_name}</p>
                        </div>
                    );
                })}
            
            </div>
            )
        }
      
    }

    useEffect(() => {
        axios({
            url: `https://makeup-api.herokuapp.com/api/v1/products/${itemid.itemid}.json`,
        }).then((response) => {
            setIndividualProduct(response.data)
        })
    }, [itemid.itemid])

    const { api_featured_image, description, product_link, brand, name, rating, tag_list, product_colors, price} = individualProducts
  
    return (
        <div className="wrapperProductPage">
            <div className='ProductPageContainer'>
                <div className="imageContainerProductPage">
                    <img src={api_featured_image} alt={`${name}`} />
                </div>
                <div className="paragrapghContainerProductPage">
                    <h3 className="nameProduct">{name} W</h3>
                    <h4 className='productPageSubHeading'>Brought to you by - {brand}</h4>
                    <p className="productPageParagraph DescriptionProduct">{`${description}`.replaceAll(`</li>`, '').replaceAll(`<li>`, '').replaceAll(`<ul>`, '').replaceAll(`</ul>`, '').replaceAll(`</strong>`,'').replaceAll(`<strong>`, '')};</p>
                    {renderPrice()}
                    {renderRating()}
                    <p><Link to="/API">Click to Go Back to Store</Link></p>
                </div>
                {renderColors()}
                {renderTaglistHighlights()}
            </div>
      </div>
    );
}

export default ProductPage