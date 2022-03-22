// {   avatarIcon: '../../images/virgin.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },

const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item ">
            <img id="wd-icon" src= "${who.avatarIcon}">
                        <button class="btn btn-primary btn-block rounded-pill"
                         style="display:inline;float:right;padding:0px;">
                            <a class="nav-link active" href="#" style="color:white;">Follow </a>
                        </button>
                        <p class="wd-desc" style="display: inline;">${who.userName} </p>
                        <i class="fa fa-check-circle" style="font-size:15px;margin:0px;display:inline;"> </i>
                        <p class="wd-small">@${who.handle} </p>
        </li>
    `);
}
export default WhoToFollowListItem;