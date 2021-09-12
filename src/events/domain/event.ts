
export type EventLocation = {
    lat: string;
    lng: string;
    address: string;
}
export type Event = {
    id: string;
    title: string;
    description: string;
    category: string;
    location: EventLocation
}