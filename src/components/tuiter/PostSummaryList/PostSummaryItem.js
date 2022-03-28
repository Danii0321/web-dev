import React from 'react'
//  {
//    "topic": "Web Development",    "userName": "ReactJS",    "time": "2h",    "image": "../../images/react-blue.png",
//    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//  },

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../../tuiter/images/react-blue.png"
        }
    }) => {
    return(
        <div className="wd-tuit">
            <img className="wd-img" src={post.image}></img>
            <p className="wd-small">{post.topic} </p>
            <p className="wd-desc" style={{display:"inline"}}><b>{post.userName} </b></p>
            <i className="fa fa-check-circle" style={{fontSize:15, margin:0, display:"inline"}}> </i>
            <p className="wd-small" style={{display:"inline"}}>{post.time} </p>
            <p className="wd-desc">{post.title} </p>
            <p className="wd-small">{post.tweets}</p>
        </div>
    );
}
export default PostSummaryItem;
