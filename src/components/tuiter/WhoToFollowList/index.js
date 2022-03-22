import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
        <ul class="list-group">
            <li class="list-group-item"><p class="wd-desc">Who to Follow </p></li>
            {
                who.map(who=> {
                    return(
                     <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;