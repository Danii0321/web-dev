import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitListItem from "./tuit-list-item"
import {deleteTuit, findAllTuits}
  from "./../actions/tuits-actions";

const TuitList = () => {
 const tuits = useSelector(
       state => state.tuits);

 const dispatch = useDispatch();

 // find all tuits
 useEffect(() =>
   findAllTuits(dispatch),
   []);


 return ( <ul className="ttr-tuits list-group">
                {
                  tuits.map && tuits.map(tuit =>
                  <div>
                  <i className="fa fa-times float-end" style={{padding: 10}}
                    onClick={() => deleteTuit(
                    dispatch, tuit)}></i>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>
                  </div>)
                }
           </ul>
         );
}
export default TuitList;
