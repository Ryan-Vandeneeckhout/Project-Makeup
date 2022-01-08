import { ProductCatogoriesSelectedMap } from "../Input maps/ProductCatogoriesSelectedMap"
const ProductCatgoryInput = (props) => {
    
    const renderProductCat = () => {
        
        if (document.querySelector("#productType option:checked") === null)
            
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                  return <option className="categoryType" value="">Please Select a Product Type</option>
                </select>
        
        else if (document.querySelector("#productType option:checked").value === 'blush') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
            
            {ProductCatogoriesSelectedMap.map((item, index) => {
              return (
                <option className="categoryType" value={item.valueProductBlushCategory} key={index}>{item.nameProductBlushCategory}
              </option>
              );
            })}
            </select>
        }
        else if (document.querySelector("#productType option:checked").value === 'bronzer') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="powder">Powder</option>
            </select>
        }
        else if (document.querySelector("#productType option:checked").value === 'eyeliner') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="liquid">Liquid</option>
                <option className="categoryType" value="pencil">Pencil</option>
                <option className="categoryType" value="gel">Gel</option>
                <option className="categoryType" value="cream">Cream</option>
            </select>
        }

        else if (document.querySelector("#productType option:checked").value === 'foundation') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="concealer">concealer</option>
                <option className="categoryType" value="liquid">Liquid</option>
                <option className="categoryType" value="contour">contour</option>
                <option className="categoryType" value="bb cc">BB CC</option>
                <option className="categoryType" value="cream">Cream</option>
                <option className="categoryType" value="mineral">Mineral</option>
                <option className="categoryType" value="powder">Powder</option>
                <option className="categoryType" value="highlighter">Highlighter</option>
               
            </select>
        }

        else if (document.querySelector("#productType option:checked").value === 'lipstick') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="lipstick">Lipstick</option>
                <option className="categoryType" value="lip_gloss">Lip Gloss</option>
                <option className="categoryType" value="liquid">Liquid</option>
            </select>
        }
        
        else if (document.querySelector("#productType option:checked").value === 'eyeshadow') {
           
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                   <option className="categoryType" value="">All</option>
                <option className="categoryType" value="">All</option>
                <option className="categoryType" value="palette">Palette</option>
                <option className="categoryType" value="pencil">Pencil</option>
                <option className="categoryType" value="cream">Cream</option>
            </select>
        }
            
        else {
            return <select name="categoryType" id="categoryType" onInput={props.APICallFunction} className="customSelect categorySelect">
                return <option className="categoryType" value="" >Product Category unavailable</option>
            </select>

        }
    }

    return (
       
        <div>
            
        {renderProductCat()}
        
        </div>
       
       
    );
  };
  
  export default ProductCatgoryInput;