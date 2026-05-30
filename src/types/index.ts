export interface Recipe {
  id: number;
  title: string;
  description: string;
  time: string;
  calories: string;
  rating: number;
  reviewCount: number;
  image?: string;
}

export interface Review {
  id: number;
  title: string;
  text: string;
  user: string;
  date: string;
  rating: number;
}

export interface Filter {
  label: string;
  value: string;
}
