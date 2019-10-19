import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/shared/models/room.model';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent {
  @Input() room: Room;
  @Output() details = new EventEmitter<number>();
  @Output() booking = new EventEmitter<number>();

  constructor() { }

  onRoomDetails(roomId: number) {
    this.details.emit(roomId);
  }

  onBookNow(roomId: number) {
    this.booking.emit(roomId);
  }
}
