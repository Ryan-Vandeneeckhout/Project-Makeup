import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NewArrivalsAPISephora.css";

const NewArrivals = (props) => {
    
   
    const renderImage = () => {

        if (products === undefined || products.length === 0 || products === null) {
        }
    
        else {
    
            return (
          
                <ul className="sephoraList">
                    {products.slice(0, 5).map((product) => {
                        return (
                            <Link to={`/sephora/${product.productId}`}>
                                <li className="sephoraProductItem" key={product.productId}>
                                    <img
                                        src={product.image250}
                                        alt={product.currentSku.imageAltText}
                                    />
                                    <p>{product.displayName}</p>
                                    <p>{product.brandName}</p>
                                    <p>Rating: {parseFloat(`${product.rating}`).toFixed(2)} Stars</p>
                                    <p>Reviews: {product.reviews}</p>
                                    <p>{product.currentSku.listPrice}</p>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            );
        }
    };

    const [individualProducts, setIndividualProduct] = useState({});

    useEffect(() => {

    const valueSentFromHomeQuery = props.homeValueNewArrivals;
      axios({
          method: "GET",
          url: "https://sephora.p.rapidapi.com/products/search",
          params: {
              q: `${valueSentFromHomeQuery}`,
              pageSize: "20",
              currentPage: "1",
          },
          headers: {
              "x-rapidapi-host": "sephora.p.rapidapi.com",
              "x-rapidapi-key": "b9fdf11926msh448274a57298336p1d27b9jsna88a18e6c927",
          },
      }).then((response) => {
          console.log(response);
          setIndividualProduct(response.data);
      
      }).catch(err => {
          if (err.response) { 
                
            }
      })
      
  }, []);

  const { products } = individualProducts;

  return <div className="sephoraList">{renderImage()}</div>;
};

export default NewArrivals;
