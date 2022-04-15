import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  return (
   <div className="col-2 ">
                  <span onClick={() => updateTuit(dispatch, {
                      ...tuit,
                      stats: {
                          ...tuit.stats,
                          likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes + 1
                      },
                      liked: !tuit.liked
                  })}>
                      {
                              tuit.liked &&
                              <i className="fas fa-heart me-1"
                                 style={{color: 'red'}}></i>
                      }
                       {
                              !tuit.liked &&
                              <i className="far fa-heart me-1"></i>
                            }
                      {tuit.stats && tuit.stats.likes}
                  </span>
              </div>
      );
  }
export default TuitStats;
