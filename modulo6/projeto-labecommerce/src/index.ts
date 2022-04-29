import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProducts } from "./endpoints/postProducts";
import { postUsers } from "./endpoints/postUsers";

app.get("/users", getAllUsers)
app.post("/users", postUsers)
app.post("/products", postProducts)