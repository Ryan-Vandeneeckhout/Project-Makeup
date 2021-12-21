function Product ( props ) {

    return (
        <li key={props.id}>
            <div className="showContainer product">
                <div className="image">
                <img src={props.imagealt ? props.imagealt:null} alt={props.image ? props.image:null}/>
                </div>
                <div className="info content">
                    <h3 className="ProductHeadingName">{props.name}</h3>
                    <p className="productName">Product Name: {props.productType}</p>
                    <p className="productBrandName">Brand Name: {props.brandname}</p>
                    <p className="productPrice">Price: {props.currencyType} {props.price}</p>
                    <p className="productRating">Rating: {props.rating}</p>
                </div>
            </div>
        </li>
    )
}

export default Product;


