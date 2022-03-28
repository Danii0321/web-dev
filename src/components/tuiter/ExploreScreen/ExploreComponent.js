import PostSummaryList from "../PostSummaryList/index";
import React from 'react'
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="input-group input-group-sm">
                    <input className="form control form-control-sm rounded-pill" style={{width: "90%", border: "1 solid lightgray", paddingLeft:40}}
                        placeholder="Search Tuiter"/>
                    <a href="explore-settings.html">
                        <i className="fas fa-cog" style={{fontSize:30, color:"#29a0d6", float:"right", marginLeft:12, marginTop:5}}></i>
                    </a>
                        <i className="fa fa-search" style={{fontSize:15, position:"absolute", marginTop:8, marginLeft:10}}></i>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <ul className="nav nav-tabs" style={{fontSize:15, marginTop:10}}>
                    <li className="nav-item">
                        <a className="nav-link active" href="../for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <div className="d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
                            <a className="nav-link" href="../entertainment.html">
                                Entertainment
                            </a>
                        </div>
                    </li>
                </ul>
            </ul>
            <div className="wd-container">
                <img src="../../../../tuiter/images/starship.jpeg" style={{width:"100%", height:"auto", borderRadius:0, float: "left", marginBottom:10}}/>
                    <div className="wd-bottom-left">SpaceX's Starship</div>
            </div>
           {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;
