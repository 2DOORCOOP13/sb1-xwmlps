export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  file_url: string;
  preview_url: string;
  downloads: number;
  rating: number;
  is_free: boolean;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface ProductFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  file: File | null;
  preview_image: File | null;
  is_free: boolean;
}