import { useCollection } from "./firebaseHooks/useMakeupPosts";
import PostList from "./Postscollection";

export default function Posts(props) {

    const { posts } = useCollection('makeupposts')
    
    const FirstArrayValue = props.ArrayLength; 
    const FirstArrayValue2 = props.ArrayLength2; 

    return (

        <div>
            {posts && <PostList FirstArrayValue={FirstArrayValue} FirstArrayValue2={FirstArrayValue2}   posts={posts} />}
        </div>
    );

}