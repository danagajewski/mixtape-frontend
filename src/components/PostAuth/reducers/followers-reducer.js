import {FOLLOW, UNFOLLOW, FIND_ALL_FOLLOWERS, FIND_FOLLOW}
  from "../../actions/followers-actions";

const FollowersReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_FOLLOWERS:
      return action.followers;
    case UNFOLLOW:
      return state.filter(
          follow => follow.follower !== action.follower && follow.followed !== action.followed);
    case FOLLOW:
      return [
        ...state,
        action.follow
      ];
    default:
      return state;
  }
}
export default FollowersReducer;