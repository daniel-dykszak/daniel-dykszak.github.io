import {GeolocationService} from "./geolocation.service";

describe("GeolocateService", () => {
    describe("getDistanceInKm", () => {
        it("should return 0 distance between same cords", () => {
            expect(GeolocationService.getDistanceInKm(1,2,1,2)
                .toFixed(2)
            ).toEqual("0.00");
        })

        it("should return proper distance between two cities", () => {
            const cityCords: {[city: string]: [number,number]} = {
                Berlin: [52.51988538913119, 13.399974469758838],
                Warsaw: [52.24522075533934, 21.035063296677496],
                Poznan: [52.410080559109005, 16.922942208596996]
            };

            const BerlinToPoznan = GeolocationService.getDistanceInKm(
                ...cityCords.Berlin,
                ...cityCords.Poznan);

            const BerlinToWarsaw = GeolocationService.getDistanceInKm(
                ...cityCords.Berlin,
                ...cityCords.Warsaw);

            const PoznanToWarsaw = GeolocationService.getDistanceInKm(
                ...cityCords.Poznan,
                ...cityCords.Warsaw);

            expect(BerlinToPoznan.toFixed(2)).toEqual("238.95");
            expect(BerlinToWarsaw.toFixed(2)).toEqual("518.86");
            expect(PoznanToWarsaw.toFixed(2)).toEqual("280.01");
        })
    })
});