
import { ApiResponse, Product } from '../types';

const API_BASE_URL = 'https://api.khusindia.com/rest/api';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result: ApiResponse = await response.json();
    
    // Some APIs return data directly in an array, some in a "data" property.
    // Based on the prompt's provided URL, we handle both possibilities safely.
    if (Array.isArray(result)) {
      return result as unknown as Product[];
    }
    
    return result.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
