export type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  rating: number;
  authorOrDirector?: string; 
  coverUrl?: string;
  review?: string;
}
