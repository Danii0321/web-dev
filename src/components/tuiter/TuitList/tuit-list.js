import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitListItem from "./tuit-list-item"
import * as service
  from './../services/tuits-service';

const TuitList = () => {
 const tuits = useSelector(
       state => state.tuits);

 const dispatch = useDispatch();

 const findAllTuits = async () => {
   const tuits = await service.findAllTuits();
   dispatch({
     type: 'FIND_ALL_TUITS',
     tuits: tuits
   });
 }
 useEffect(findAllTuits, []);
 return ( <ul className="ttr-tuits list-group">
                {
                  tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
                }
              </ul> );
}
export default TuitList;

//import React from "react";
//import {useSelector} from "react-redux";
//import TuitListItem
//       from "./tuit-list-item";
//// import './tuits.css';
//
//const TuitList = () => {
//const tuits = useSelector(
//    state => state.tuits);
//
//  return (
//    <ul className="ttr-tuits list-group">
//      {
//        tuits.map && tuits.map(tuit =>
//          <TuitListItem key={tuit._id}
//                        tuit={tuit}/>)
//      }
//    </ul>
//  );
//}
//
//export default TuitList;