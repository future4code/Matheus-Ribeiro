import { Request, Response } from 'express'
import { UserCreateBusiness } from '../../business/user-business/UserCreateBusiness'
import { UserCreateRequestDTO } from '../../models/user/UserCreateRequestDTO'

export class UserCreateController {
  constructor(private userCreateBusiness: UserCreateBusiness) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body

      const user: UserCreateRequestDTO = {
        name,
        email,
        password
      }

      this.userCreateBusiness.execute(user)
      res.status(200).send({ message: 'User created successfully' })
    } catch (error: any) {
      res.status(400).send({
        message: error.sqlMessage || error.message
      })
    }
  }
}
