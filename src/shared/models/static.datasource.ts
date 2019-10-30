import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Package } from "./package.model";
@Injectable()
export class StaticDataSource {
  private products: Package[] = [
    {
      id: 2,
      created: 1560958768000,
      lastUpdated: 1560958768000,
      imagePaths: [
        "https://api.hotelswave.com/api/v1/package/3/images/0",
        "https://api.hotelswave.com/api/v1/package/3/images/1"
      ],
      packagePlans: [
        {
          head: "Night-01",
          description: "",
          points: [
            "Reporting at 9.00 pm",
            "Journey to Khagrachari at 10.00 pm from Fakirapool/Kalabagan."
          ]
        },
        {
          head: "Day-01",
          description: "",
          points: [
            "Arriving Khagrachari at 7.00-8.00 am.",
            "Breakfast 8.00-9.00 am",
            "Journey to Sajek with Army Escort at 9.00 am",
            "Hotel Check-in. After Journey to Sajek by Chader GHotel check-in at 12.30-1.00 pm",
            "Lunch at 2.00-2.30 pm",
            "After lunch sightseeing in Konglak Pahar",
            "RuiLui Para & Helipad"
          ]
        },
        {
          head: "Night-02",
          description: "",
          points: ["Night Stay in Sajek"]
        },
        {
          head: "Day-02",
          description: "",
          points: [
            "Breakfast at 8.00-9.00 am",
            "Hotel Check-out at 9.00-10.00 am",
            "Back to Khagrachari with Army Escort.",
            "On the way sightseeing Hazachara Waterfall.",
            "Arriving Khagrachari town at 2.00-2.30 pm",
            "Lunch at 2.30-3.00 pm",
            "After lunch sightseeing Alutila Cave,",
            "Richang Waterfall & Tareng.",
            "Dinner at 8.00-9.00 pm"
          ]
        },
        {
          head: "Night-03",
          description: "",
          points: ["Over Night Return Bus Journey to Dhaka from Khagrachari."]
        },
        {
          head: "Includes",
          description: "",
          points: [
            "Hotel: Royal Sajek Resort, Grand Sajek Resort or Same Standard Non A/C",
            "Bus: Non A/C Chair Coach bus",
            "Meal: Standard 3 Times Meal; Breakfast-02, Lunch-02, Dinner-02 (01 B.B.Q. Dinner)",
            "Chader Gari: Khagrachari-Sajek-Khagrachari",
            "Entry: All entry tickets",
            "Tour Manager: Tour Manager for managing the tour"
          ]
        },
        {
          head: "Excludes",
          description: "",
          points: ["Personal Expenses"]
        }
      ],
      packageRating: null,
      title: "Family package",
      shortTag: "Sajek",
      destinations: ["Sajek Valley"],
      place: "SAJEK",
      departurePlace: "Fakira pool Bus Stand",
      departureDate: "2019-6-27",
      departureTime: "22:00",
      returnDate: "2019-6-30",
      returnTime: "6:00",
      duration: "3 Nights & 2 Days",
      price: 4000,
      active: true,
      include: [
        "Transport ",
        "Accommodation",
        "Meals",
        "Entry Ticket",
        "Chader Gari "
      ],
      exclude: ["Mineral Water ", "Personal Cost"],
      description: ".",
      spots: [
        "Sajek Valley",
        "Konglak Para",
        "Alu tila Guha",
        "Tareng Hallipad"
      ],
      category: "Family Tour",
      lastBookingDate: "2019-6-22",
      maplink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d234613.25404065262!2d92.0038459599833!3d23.24919631166757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3752ef5fe3dcf379%3A0x4cd93e1208cbe425!2sKhagrachhari!3m2!1d23.110820999999998!2d91.9905996!4m5!1s0x375262b8bb0913df%3A0xe3fbbfec53ee33a6!2sRoyal%20Sajek%2C%20Beside%20Helipad%2C%20Dighinala%20-%20Sajek%20Rd%2C%20Sajek%204500!3m2!1d23.3870254!2d92.2905578!5e0!3m2!1sen!2sbd!4v1572429114427!5m2!1sen!2sbd"
    },
    {
      id: 3,
      created: 1560958768000,
      lastUpdated: 1560958768000,
      imagePaths: [
        "https://api.hotelswave.com/api/v1/package/1/images/0",
        "https://api.hotelswave.com/api/v1/package/1/images/1"
      ],
      packagePlans: [],
      packageRating: null,
      title: "Honeymoon Package",
      shortTag: "Sajek",
      destinations: ["Sajek Valley"],
      place: "SAJEK",
      departurePlace: "Fakira pool Bus Stand",
      departureDate: "2019-6-27",
      departureTime: "22:00",
      returnDate: "2019-6-30",
      returnTime: "6:00",
      duration: "3 Nights & 2 Days",
      price: 4000,
      include: [
        "Transport ",
        "Accommodation",
        "Meals",
        "Entry Ticket",
        "Chader Gari "
      ],
      exclude: ["Mineral Water ", "Personal Cost"],
      description: ".",
      spots: [
        "Sajek Valley",
        "Konglak Para",
        "Alu tila Guha",
        "Tareng Hallipad"
      ],
      category: "Family Tour",
      lastBookingDate: "2019-6-22",
      active: true,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d234613.25404065262!2d92.0038459599833!3d23.24919631166757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3752ef5fe3dcf379%3A0x4cd93e1208cbe425!2sKhagrachhari!3m2!1d23.110820999999998!2d91.9905996!4m5!1s0x375262b8bb0913df%3A0xe3fbbfec53ee33a6!2sRoyal%20Sajek%2C%20Beside%20Helipad%2C%20Dighinala%20-%20Sajek%20Rd%2C%20Sajek%204500!3m2!1d23.3870254!2d92.2905578!5e0!3m2!1sen!2sbd!4v1572429114427!5m2!1sen!2sbd"
    },
    {
      id: 1,
      created: 1560958776000,
      lastUpdated: 1560958776000,
      imagePaths: [],
      packageRating: null,
      packagePlans: [
        {
          head: "Night-1: Reporting & Bus Starts to Teknaf. ",
          description: "Night-1: Reporting & Bus Starts to Teknaf. ",
          points: [
            "Night-1: Reporting & Bus Starts to Teknaf. ",
            "Night-1: Reporting & Bus Starts to Teknaf. ",
            "Night-1: Reporting & Bus Starts to Teknaf. "
          ]
        }
      ],
      title: "Saint Martin",
      shortTag: "Saint Martin, Chera Diwp",
      destinations: ["Night-1: Reporting & Bus Starts to Teknaf. "],
      place: "SAINT MARTIN",
      departurePlace: "Fakirapool",
      departureDate: "2019-11-7",
      departureTime: "7:00",
      returnDate: "2019-11-10",
      returnTime: "6:00",
      duration: "3 Nights & 2 Days",
      price: 5300,
      include: ["Night-1: Reporting & Bus Starts to Teknaf. "],
      exclude: ["Night-1: Reporting & Bus Starts to Teknaf. "],
      description:
        "Time Distribution:  \nNight-1: Reporting & Bus Starts to Teknaf. \nDay-1: Arriving Teknaf. Journey to Saint Martin Island. Hotel Check-in, Lunch, Half Day Saint Martin Sight Seeing.\nNight-2: Night Stay in Hotel.\nDay-2: After Breakfast Sight Seeing in Chera Dwip, Lunch, Back to Teknaf\nNight-3: Over Night Return Bus Journey to Dhaka.\n\nHotel\nSea View Resort & Sports or Mermaid Resort\n\nMeal: Breakfast, Lunch, Dinner, Bar B.Q. \nDay-1: Saint Martin\nBreakfast: Dal/Vegetable, Egg & Parata.\nLunch: Coral Fish/Surma/Sundhori/Chicken, Vegetable, Varta, Dal & Plain Rice.\nDinner: Chicken B.B.Q., Parata, Salad, Cold Drinks. \nDay-2: Saint Martin\nBreakfast: Dal/Vegetable, Egg & Parata or Egg Khichuri.\nLunch: Coral Fish/Surma/Sundhori/Chicken, Vegetable, Varta, Dal & Plain Rice.",
      spots: ["Night-1: Reporting & Bus Starts to Teknaf. "],
      category: "Couple Tour",
      lastBookingDate: "2019-10-31",
      active: true,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d234613.25404065262!2d92.0038459599833!3d23.24919631166757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3752ef5fe3dcf379%3A0x4cd93e1208cbe425!2sKhagrachhari!3m2!1d23.110820999999998!2d91.9905996!4m5!1s0x375262b8bb0913df%3A0xe3fbbfec53ee33a6!2sRoyal%20Sajek%2C%20Beside%20Helipad%2C%20Dighinala%20-%20Sajek%20Rd%2C%20Sajek%204500!3m2!1d23.3870254!2d92.2905578!5e0!3m2!1sen!2sbd!4v1572429114427!5m2!1sen!2sbd"
    }
  ];
  getProducts(): Observable<Package[]> {
    return from([this.products]);
  }
}
