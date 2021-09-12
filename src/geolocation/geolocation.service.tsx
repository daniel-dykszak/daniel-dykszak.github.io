export class GeolocationService {
    static getLocation(): Promise<GeolocationPosition> {
        return new Promise((resolve, rejects) => {
            if (window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position);
                }, (error) => rejects(error))
            }
        })
    }

    // https://en.wikipedia.org/wiki/Haversine_formula
    // http://www.movable-type.co.uk/scripts/latlong.html
    static getDistanceInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        function deg2rad(deg: number) {
            return deg * (Math.PI/180)
        }
        const R = 6371;
        const dLat = deg2rad(lat2-lat1);
        const dLon = deg2rad(lon2-lon1);
        const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

}
