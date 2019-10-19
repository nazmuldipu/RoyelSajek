import { Room } from './room.model';
import { Hotel } from './hotel.model';
import { Sort } from './sort.model';

export interface RoomCategory {
    id: number;
    name: string;
    maxAdultNumber: number;
    maxChildNumber: number;
    hotel: Hotel;
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
