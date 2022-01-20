import axios from "axios";
import React, { useEffect, useState } from "react";
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
        setQuotes(response.data);
      
      }).catch(err => {
          if (err.response) { 
                
        }
          
      })
      
  }, []);

  const { content, author } = quotes;

    return <React.Fragment><h3 className="titleQuote">{content} - {author}</h3></React.Fragment>;
};

export default QuotesApi;
