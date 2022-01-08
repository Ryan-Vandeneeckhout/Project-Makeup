import NewArrivals from "../../components/SephoraCallProducts components/NewArrivalsAPI";
import "./Home.css";
import Posts from "../../firebase/Posts";
import Banner from "./Banner"; 
import { useState } from "react";

const HomePage = () => {
  
  let NewArrivalsProductCatgories = ["lipstick", "eyeshadow", "blush", "foundation", "eyebrow", "moisturizer"]; 
  let newArrivalsProductLine = NewArrivalsProductCatgories[Math.floor(Math.random() * NewArrivalsProductCatgories.length)];
  
  let NewArrivalsBrandCatgories = ["dae", "lashfood"]; 
  let newArrivalsBrandLine = NewArrivalsBrandCatgories[Math.floor(Math.random() * NewArrivalsBrandCatgories.length)];

  const FirstArrayValue = 0;
  const FirstArrayValue2 = 4;
  const SecondArrayValue = 4; 
  const SecondArrayValue2 = 7; 
  const ThirdArrayValue = 8;
  const ThirdArrayValue2 = 11; 
  
  let [arrayOne, setArrayOne] = useState(true); 
  let [arrayTwo, setArrayTwo] = useState(false); 
  
setTimeout(() => {
    
ChangeProduct(); 
  
}, 10000);
  
const ChangeProductArrayOne = () => {
  
  setArrayOne(arrayOne = true);
  setArrayTwo(arrayTwo = false);
  document.getElementById("imageGirlContainer").classList.remove("look");
  document.getElementById("buttonActiveOne").classList.add("buttonActive");
  document.getElementById("buttonActiveTwo").classList.remove("buttonActive");

  }

const ChangeProductArrayTwo = () => {
  
  setArrayOne(arrayOne = false);
  setArrayTwo(arrayTwo = true);
  document.getElementById("imageGirlContainer").classList.add("look");
  document.getElementById("buttonActiveTwo").classList.add("buttonActive");
  document.getElementById("buttonActiveOne").classList.remove("buttonActive");

  
}
  const ChangeProduct = () => {
   
    if (arrayOne === true) {

      document.getElementById("imageGirlContainer").classList.add("look");
      document.getElementById("buttonActiveTwo").classList.add("buttonActive");
      document.getElementById("buttonActiveOne").classList.remove("buttonActive");
      setArrayOne(arrayOne = false);
      setArrayTwo(arrayTwo = true);

    }

    else {

      setArrayOne(arrayOne = true);
      setArrayTwo(arrayTwo = false);
      document.getElementById("imageGirlContainer").classList.remove("look");
      document.getElementById("buttonActiveTwo").classList.remove("buttonActive");
      document.getElementById("buttonActiveOne").classList.add("buttonActive");
      
    }
  
 
  }

  return (
    <section>
      <div className="landingpage" id="landingpage">
       <Banner/>
        <div className="storeFrontPicturesContainer">
          <div className="tagLine">
            <h2>Unlock your inner Glamour with our New Product Lines</h2>
          </div>
          <div className="imageGirlContainer" id="imageGirlContainer">
            <div className={`ArrayOne${arrayOne ? " show" : " hide"}`} >
              <Posts ArrayLength={FirstArrayValue} ArrayLength2={FirstArrayValue2}/>
            </div>
            <div className={`ArrayTwo${arrayTwo ? " show" : " hide"}`} >
              <Posts ArrayLength={SecondArrayValue} ArrayLength2={SecondArrayValue2}/>
            </div>
            <div className="h3BeautyContainerHeading">
              <div className="buttonLines">
                <button id="buttonActiveOne" onClick={ChangeProductArrayOne} className="homePageProductChanger"/>
                <button id="buttonActiveTwo" onClick={ChangeProductArrayTwo} className="homePageProductChanger"/>
              </div>
              <h3>Get the Look</h3>
            </div>
          </div>
        </div>
        <div className="newProductsContainer">
          <div className="newProductsContainerWrapper">
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
