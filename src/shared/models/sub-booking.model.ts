import { Room } from './room.model';

export class SubBooking {
  constructor(date, room: Room) {
    this.room = room;
    this.date = date;
    this.discount = 0;
    this.advance = 0;
    this.commission = 0;
  }
  date: Date;
  payablePrice: number;
  discount: number;
  advance: number;
  due: number;
  commission: number;
  paid: boolean;
  room: Room;
}
