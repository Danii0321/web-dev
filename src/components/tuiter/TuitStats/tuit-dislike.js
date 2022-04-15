import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuits-actions";

const TuitDislike = ({tuit}) => {
  const dispatch = useDispatch();
return (
   <div className="col-2 ">
                  <span onClick={() => updateTuit(dispatch, {
                      ...tuit,
                      stats: {
                          ...tuit.stats,
                          dislikes: tuit.disliked ? tuit.stats.dislikes - 1 : tuit.stats.dislikes + 1
                      },
                      disliked: !tuit.disliked
                  })}>
                      {
                              tuit.disliked &&
                               <i class="fas fa-thumbs-down me-1"></i>
                      }
                       {
                              !tuit.disliked &&
                              <i class="far fa-thumbs-down me-1"></i>
                            }
                      {tuit.stats && tuit.stats.dislikes}
                  </span>
              </div>
      );
  }
export default TuitDislike;
