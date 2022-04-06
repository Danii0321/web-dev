import React from 'react'
import TuitStats from "../TuitStats/tuit-stats"

const TuitListItem = ({tuit}) => {
    return(
        <div className="wd-tuit">
            <div className="row">
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%" style={{width: 48, height: 48,
                        display:"inline",}} src={tuit["logo-image"] || tuit["avatar-image"]} />
                    </div>
                    <div className="col-11" style={{paddingLeft: 10, paddingRight: 10}}>
                        <p className="wd-small">{tuit.topic} </p>
                        <p className="wd-desc" style={{display:"inline"}}><b>{tuit.postedBy.username} </b></p>
                        { tuit.verified && <i className="fa fa-check-circle"> </i>}
                        <p className="wd-small" style={{display:"inline", marginLeft:5}}>@{tuit.handle} </p>
                        <p className="wd-small" style={{display:"inline"}}> - {tuit.time} </p>
                        { tuit.title && <p className="wd-desc">{tuit.title}</p> || tuit.tuit && <p className="wd-desc">{tuit.tuit}</p>}

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
                    <i className="far fa-comment" style={{color:"white", paddingRight:10}}></i>
                    {tuit.stats.comments || 0}
                </div>
                <div className="col-3 ">
                    <i className="fas fa-retweet" style={{color:"white", paddingRight:10}}></i>
                        {tuit.stats.retuits || 0}
                </div>
                <div className="col-3 ">

                    {<TuitStats tuit={tuit}/> || 0}

                </div>
            </div>
        </div>

    );
}
export default TuitListItem;