import {useDispatch} from "react-redux";
import {GeolocationService} from "../geolocation.service";
import {GeolocationStoreUserLocation} from "../redux/geolocation-reducer";
import {FC} from "react";

type GetMyLocationProps = {
    onLocationChange: (geo: GeolocationPosition) => void,
    children: React.ReactNode,
    className: string
}
export const GeolocationGetMyLocation: FC<GetMyLocationProps> = ({
        onLocationChange,
        className,
        children,

    }) => {
    const dispatch = useDispatch();
    const handleGetLocation = () => {
        GeolocationService.getLocation()
            .then((geo) => {
                dispatch(GeolocationStoreUserLocation(geo))
                onLocationChange(geo);
            });
    }
    return <button className={className} type="button" onClick={() => handleGetLocation()}>
        {children}
    </button>
}