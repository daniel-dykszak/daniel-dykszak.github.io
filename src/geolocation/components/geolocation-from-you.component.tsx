import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {GeolocationService} from "../geolocation.service";

type GeolocationFromYouProps = {
    lat: number;
    lng: number;
};
export const GeolocationFromYou = (props: GeolocationFromYouProps & any) => {
    const userLocation = useSelector<RootState, GeolocationPosition>
        (state => state.geolocation.userLocation);
    const distance = GeolocationService.getDistanceInKm(
        props.lat, props.lng,
        userLocation.coords.latitude,
        userLocation.coords.longitude
    );
    return <span {...props}>
        {distance.toFixed(1)} km from you
    </span>
};
