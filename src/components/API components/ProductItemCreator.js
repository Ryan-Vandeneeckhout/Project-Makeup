function Product ( props ) {
    
    const renderRating = () => {
        if(props.rating === null)
            return <p>Rating: Unavailable.</p>
        else {
            return <p>Rating: {props.rating} Stars.</p>
        }
    }

    const renderPrice = () => {
        
        if (props.price === null || props.price === '0.0')
            return <p>Price: Unavailable.</p>
        else {
            return <p id="productPriceElement" className="productPriceElement">Price: {props.price}</p>
        }
    }
    return (
        <li >
            <div className="showContainer product">
                <div className="image">
                <img src={props.imagealt ? props.imagealt : null} alt={props.image ? props.image : null}/>
                </div>
                <div className="info-content">
                    <h3 className="productHeadingName">{props.name}</h3>
                    <p className="productName">Product Name: {props.productType}</p>
                    <p className="productBrandName">Brand Name: {props.brandname} {props.coloursProduct}</p>
                    {renderPrice()}
                    {renderRating()}
                </div>
            </div>
        </li>
    )
}

export default Product;


