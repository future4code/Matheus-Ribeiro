import { app } from './app'
import { postRouter } from './routes/post-router'
import { userRouter } from './routes/user-router'

app.use('/user', userRouter)
app.use('/post', postRouter)