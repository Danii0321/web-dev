import React from "react";
import TuitList from "../TuitList/tuit-list";
import WhatsHappening from "../WhatsHappening/whats-happening";
import '../../../explore.css';

const HomeScreen = () => {
  return(
    <div>
      <WhatsHappening/>
      <TuitList/>
    </div>
  )
}
export default HomeScreen;