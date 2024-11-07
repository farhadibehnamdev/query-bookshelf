export interface Book {
  id: number;
  title: string;
  img: string;
  rating: number;
}

export interface SearchTerm {
  param_search_term?: string;
  param_publish_date?: number;
  param_rating?: number;
  param_pages?: number;
  param_genre?: string;
  param_bookFormat?: string;
}
