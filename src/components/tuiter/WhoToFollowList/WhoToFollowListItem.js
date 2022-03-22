// {   avatarIcon: '../../images/virgin.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },

const WhoToFollowListItem = (
{
    who = {
        avatarIcon: '../../../../tuiter/images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return(
        <div>
        <li className="list-group-item ">
            <img id="wd-icon" src= {who.avatarIcon}></img>
            <button className="btn btn-primary btn-block rounded-pill" style={{display:"inline", float:"right", padding:0}}>
                <a className="nav-link active" style={{color:"white"}}>Follow </a>
            </button>
            <p className="wd-desc" style={{display:"inline"}}>{who.userName} </p>
                <i className="fa fa-check-circle" style={{fontSize:15, margin:0, display:"inline"}}> </i>
            <p className="wd-small">@{who.handle} </p>
        </li>
        </div>
    );
}

export default WhoToFollowListItem;