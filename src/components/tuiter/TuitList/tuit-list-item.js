import React from 'react'
const TuitListItem = (
    {
        tuit =
            {
                "_id": "123",
                "topic": "Web Development",
                "postedBy": {
                    "username": "ReactJS"
                },
                "liked": true,
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "attachments": {
                    "video": "unKvMC3Y1kI"
                },
                "logo-image": "../../../../tuiter/images/react-blue.png",
                "avatar-image": "../../../../tuiter/images/react-blue.png",
                "stats": {
                    "comments": 123,
                    "retuits": 234,
                    "likes": 345
                }
            }
    }) => {
    return(
        <div className="wd-tuit">
            <div class="row">
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%" style={{width: 48, height: 48,
                        display:"inline",}} src={tuit["logo-image"]} />
                    </div>
                    <div className="col-11" style={{paddingLeft: 10, paddingRight: 10}}>
                        <i class="fa fa-times" style={{float: "right"}}></i>
                        <p className="wd-small">{tuit.topic} </p>
                        <p className="wd-desc" style={{display:"inline"}}><b>{tuit.postedBy.username} </b></p>
                        { tuit.verified && <i className="fa fa-check-circle"> </i>}
                        <p className="wd-small" style={{display:"inline", marginLeft:5}}>@{tuit.handle} </p>
                        <p className="wd-small" style={{display:"inline"}}> - {tuit.time} </p>
                        { tuit.title != "" && <p className="wd-desc">{tuit.title} </p>}
                        { tuit.title == "" && <p className="wd-desc">{tuit.tuit} </p>}
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src = {tuit.attachments.image} style={{width: "100%", borderRadius: 10, marginTop: 10, marginBottom: 10}}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe
                                width = "100%"
                                height = "325px"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                style= {{borderRadius: 10, marginTop: 10}}
                            />
                        }
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className="col-1 "/>
                <div className="col-3 " style={{paddingLeft: 20}}>
                    <i class="far fa-comment" style={{color:"white", paddingRight:10}}></i>
                    {tuit.stats.comments}
                </div>
                <div className="col-3 ">
                    <i class="fas fa-retweet" style={{color:"white", paddingRight:10}}></i>
                        {tuit.stats.retuits}
                </div>
                <div className="col-3 ">
                    { tuit.liked != "" &&
                        <i class="far fa-heart" style={{color:"white", paddingRight:10}}></i>}
                    { tuit.liked == "" &&
                        <i class="fas fa-heart" style={{color:"white", paddingRight:10}}></i>}
                    {tuit.stats.likes}
                </div>
            </div>
        </div>

    );
}
export default TuitListItem;