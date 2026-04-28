export type MediaType = 'BOOK' | 'MOVIE' | 'TV_SERIES';

export interface MediaItem {
  id: number;
  title: string;
  type: MediaType;
  authorOrDirector: string;
  rating: number;
  list: string;
  pagesOrDuration?: string;
  review?: string;
}

export type CreateMediaDTO = Omit<MediaItem, 'id'>; 
