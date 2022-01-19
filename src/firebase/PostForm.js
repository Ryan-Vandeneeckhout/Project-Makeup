import { useState } from "react";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import "./Postform.css";

export default function PostForm(props) {
  const [newPost, setNewPost] = useState("");
  const [postContainer, setPostContainer] = useState("");

  let hello = props.passedprop;

  const [value, setValue] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, `${hello}`), {
      name: newPost,
      post: postContainer,
      rating: value,
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
      
      document.getElementById("lol").style.color = "yellow"; 
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
      <h2>Write a Product Review!</h2>
   
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            type="text"
            onChange={(e) => setNewPost(e.target.value)}
            value={newPost}
            placeholder="your name:"
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
        <h3 id="lol" >I Rate this Product a {value}</h3>
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
