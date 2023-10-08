import { axiosRequest } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosRequest.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id) ? acc : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) { }
};

export const followHelper = (profile, clickedProfile, follow_id) => {
  return profile.id === clickedProfile.id
    ? {
      ...profile,
      followers_count: profile.followers_count + 1,
      follow_id,
    }
    : profile.is_owner
      ? { ...profile, following_count: profile.following_count + 1 }
      : profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? {
      ...profile,
      followers_count: profile.followers_count - 1,
      follow_id: null,
    }
    : profile.is_owner
      ? { ...profile, following_count: profile.following_count - 1 }
      : profile;
};
