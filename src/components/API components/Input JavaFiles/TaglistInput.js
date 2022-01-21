import { TaglistCatgoryItemsNavList } from "../Input maps/TaglistCatgoryITemsNavList";
import React from "react";

class TaglistInput extends React.Component {
       
    shouldComponentUpdate() {
        return false;
    }
    pop() {

        this.myButton.setAttribute("class", "green");
    }
    render(){
        return (
      
            <div className="taglistFormContainer">

                {TaglistCatgoryItemsNavList.map((item, index) => {
                    return (
                        <button id={item.valueTaglistCategory} ref={button => {
                            this.myButton = button}} key={index} onClick={this.props.tagArray} className="tagListButton" value={item.valueTaglistCategory}>{item.valueTaglistCategory}
                        </button>
                    );
                })}

            
          
            </div>
        
       
        );
    }
  };
  
  export default TaglistInput;