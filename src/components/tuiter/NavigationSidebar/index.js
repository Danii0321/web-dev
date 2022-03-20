import React from "react";
const NavigationSidebar = (
//    {
//        active = 'explore'
//    }
) => {
    return(
        <div>
        // make dynamic? if active, styled differently
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fa fa-twitter"></i></a>
                <a className="list-group-item" href="../home.html">
                    <i className="fa fa-home" style="padding-right:5px"></i>
                    <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Home </div>
                </a>
                <a className="list-group-item list-group-item-action active" href="explore.html" style="color:white;">
                     <i className="fa fa-hashtag" style="padding-right:5px;"></i>
                     <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Explore </div>
                </a>
                <a className="list-group-item" href="../notifications.html">
                    <i className="fa fa-bell" style="padding-right:5px"></i>
                    <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Notifications </div>
                </a>
                <a className="list-group-item" href="../messages.html">
                    <i className="fa fa-envelope" style="padding-right:5px"></i>
                    <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Messages </div>
                </a>
                <a className="list-group-item" href="../bookmarks.html">
                    <i className="fa fa-bookmark" style="padding-right:5px"></i>
                    <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Bookmarks </div>
                </a>
                 <a className="list-group-item" href="../lists.html">
                    <i className="fa fa-list" style="padding-right:5px"></i>
                   <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Lists </div>
                 </a>
                 <a className="list-group-item" href="../profile.html">
                    <i className="fa fa-user" style="padding-right:5px"></i>
                     <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Profile </div>
                 </a>
                 <a className="list-group-item" href="#">
                    <span className="fa-stack fa-2x" style="padding-right:5px;font-size: 10px;">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <div className="d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">More </div>
                 </a>
            </div>
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
