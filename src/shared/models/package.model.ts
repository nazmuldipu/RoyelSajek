import { Sort } from './sort.model';

// import { Sort } from 'src/shared/model/sort.model';

export interface Package {
  id: number;
  created: number;
  lastUpdated: number;

  imagePaths: string[];
  packagePlans: PackagePlan[];
  packageRating: PackageRating;
  // packageRatings: string[];
  title: string;
  shortTag: string;
  destinations: string[];
  place: string;
  departurePlace: string;
  departureDate: any;
  departureTime: any;
  returnDate: any;
  returnTime: any;
  duration: string;
  price: number;
  active: boolean;
  include: string[];
  exclude: string[];
  description: string;
  spots: string[];
  category: string;
  lastBookingDate: any;
  maplink: string;
}

export interface PackagePlan {
  head: string;
  description: string;
  points: string[];
}

export interface PackageRating {
  text: string;
  rating: number;
  comfort: number;
  food: number;
  hospitality: number;
  hygiene: number;
  reception: number;
  average: number;
}

export class PackagePage {
  constructor(
    public content?: Package[],
    public first?: boolean,
    public last?: boolean,
    public number?: number,
    public numberOfElements?: number,
    public size?: number,
    public sort?: Sort[],
    public totalElements?: number,
    public totalPages?: number
  ) {}
}

export class PackageRequest {
  packageId: number;
  name: string;
  email: string;
  phone: string;
  numberOfTicket: number;
  message: string;
}
