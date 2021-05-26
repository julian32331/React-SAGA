import { xapi } from './api-utils';

export const fetchPodcasts = () => {
    return xapi.get('podcasts');
}

export const fetchFeaturedEvents = () => {
    return xapi.get('event/featured');
}

export const fetchHomeData = () => {
    return xapi.get('homedata');
}

export const fetchLocation = (location) => {
    return xapi.get('location/' + location);
}

export const fetchConnectGroup = () => {
    return xapi.get('connect_groups');
}
