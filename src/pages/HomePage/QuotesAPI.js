import axios from "axios";
import { useEffect, useState } from "react";
import "./Quotes.css"

const QuotesApi = () => {

    const [quotes, setQuotes] = useState({});

    useEffect(() => {

      axios({
        method: "GET",
        url: "https://api.quotable.io/random",
          
        params: {
          maxLength: 140, 
        }
        
      }).then((response) => {
          console.log(response);
          setQuotes(response.data);
      
      }).catch(err => {
          if (err.response) { 
                
        }
          
      })
      
  }, []);

  const { content, author } = quotes;

    return <div><h3 className="titleQuote">{content} - {author}</h3></div>;
};

export default QuotesApi;
