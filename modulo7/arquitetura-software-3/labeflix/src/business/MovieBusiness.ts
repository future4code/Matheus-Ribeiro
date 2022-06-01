import { MovieDatabase } from '../data/MovieDatabase'
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({ title, description, duration_in_minutes, year_of_release }: any): Promise<void> {
    try {
      if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new Error(
          'Dados inválidos (title, description, duration_in_minutes, years_of_release)'
        )
      }

      const movieDatabase = new MovieDatabase()
      const id = generateId()
      
      
        await movieDatabase.create({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
