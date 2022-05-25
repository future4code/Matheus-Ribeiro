import { Request, Response } from 'express'
import { GetUserBusiness } from '../business/GetUserBusiness'

export class GetUserController {
  public getUsers = async (req: Request, res: Response) => {
    try {
      const getUserBusiness = new GetUserBusiness()
      const users = await getUserBusiness.getUsers()
  
      res.status(200).send(users)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
