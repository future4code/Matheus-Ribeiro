import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProducts } from "./endpoints/postProducts";
import { postPurchases } from "./endpoints/postPurchases";
import { postUsers } from "./endpoints/postUsers";


app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/users", postUsers)
app.post("/products", postProducts)
app.post("/purchases", postPurchases)
