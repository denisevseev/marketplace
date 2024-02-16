export interface MarketRead {
  id: number;
  incoterms: string;
  price: number;
  currency: string | null;
  minimal_quantity: number;
  buy_price: number;
  vat: any;
  sale_price: number;
  quantity: number;
  productName: string;
  manufacturerName: string;
  categoryId: number;
  categoryName: string;
  productSlug?: string;
  categorySlug?: string;
  categoryIcon?: string | null;
  productImage?: string | null;
  description: string;
  tnvedCode: number;
  productPrice: number;
  weight: number;
  size: number;
  files: any;
  category_fallback_name: string;
}
