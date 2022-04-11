import FollowList
  from "./FollowList";

import {useSelector} from "react-redux";
const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return(
      <div className="container m-0 p-0">
        <ul className="list-group">
          <li className="list-group-item"><p className="wd-content">Who to Follow</p></li>
          { FollowList(who) }
        </ul>
      </div>
  );
};
export default WhoToFollowList;