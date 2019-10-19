import { Room } from './room.model';
import { Hotel } from './hotel.model';
import { Sort } from './sort.model';

export interface RoomCategory {
    id: number;
    // created: Date;
    // lastUpdated: Date;
    name: string;
    maxAdultNumber: number;
    maxChildNumber: number;
    // images;
    hotel: Hotel;
    // roomList: Room[];
}

export class RoomCategoryPage {
    constructor(
        public content?: RoomCategory[],
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
