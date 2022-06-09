import { app } from './app'
import { userRouter } from './routes/user-router'

app.use('/user', userRouter)