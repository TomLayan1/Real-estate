export interface Property {
  externalID: string;
  coverPhoto: {
    url: string;
  };
  name: string;
  price: number;
  rentFrequency: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: {
    name: string;
    logo: {
      url: string;
    }
  };
  isVerified: boolean
}

interface photosType {
  id: number;
  title: string;
  url: string
}

interface locationType {
  id: number,
  name: string
}

interface amenityItem{
    text: string
}

interface amenityGroup {
  amenities: amenityItem[];
}

export interface PropertyDetail {
  externalID: string;
  coverPhoto: {
    url: string;
    title: string
  };
  description: string
  price: number;
  rentFrequency: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: {
    name: string;
    logo: {
      url: string;
    }
  };
  phoneNumber: number;
  photos: photosType[];
  location: locationType[];
  amenities: amenityGroup[];
  furnishingStatus: string;
  purpose: string;
  type: string;
  isVerified: boolean
}

export interface ContactType {
  name: string;
  email: string;
  country: string;
  message: string
}