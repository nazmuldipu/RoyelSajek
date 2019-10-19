import { Room } from './room.model';
import { Address } from './address.model';
import { Sort } from './sort.model';
import { HotelFacilities } from './hotel.facilities.model';

export interface Hotel {
    id: number;
    name: string;
    description: string;
    phoneNumber: string;
    type: string;
    star: string;
    online: boolean;
    enabled: boolean;
    deleted: boolean;

    rating: number;
    accomodationType: string;
    popularPlacesToVisit: string;
    bdcCompareLink: string;
    hotelsDotComCompareLink: string;
    agodaCompareLink: string;
    expediaCompareLink: string;
    tourPackagesLink: string;

    discount: number;
    hotelswavePercentage: number;
    // agentPercent: number;

    // images;
    imagePaths: string[];
    address: Address;
    facilities: HotelFacilities;
    roomList: Room[];
}

export class HotelPage {
    constructor(
        public content?: Hotel[],
        public first?: boolean,
        public last?: boolean,
        public number?: number,
        public numberOfElements?: number,
        public size?: number,
        public sort?: Sort[],
        public totalElements?: number,
        public totalPages?: number
    ) { }
}
