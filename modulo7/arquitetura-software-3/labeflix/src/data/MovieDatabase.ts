import { CreateMovieDatabaseDTO } from '../models/movie/CreateMovieDatabaseDTO'
import { MovieDTO } from '../models/movie/MovieDTO'
import { BaseDatabase } from './BaseDatabase'

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_MOVIE'

  async create({
    id,
    title,
    description,
    durationInMinutes,
    yearOfRelease
  }: MovieDTO): Promise<void> {
    const movie: CreateMovieDatabaseDTO = {
      id,
      title,
      description,
      duration_in_minutes: durationInMinutes,
      year_of_release: yearOfRelease
    }

    await BaseDatabase.connection(MovieDatabase.TABLE_NAME).insert(movie)
  }
}
