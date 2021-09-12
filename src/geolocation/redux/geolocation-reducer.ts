import {GeolocationStore} from "./geolocation-store";

export const GeolocationActions = {
    "GEOLOCATION_STORE_USER_LOCATION": "GEOLOCATION_STORE_USER_LOCATION"
};

export const GeolocationStoreUserLocation = (userLocation: GeolocationPosition) => ({
    type: GeolocationActions.GEOLOCATION_STORE_USER_LOCATION,
    userLocation,
});

export const geolocationReducer = (state: GeolocationStore = {}, action: any) => {
    switch (action.type) {
        case GeolocationActions.GEOLOCATION_STORE_USER_LOCATION:
            return ({
                ...state,
                userLocation: action.userLocation
            })
        default:
            return state
    }
}