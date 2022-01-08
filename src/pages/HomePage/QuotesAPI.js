import axios from "axios";
import { useEffect, useState } from "react";

const QuotesApi = () => {
    
    const renderQuote = () => {

        if (quotes === undefined || quotes.length === 0 || quotes === null) {
        }
    
        else {
    
            return (
          
                <ul className="lol">
                    
                    {quotes.slice(0, 1).map((quotes) => {
                        return (
                           
                            <p>{quotes.a}</p>
                        );
                    })}
                </ul>
            );
        }
    };

    const [individualQuote, setIndividualQuote] = useState({});

    useEffect(() => {

      axios({
          method: "GET",
          url: "https://zenquotes.io/api",
          headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
      }).then((response) => {
          console.log(response);
          setIndividualQuote(response.data);
      
      }).catch(err => {
          if (err.response) { 
                
            }
      })
      
  }, []);

  const { quotes } = individualQuote;

    return (
        
        <div className="">{renderQuote()}</div>
    
    );
    
};

export default QuotesApi;
