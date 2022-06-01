import { BaseDatabase } from './BaseDatabase'

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_MOVIE'

  async create({
    id,
    title,
    description,
    duration_in_minutes,
    year_of_release
  }: any): Promise<void> {
    await BaseDatabase.connection(MovieDatabase.TABLE_NAME).insert({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release
    })
  }
}
