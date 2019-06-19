import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Package } from './package.model';
@Injectable()
export class StaticDataSource {
  private products: Package[] = [
    {
      id: 2,
      created: 1560958768000,
      lastUpdated: 1560958768000,
      imagePaths: [
        'https://api.hotelswave.com/api/v1/package/3/images/0',
        'https://api.hotelswave.com/api/v1/package/3/images/1'
      ],
      packagePlans: [],
      packageRating: null,
      title: 'Sajek Tour',
      shortTag: 'Sajek',
      destinations: ['Sajek Valley'],
      place: 'SAJEK',
      departurePlace: 'Fakira pool Bus Stand',
      departureDate: '2019-6-27',
      departureTime: '22:00',
      returnDate: '2019-6-30',
      returnTime: '6:00',
      duration: '3 Nights & 2 Days',
      price: 4000,
      active: true,
      include: [
        'Transport ',
        'Accommodation',
        'Meals',
        'Entry Ticket',
        'Chader Gari '
      ],
      exclude: ['Mineral Water ', 'Personal Cost'],
      description: '.',
      spots: [
        'Sajek Valley',
        'Konglak Para',
        'Alu tila Guha',
        'Tareng Hallipad'
      ],
      category: 'Family Tour',
      lastBookingDate: '2019-6-22'
    },
    {
      id: 3,
      created: 1560958768000,
      lastUpdated: 1560958768000,
      imagePaths: [
        'https://api.hotelswave.com/api/v1/package/1/images/0',
        'https://api.hotelswave.com/api/v1/package/1/images/1'
      ],
      packagePlans: [],
      packageRating: null,
      title: 'Sajek Tour',
      shortTag: 'Sajek',
      destinations: ['Sajek Valley'],
      place: 'SAJEK',
      departurePlace: 'Fakira pool Bus Stand',
      departureDate: '2019-6-27',
      departureTime: '22:00',
      returnDate: '2019-6-30',
      returnTime: '6:00',
      duration: '3 Nights & 2 Days',
      price: 4000,
      include: [
        'Transport ',
        'Accommodation',
        'Meals',
        'Entry Ticket',
        'Chader Gari '
      ],
      exclude: ['Mineral Water ', 'Personal Cost'],
      description: '.',
      spots: [
        'Sajek Valley',
        'Konglak Para',
        'Alu tila Guha',
        'Tareng Hallipad'
      ],
      category: 'Family Tour',
      lastBookingDate: '2019-6-22',
      active: true
    },
    {
      id: 1,
      created: 1560958776000,
      lastUpdated: 1560958776000,
      imagePaths: [],
      packageRating: null,
      packagePlans: [
        {
          head: 'Night-1: Reporting & Bus Starts to Teknaf. ',
          description: 'Night-1: Reporting & Bus Starts to Teknaf. ',
          points: [
            'Night-1: Reporting & Bus Starts to Teknaf. ',
            'Night-1: Reporting & Bus Starts to Teknaf. ',
            'Night-1: Reporting & Bus Starts to Teknaf. '
          ]
        }
      ],
      title: 'Saint Martin',
      shortTag: 'Saint Martin, Chera Diwp',
      destinations: ['Night-1: Reporting & Bus Starts to Teknaf. '],
      place: 'SAINT MARTIN',
      departurePlace: 'Fakirapool',
      departureDate: '2019-11-7',
      departureTime: '7:00',
      returnDate: '2019-11-10',
      returnTime: '6:00',
      duration: '3 Nights & 2 Days',
      price: 5300,
      include: ['Night-1: Reporting & Bus Starts to Teknaf. '],
      exclude: ['Night-1: Reporting & Bus Starts to Teknaf. '],
      description:
        'Time Distribution:  \nNight-1: Reporting & Bus Starts to Teknaf. \nDay-1: Arriving Teknaf. Journey to Saint Martin Island. Hotel Check-in, Lunch, Half Day Saint Martin Sight Seeing.\nNight-2: Night Stay in Hotel.\nDay-2: After Breakfast Sight Seeing in Chera Dwip, Lunch, Back to Teknaf\nNight-3: Over Night Return Bus Journey to Dhaka.\n\nHotel\nSea View Resort & Sports or Mermaid Resort\n\nMeal: Breakfast, Lunch, Dinner, Bar B.Q. \nDay-1: Saint Martin\nBreakfast: Dal/Vegetable, Egg & Parata.\nLunch: Coral Fish/Surma/Sundhori/Chicken, Vegetable, Varta, Dal & Plain Rice.\nDinner: Chicken B.B.Q., Parata, Salad, Cold Drinks. \nDay-2: Saint Martin\nBreakfast: Dal/Vegetable, Egg & Parata or Egg Khichuri.\nLunch: Coral Fish/Surma/Sundhori/Chicken, Vegetable, Varta, Dal & Plain Rice.',
      spots: ['Night-1: Reporting & Bus Starts to Teknaf. '],
      category: 'Couple Tour',
      lastBookingDate: '2019-10-31',
      active: true
    }
  ];
  getProducts(): Observable<Package[]> {
    return from([this.products]);
  }
}
