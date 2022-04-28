import * as service from '../services/followers-service';

export const FOLLOW = 'FOLLOW';
export const FIND_ALL_FOLLOWERS = 'FIND_ALL_FOLLOWERS';
export const UNFOLLOW = 'UNFOLLOW';
export const FIND_FOLLOW = 'FIND_FOLLOW'

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

export const findAllFollowers = async (dispatch, profileId) => {
  const followers = await service.findAllFollowers(profileId);
  dispatch({
    type: FIND_ALL_FOLLOWERS,
    followers
  });
}

