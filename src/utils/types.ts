export type BreedType = {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image?: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

export type CatImageType = {
  id: string;
  url: string;
};

export type ImageSizesType = 'full' | 'med' | 'small' | 'thumb';
export type ImageOrderType = 'RANDOM' | 'DESC' | 'ASC';

export type ImageRequestType = {
  size?: ImageSizesType;
  mime_types?: [string];
  order?: ImageOrderType;
  limit?: number;
  page?: number;
  category_ids?: [number];
  format?: 'json' | 'src';
  breed_id?: string;
};

export type FavouriteType = {
  image_id: string;
  url: string;
  favourite_id: string;
};

export type FavouriteResponseType = {
  created_at: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  sub_id: string;
  user_id: string;
};
