import React from "react";
import './Test.css'
import { useCollection } from "./firebaseHooks/useMakeupPosts";

export default function Test() {
  let { posts } = useCollection("Favourites");
  console.log(posts);
  
    const renderForm = () => {
    
        if (posts === null || posts === undefined);
    
        else if (posts.length !== 0) {
    
            return (
              <React.Fragment>
                {posts.map((post) => (
                  <li className="favsImageContainer" key={post.id}>
                    <div className="FavsImage">
                      <img src={post.api_featured_image} alt={post.name}></img>
                    </div>
                    <h4>{post.name}</h4>
                    <p>{post.brand}</p>
                  </li>
                ))}
              </React.Fragment>
            );
    
        }
  
    };

  return (
    <ul className="FavouritesList">
      {renderForm()}
    </ul>
  );
}
