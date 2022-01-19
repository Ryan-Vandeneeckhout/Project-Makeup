export default function PostList(props) {
    
  let Posts = props.posts; 

  const FirstArrayValue = props.FirstArrayValue;
  const FirstArrayValue2 = props.FirstArrayValue2; 
  
  const page = props.page;
  
  const arrayOfPictures = () => {
  
    if (page === true) {
    
      return (
  
        <ul className="postReviewsList">
          {Posts.map(post => (
            
            <li className="postReviewsOne" key={post.id}>
              <h3>{post.name} says:</h3>
              <p>Rating: {post.rating} / 5</p>
              <p>{post.post}</p>
            </li>

          ))}
        </ul>
      
      )
    }

  else {

    return (
      <ul>
      {Posts.slice(FirstArrayValue, FirstArrayValue2).map(frontPageItemFirebase => (
        <a key={frontPageItemFirebase.id} href={frontPageItemFirebase.link}>
          <li >
            <img src={frontPageItemFirebase.imageSmall} alt={frontPageItemFirebase.imageAlt} />
          </li>
        </a>
      ))}
    </ul>
    )
  }
  
  
  }

    return (
      <div className="front-Page-FirebaseItems">
        {arrayOfPictures()}
      </div>
    )
  }