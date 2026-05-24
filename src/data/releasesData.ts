export interface Release {
  id: string;
  artistId: string;
  artistName: string;
  title: string;
  label: string;
  subtitle: string;
  image: string;
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
  soundcloud?: string;
}

export const releases: Release[] = [
  {
    id: "monsterr",
    artistId: "christopher-lucio",
    artistName: "not lucio",
    title: "MONSTERR",
    label: "NEW SINGLE",
    subtitle: "a single by not lucio",
    image: "https://storage.googleapis.com/forcotidorrecords/Screenshot%202026-05-23%20184627.png",
    spotify: "https://open.spotify.com/album/4oz1ke61kvYxRXsSVwICCU",
    appleMusic: "https://geo.music.apple.com/album/monsterr-single/6771119730",
    youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nnsQg10P9whljXACj0c63umZaGUbenDfo"
  },
  {
    id: "only-me",
    artistId: "z3nith",
    artistName: "Z3NITH",
    title: "ONLY ME",
    label: "NEW ALBUM",
    subtitle: "The new album from Z3NITH",
    image: "https://storage.googleapis.com/forcotidorrecords/Screenshot%202026-05-23%20193148.png",
    soundcloud: "https://on.soundcloud.com/1jK8eoBijhFzxdJXae"
  },
  {
    id: "broken",
    artistId: "greta-marie",
    artistName: "Greta Marie",
    title: "BROKEN",
    label: "NEW ALBUM",
    subtitle: "The debut album from Greta Marie",
    image: "https://storage.googleapis.com/forcotidorrecords/Screenshot%202026-05-23%20190641.png",
    spotify: "https://open.spotify.com/album/5BJaX6MsZNhMnYc7ST584G",
    appleMusic: "https://music.apple.com/album/broken/6764432463",
    youtube: "https://www.youtube.com/playlist?list=OLAK5uy_korCM1S3yK1lU-FytGmKQ4OPQDAlcU4QU"
  },
  {
    id: "what-do-i-have-to-ask",
    artistId: "lee-lee-j",
    artistName: "Lee Lee J",
    title: "what do i have to ask",
    label: "NEW SINGLE",
    subtitle: "the new single from lee lee j",
    image: "https://storage.googleapis.com/forcotidorrecords/Screenshot%202026-04-27%20202207.png",
    spotify: "https://open.spotify.com/album/10npxfXmzYhx9cy83VoONt",
    appleMusic: "https://music.apple.com/us/album/what-do-i-have-to-ask-single/1892176753",
    youtube: "https://www.youtube.com/playlist?list=PLULgfAvIvwb3rKp6LgkiKFDuVKBEVeZNe"
  }
];
