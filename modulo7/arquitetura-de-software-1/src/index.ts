import { app } from './app'
import { deleteUserController } from './controller/DeleteUserController'
import { getUserController } from './controller/GetUserController'
import { createUserController } from './controller/PostUserController'

app.get('/all', getUserController)
app.post('/user', createUserController)
app.delete('/delete/:id', deleteUserController)
