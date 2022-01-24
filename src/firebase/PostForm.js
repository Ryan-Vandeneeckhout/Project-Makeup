import { useState } from "react";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import "./Postform.css";

export default function PostForm(props) {
  const [newPost, setNewPost] = useState("");
  const [postContainer, setPostContainer] = useState("");

  let DataBaseDocProps = props.passedprop;
  let Data = props.Products; 
  const [value, setValue] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, `${DataBaseDocProps}`), {
      name: newPost,
      post: postContainer,
      rating: value,
      Data,
    });
    setNewPost("");
    setPostContainer("");
    setValue(0);
  };
  const poop = ({ target: { value: radius } }) => {

    if (radius > 0) {
      
      document.getElementById("lol").style.color = "red"; 
    }

    if (radius > 1) {
      
      document.getElementById("lol").style.color = "orange"; 
    }
    if (radius > 2) {
      
      document.getElementById("lol").style.color = "goldenrod"; 
    }
    if (radius > 3) {
      
      document.getElementById("lol").style.color = "lightgreen"; 
    }

    if (radius > 4) {
      
      document.getElementById("lol").style.color = "green"; 
    }
    setValue(radius);
 }
  return (
    <div className="postFormWrapper">
      <div className="productReviewTitleContianer"> 
        <h2 className="productReviewh2">Write a Product Review!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            type="text"
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
            placeholder="Name:"
          />
        </label>
        <label>
          <textarea
            required
            id="message"
            name="message"
            className="message"
            placeholder="Write something.."
            onChange={(e) => setPostContainer(e.target.value)}
            value={postContainer}
          ></textarea>
        </label>

        <div>
        <h3 id="lol" >I Rate this Product {value} Stars!</h3>
          <input id="sliderPost"
            type="range"
            min={1}
            max={5}
            value={value}
            onChange={poop}
          />
        </div>
        <input type="submit" className="submit" value="Submit" />
      </form>
    </div>
  );
}
