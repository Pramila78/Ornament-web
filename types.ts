
export interface Product {
  id: number;
  name: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
  category_name?: string;
  rating?: number;
  reviews_count?: number;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: Product[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
