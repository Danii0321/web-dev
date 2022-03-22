import React from "react";
import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList/index";
import PostSummaryList from "./PostSummaryList/index";
const Tuiter = () => {
    return(
        <>
        <div class="row mt-2">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div class="col-sm-10 col-md-10 col-lg-6 col-xl-6">
                <PostSummaryList/>
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </>
    )
};
export default Tuiter;

//import React from "react";
//import {Link} from "react-router-dom";
//
//const Tuiter = () => {
//    return(
//      <>
//          <h1>Tuiter</h1>
//          <Link to="/hello">
//              Hello
//          </Link> |
//          <Link to="/">
//              Labs
//          </Link>
//      </>
//    )
//};
//
//export default Tuiter;
