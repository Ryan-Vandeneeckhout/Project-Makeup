import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import React from "react";

export default function Favourites(props) {
    
    let Data = props.Good; 
    console.log(Data);

    let { brand, name, api_featured_image, price } = Data

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await addDoc(collection(db, "Favourites"), {
           
            brand, name, api_featured_image, price 

        });
    }

    const FilledHearts = () => {
        document.getElementById("filledHeart").style.color = "red"; 
    }

    const unFilledHearts = () => {
        document.getElementById("filledHeart").style.color = "black";
    }

    return (
        <React.Fragment>
            <p className="productPageParagraph">Click Heart to add product to the Visitor Favs Database!</p>
            <i onClick={handleSubmit} id="filledHeart" onMouseEnter={FilledHearts} onMouseLeave={unFilledHearts} className="fa fa-heart-o filled"></i>
        </React.Fragment>
      );
}
