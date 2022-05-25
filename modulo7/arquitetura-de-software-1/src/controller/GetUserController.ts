import { Request, Response } from 'express'
import { GetUserBusiness } from '../business/GetUserBusiness'
import { KnexGetUserDatabase } from '../data/knex/user/KnexGetUserDatabase'

export const getUserController = async (req: Request, res: Response) => {
    try {
      const knexGetUserDatabase = new KnexGetUserDatabase()
      const getUserBusiness = new GetUserBusiness(knexGetUserDatabase)

      const result = await getUserBusiness.execute()
  
      res.status(200).send(result)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

