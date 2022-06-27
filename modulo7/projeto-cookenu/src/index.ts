import { app } from './app'
import { recipeRouter } from './routes/recipe-router'
import { userRouter } from './routes/user-router'

app.use('/user', userRouter)
app.use('/recipe', recipeRouter)