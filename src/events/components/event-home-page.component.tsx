import {GeolocationGetMyLocation} from "../../geolocation/components/geolocation-get-my-location.component";
import {Link, useHistory} from "react-router-dom";

export const EventHomePage = () => {
    const history = useHistory();
    return <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <p className="col-md-8 fs-4">Event plus help you find attractive locations near you.</p>
                <GeolocationGetMyLocation
                    className={"btn btn-primary btn-lg"}
                    onLocationChange={() => history.push("/events")}>
                    Get my location to see events.
                </GeolocationGetMyLocation>
                <Link title={"proceed without location"} to={"/events"}
                      className={"btn btn-secondary ms-2 mt-1"}>
                    Proceed without location
                </Link>
            </div>
        </div>
    </>
}