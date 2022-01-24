import React, { useState } from "react";

export default function PriceSliderInput () {
  
    const [value, onChange] = useState(0);

  return (
    <div className="slider-parent">
          <input className="sliderStore" id="price" placeholder="Search for Products" type="range" min="0" max="75" value={`${value}`} onChange={({ target: { value: radius } }) => {onChange(radius)}}/>
        <input className="storeSlider" id="slider" placeholder={`Price less than $${value} Dollars`}></input>
    </div>
  );
}