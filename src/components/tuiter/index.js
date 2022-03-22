import React from "react";
import './../../explore.css';
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
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
