import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
               <div class="input-group input-group-sm">
                               <input class="form control form-control-sm rounded-pill" style="width: 90%;border: 1px solid lightgray;padding-left:40px;"
                                      placeholder="Search Tuiter"/>
                               <a href="explore-settings.html">
                                   <i class="fa fa-gear" style="font-size:30px;color:#0d6dfd;float:right;margin-left:12px;margin-top:5px;"></i>
                               </a>
                               <i class="fa fa-search" style="font-size:15px; position:absolute; margin-top:8px; margin-left:10px;"></i>
                           </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                   <ul class="nav nav-tabs" style="font-size:15px;margin-top:10px;">
                               <li class="nav-item">
                                   <a class="nav-link active" href="for-you.html">For you</a>
                               </li>
                               <li class="nav-item">
                                   <a class="nav-link" href="trending.html">Trending</a>
                               </li>
                               <li class="nav-item">
                                   <a class="nav-link" href="news.html">News</a>
                               </li>
                               <li class="nav-item">
                                   <a class="nav-link" href="sports.html">Sports</a>
                               </li>
                               <li class="nav-item">
                                    <div class="d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
                                   <a class="nav-link" href="entertainment.html">
                                   Entertainment</a>
                                   </div>
                               </li>
                           </ul>
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
