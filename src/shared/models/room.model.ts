import { Hotel } from './hotel.model';
import { Sort } from './sort.model';
import { RoomCategory } from './room.category';
import { RoomFacilities } from './room.facilities';

export interface Room {
    id: number;
    // created: Date;
    // lastUpdated: Date;

    roomNumber: string;
    price: number;
    vatService: number;
    numberOfBed: number;
    roomSize: number;
    imagePaths: string[];
    // images;
    discountMap: Map<Date, number>;
    discount: number;
    agentDiscount: number;
    discounted: boolean;
    available: boolean;
    floorNumber: number;
    archived: number;
    //   bookingList: Booking[];
    hotel: Hotel;
    category: RoomCategory;
    facilities: RoomFacilities;
}

export class RoomPage {
    constructor(
        public content?: Room[],
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

export enum RoomStatus {
    ROOM_BLOCKED = 'Blocked',
    ROOM_RESERVED = 'Reserved',
    ROOM_SOLD = 'Sold',
    ROOM_FREE = 'Free'
    // ROOM_BOOKED = 'Booked',
}

export interface RoomStatusMap {
    id: number;
    roomNumber: string;
    status: RoomStatus;
}
