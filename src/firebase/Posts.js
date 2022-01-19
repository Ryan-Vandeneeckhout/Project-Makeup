import PostForm from "./PostForm";
import { useCollection } from "./firebaseHooks/useMakeupPosts";
import PostList from "./Postscollection";
import React from "react";

export default function Posts(props) {
    
    let Check = props.passedprops; 
    let page = props.page; 

    const { posts } = useCollection(`${Check}`)
    
    const FirstArrayValue = props.ArrayLength; 
    const FirstArrayValue2 = props.ArrayLength2; 

    const renderForm = () => {

        if (page === null || page === undefined); 

        if (page === true) {
            
            return ( 
             <React.Fragment>
                <PostForm passedprop={Check} />
                <div className="productReviewTitleContianer"> 
                    <h2 className="productReviewh2">Product Reviews</h2>
                </div> 
             </React.Fragment>
                
            )
        }

        if (page === false); 
    }
    
    return (

        <React.Fragment>
        {renderForm()}
        {posts && <PostList FirstArrayValue={FirstArrayValue} FirstArrayValue2={FirstArrayValue2} page={page} posts={posts} />}
        </React.Fragment>         
    
    );

}