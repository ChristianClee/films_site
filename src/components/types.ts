export type infoFilmT = {
  infoFilm: {
    backdrop: {
      previewUrl: string
    },
    description: string,
    shortDescription: string,
    genres: { name: string }[],
    movieLength: number,
    name: string,
    rating: {
      await: null | number
      filmCritics: null | number
      imdb: null | number
      kp: null | number
      russianFilmCritics: null | number
    }
    type: string
    year: number
    poster: { previewUrl: string }
    trailers: {
      url: string, 
      name: string,
      site: string,
      type: string,
    }[]
    watchability: CinemaT

  }
}



type PosterT = {
  previewUrl: string| null
  url: string | null;
}
type GenresT = {
  name: string | null
}
type RaitingT = {
  imdb: number | null;
  kp: number | null;
  await: null | null;
  filmCritics: number | null;
  russianFilmCritics: number | null;
}
type TrallerT = {
    name: string | null;
    site: string | null;
    url: string | null;
}
type VideoT = {
  trailers: TrallerT[] | null
}
type BackdropT = {
  previewUrl: string | null;
  url: string | null;
}



type CinemaT = {
  items: ItemT[]
}
export type ItemT = {
  logo: {
  url: string | null
  };
  name: string | null;
  url: string | null;
}

export type TipeT = {
  description: string | null;
  enName: string | null;
  enProfession: string | null;
  id: number | null;
  name: string | null;
  photo: string | null;
  profession: string | null;
}


export type PicturesId = {
  id: number | null;
  poster: PosterT | null;
  genres: GenresT[] | null;
  rating: RaitingT | null;
  name: string | null;
  backdrop: BackdropT | null;
  description: string | null;
  videos: VideoT | null;
  year: number | null;
  watchability: CinemaT;
  persons: TipeT[];
}