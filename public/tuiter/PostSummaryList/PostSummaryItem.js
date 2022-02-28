//  {
//    "topic": "Web Development",    "userName": "ReactJS",    "time": "2h",    "image": "../../images/react-blue.png",
//    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//  },

const PostSummaryItem = (exploreItems) => {
    return(`
        <div class="wd-tuit">
            <img class="wd-img" src="${exploreItems.image}">
            <p class="wd-small">${exploreItems.topic} </p>
            <p class="wd-desc" style="display: inline;"><b>${exploreItems.userName} </b></p>
            <i class="fa fa-check-circle" style="font-size:15px; margin:0px;display:inline;"> </i>
            <p class="wd-small" style="display: inline;">${exploreItems.time} </p>
            <p class="wd-desc">${exploreItems.title} </p>
            <p class="wd-small">${exploreItems.tweets}</p>
        </div>
    `);
}
export default PostSummaryItem;
