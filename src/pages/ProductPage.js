import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css';

const ProductPage = () => { 
    const [individualProducts, setIndividualProduct] = useState({})
    const itemid = useParams()

    const renderTaglistHighlights = () => {
        if(tag_list === undefined || tag_list.length === 0)
            return <p>Highlights: Unavailable</p>
        else {
            return <p>Hightlights: {tag_list.join(", ")}</p>
        }
    }
    const renderRating = () => {
        if(rating === null)
            return <p>Rating: Unavailable.</p>
        else {
            return <p>Rating: {rating} Stars.</p>
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
                        <div>
                            <p style={{color: `${product.hex_value}`}}>{product.hex_value}</p>
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

    const { api_featured_image, description, product_link, brand, name, rating, tag_list, product_colors} = individualProducts
  
    return (
        <div className="wrapperProductPage">
            <div className='ProductPageContainer'>
                <div className="imageContainerProductPage">
                    <img src={api_featured_image} alt={`${name}`} />
                </div>
                <div className="paragrapghContainerProductPage">
                    <h3 className="productPageParagraph BrandProduct">{name} {brand}</h3>
                    <p className="productPageParagraph DescriptionProduct">{description}</p>
                    <p className="productPageParagraph LinkProduct"><a href={product_link}>Buy Now</a></p>
                    {renderColors()}
                    {renderTaglistHighlights()}
                    {renderRating()}
                  
                </div>
            </div>
      </div>
    );
}

export default ProductPage