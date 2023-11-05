export type FetchT = {
  docs: FilmItem[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export type FilmItem = {
  id: number;
  name: string;
  poster: string | null;
  rating: number | 0;
  shortDescription: string | "";
  year: number | null;
  genres: string[];
  movieLength: number | 0;
}