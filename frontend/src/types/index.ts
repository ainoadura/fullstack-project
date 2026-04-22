export interface MediaItem {
  id: number;
  title: string;
  type: 'BOOK' | 'MOVIE' | 'TV_SERIES';
  authorOrDirector: string;
  rating: number;
  review: string;
  list: string;
  pagesOrDuration: string; 
}
