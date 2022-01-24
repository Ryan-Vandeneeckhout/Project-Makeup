import QuotesApi from "./QuotesAPI"; 
import './Banner.css'

const Banner = () => {
    
    return (
        <div className="homePageTitleContainer">
            <h1>Endless W Demands</h1>
            <h2>The Makeup SuperStore for All of Us</h2>
            <QuotesApi />
        </div>
    )
}

export default Banner; 