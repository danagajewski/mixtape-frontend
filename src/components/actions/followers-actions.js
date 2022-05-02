import * as service from '../services/followers-service';

export const FOLLOW = 'FOLLOW';
export const FIND_FOLLOWERS = 'FIND_FOLLOWERS';
export const UNFOLLOW = 'UNFOLLOW';
export const FIND_FOLLOW = 'FIND_FOLLOW'
export const FIND_ALL_FOLLOWERS = 'FIND_ALL_FOLLOWERS';

export const follow = async (dispatch, follower, followed) => {
  const follow = await service.follow(follower, followed);
  dispatch({
    type: FOLLOW,
    follow
  });
}

export const unfollow = async (dispatch, follower, followed) => {
  await service.unfollow(follower, followed);
  dispatch({
    type: UNFOLLOW,
    followed
  })
}

export const findFollowers = async (dispatch, profileId) => {
  const followers = await service.findFollowers(profileId);
  dispatch({
    type: FIND_FOLLOWERS,
    followers
  });
}

export const findAllFollowers = async (dispatch) => {
  const followers = await service.findAllFollowers();
  dispatch({
    type: FIND_ALL_FOLLOWERS,
    followers
  });
}

