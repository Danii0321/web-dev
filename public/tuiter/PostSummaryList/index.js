import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"
const PostSummaryList = () => {
    return (`
            ${
                exploreItems.map(exploreItems=> {
                    return(PostSummaryItem(exploreItems));
                }).join('')
            }
`); }

export default PostSummaryList;