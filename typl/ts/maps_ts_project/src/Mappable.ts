

export interface Mappable {
    location: {
      lat: number;
      lng: number;
  };
    colorLabel: string;
    name?: string;
    companyName?: string;
    coords: number[];
    clickHandler(e: Event): void;
  }