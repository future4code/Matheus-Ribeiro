import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersByPage } from "./endpoints/getAllUsersByPage";
import { getAllUsersOrdered } from "./endpoints/getAllUsersOrdered";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType";

app.get("/users", getAllUsers)
app.get("/users/name", getUsersByName)
app.get("/users/sort", getAllUsersOrdered)
app.get("/users/page", getAllUsersByPage)
app.get("/users/:type", getUsersByType)



