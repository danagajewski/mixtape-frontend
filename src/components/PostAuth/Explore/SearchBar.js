import React from "react";

const SearchBar = () => {
  return (
      <div>
        <div className="row flex-nowrap margin-bottom-override">
          <div className="col-sm-11">
            <div className="input-group mb-3">
          <span
              className="input-group-text border-right-0 search-start-override"><i
              className="fa fa-lg fa-search wd-search-mag"/></span>
              <input type="text"
                     className="form-control rounded-override border-left-0"
                     placeholder="Search Twitter"/>
            </div>
          </div>
          <div className="col-sm-1 d-flex justify-content-center">
            <a href="explore-settings.html"
               className="wd-explore-profile align-middle"><i
                className="fa fa-2x fa-cog wd-explore-profile align-middle wd-center-cog"/></a>
          </div>
        </div>
      </div>);
}

export default SearchBar;