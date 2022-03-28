import React from 'react'
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"
const PostSummaryList = () => {
    return (
        <>
        {
            post.map(post=> {
                return(
                    <PostSummaryItem post={post}/>
                );
            })
        }
        </>
    );
}

export default PostSummaryList;