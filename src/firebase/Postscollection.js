export default function PostList(props) {
    
    let cupcakes = props.posts; 

  const FirstArrayValue = props.FirstArrayValue;
  const FirstArrayValue2 = props.FirstArrayValue2; 

    return (
      <div className="front-Page-FirebaseItems">
        <ul>
          {cupcakes.slice(FirstArrayValue, FirstArrayValue2).map(frontPageItemFirebase => (
            <li key={frontPageItemFirebase.id}>
                <img src={frontPageItemFirebase.imageSmall} alt={frontPageItemFirebase.imageAlt}/>
            </li>
        ))}
        </ul>   
      </div>
    )
  }