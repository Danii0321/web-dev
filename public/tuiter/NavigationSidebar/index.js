const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fa fa-twitter"></i></a>
                <a class="list-group-item" href="home.html">
                    <i class="fa fa-home" style="padding-right:5px"></i>
                    Home
                </a>
                <a class="list-group-item" href="explore.html" style="color:white;">
                     <i class="fa fa-hashtag" style="padding-right:5px;"></i>
                     Explore
                </a>
                <a class="list-group-item" href="notifications.html.html">
                    <i class="fa fa-bell" style="padding-right:5px"></i>
                    Notifications
                </a>
                <a class="list-group-item" href="messages.html">
                    <i class="fa fa-envelope" style="padding-right:5px"></i>
                    Messages
                </a>
                <a class="list-group-item" href="bookmarks.html">
                    <i class="fa fa-bookmark" style="padding-right:5px"></i>
                    Bookmarks
                </a>
                 <a class="list-group-item" href="lists.html">
                    <i class="fa fa-list" style="padding-right:5px"></i>
                    Lists
                 </a>
                 <a class="list-group-item" href="profile.html">
                    <i class="fa fa-user" style="padding-right:5px"></i>
                     Profile
                 </a>
                 <a class="list-group-item" href="/">
                    <span class="fa-stack fa-2x" style="padding-right:5px;font-size: 10px;">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    More
                 </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
