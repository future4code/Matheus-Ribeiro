import { MovieDatabase } from '../data/MovieDatabase'
import { BadRequest } from '../error/BadRequest'
import { CreateMovieDTO } from '../models/movie/CreateMovieDTO'
import { MovieDTO } from '../models/movie/MovieDTO'
import { generateId } from '../services/id-generator'

export class MovieBusiness {
  async create({
    title,
    description,
    durationInMinutes,
    yearOfRelease
  }: CreateMovieDTO): Promise<void> {
    try {
      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new BadRequest()
      }

      const movieDatabase = new MovieDatabase()
      const id = generateId()

      const movie: MovieDTO = {
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      await movieDatabase.create(movie)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
