import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`

            <ul class="list-group">
            <li class="list-group-item"><p class="wd-desc">Who to Follow </p></li>
            ${
                who.map(who=> {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
            </ul>
`); }

export default WhoToFollowList;