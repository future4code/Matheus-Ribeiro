enum GENRE {
  ACTION = "Ação",
  DRAMA = "Drama",
  COMEDY = "Comédia",
  ROMANCE = "Romance",
  HORROR = "Terror",
}

type MovieInfo = {
  name: string
  releaseYear: number
  genre: GENRE
  score?: number
}

const movieInformation: (
  name: string,
  releaseYear: number,
  genre: GENRE,
  score?: number
) => MovieInfo = (name, releaseYear, genre, score) => {
  const movieInfo: MovieInfo = {
    name: name,
    releaseYear: releaseYear,
    genre: genre,
    score: score,
  }

  return movieInfo
}

console.log(movieInformation("Shrek", 2001, GENRE.COMEDY, 100))
