import {useDispatch} from "react-redux";
import React from "react";

const TuitDislike = ({tuit}) => {
  const dispatch = useDispatch();
  const dislikeTuit = () => {
    dispatch({type: 'dislike-tuit', tuit});
  };
  return (
  <span onClick={dislikeTuit}>
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

  );
}
export default TuitDislike;
