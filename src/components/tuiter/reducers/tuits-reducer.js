// import tuits from "../data/tuits.json";

const tuitsReducer = (state = [], action) => {
 switch (action.type) {
   case 'FIND_ALL_TUITS':
     return action.tuits;
   default:
     return state;
 }
}
export default tuitsReducer;

//  case 'like-tuit':
//        return state.map(tuit => {
//          if(tuit._id === action.tuit._id) {
//            if(tuit.liked === true) {
//              tuit.liked = false;
//              tuit.stats.likes--;
//            } else {
//              tuit.liked = true;
//              tuit.stats.likes++;
//            }
//            return tuit;
//          } else {
//            return tuit;
//          }
//        });
//
//    case 'delete-tuit':
//        return state.filter(
//          tuit => tuit._id !== action.tuit._id);
//    case 'create-tuit':
//      const newTuit = {
//        tuit: action.tuit,
//        _id: (new Date()).getTime() + '',
//        postedBy: {
//          "username": "Dani"
//        },
//        "avatar-image": "../../../../tuiter/images/dani.jpg",
//        "liked": false,
//        "verified": false,
//        "handle": "Dani",
//        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//        "time": "now",
//        stats: {
//          retuits: 111,
//          likes: 222,
//          replies: 333
//        }
//      }
//      return [
//        newTuit,
//        ...state,
//      ];
//    default:
//      return tuits
//  }
//}
//
//export default tuitsReducer;