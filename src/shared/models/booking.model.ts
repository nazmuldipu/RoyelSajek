import { Hotel } from './hotel.model';
import { SubBooking } from './sub-booking.model';
import { User } from './user.model';
import { Sort } from './sort.model';

export class Booking {
  constructor(user?: User, subBookingList?: SubBooking[]) {
    this.user = user;
    this.subBookingList = subBookingList;
  }
  id: number;
  created: Date;
  lastUpdated: Date;
  createdBy: User;
  updatedBy: User;
  subBookingList: SubBooking[];
  hotel: Hotel[];

  refBy: string;
  subtotal: number;
  totalDiscount: number;
  promotionDiscount: number;
  total: number;
  totalAdvance: number;
  totalDue: number;
  totalVatService: number;

  manualBooking: boolean;
  state: boolean;
  confirmed: boolean;
  approved: boolean;
  cancelled: boolean;
  user: User;
  // hotel: Hotel;
}

export class BookingPage {
  constructor(
    public content?: Booking[],
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
