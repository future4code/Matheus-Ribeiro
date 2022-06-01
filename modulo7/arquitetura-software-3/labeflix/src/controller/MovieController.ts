import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'
import { CreateMovieDTO } from '../models/movie/CreateMovieDTO'

export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = req.body

      const movie: CreateMovieDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness()
      await movieBusiness.create(movie)

      res.status(201).send({ message: 'Filme cadastrado com sucesso' })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}
