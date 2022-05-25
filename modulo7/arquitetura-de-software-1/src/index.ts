import { app } from './app'
import { GetUserController } from './controller/GetUserController'
import { PostUserController} from './controller/PostUserController'

const postUserController = new PostUserController()
const getUserController = new GetUserController()

app.get('/all', getUserController.getUsers)
app.post('/user', postUserController.createUser)


