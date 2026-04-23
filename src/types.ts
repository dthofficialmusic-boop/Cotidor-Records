export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genre: string;
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseDate: string;
  catNo: string;
}
