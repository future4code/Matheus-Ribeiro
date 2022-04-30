import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import getAllPurchasesByUser from "./endpoints/getAllPurchasesByUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProducts } from "./endpoints/postProducts";
import { postPurchases } from "./endpoints/postPurchases";
import { postUsers } from "./endpoints/postUsers";


app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get("/users/:userId/purchases", getAllPurchasesByUser)
app.post("/users", postUsers)
app.post("/products", postProducts)
app.post("/purchases", postPurchases)
