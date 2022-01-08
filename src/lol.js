import { useEffect, useState } from 'react';
// to access our database, we must import the corresponding firebase modules
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase/config';

function Posting() {

    const [post, setPost] = useState([]);
    useEffect(() => {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      onValue(dbRef, (response) => {
        const newState = [];
        const data = response.val();
      
        for (let key in data) {
        
          newState.push(data[key]);
        }
     
        setPost(newState);
      });
    }, [])
    
    return (
        <div>
          <ul>
            {post.map((pos) =>
                <li key={pos}>
                  <p>{pos}</p>
                </li>
              )
            }
          </ul>
        </div>
      )
}
    
export default Posting; 