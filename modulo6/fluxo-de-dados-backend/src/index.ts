import express, { Request, Response } from "express"
import cors from "cors"
import { v4 as generateId } from "uuid"
import { Errors } from "./errors"
import { Product, products } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (request: Request, response: Response) => {
    response.status(200).send("Sucesso")
    console.log("API bateu")
})

app.post("/products", (request: Request, response: Response) => {
    try {
        const productName: string = request.body.name
        const productPrice: number = request.body.price

        if (productName && productPrice <= 0) {
            throw new Error(Errors.INVALID_PARAMETERS.message)
        }

        if (!productName || !productPrice) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        if (
            typeof productName !== "string" ||
            typeof productPrice !== "number"
        ) {
            throw new Error(Errors.INVALID_PARAMETERS_TYPES.message)
        }

        const newProduct: Product = {
            id: generateId(),
            name: productName,
            price: productPrice,
        }

        products.push(newProduct)

        response.status(201).send(products)
    } catch (error: any) {
        switch (error.message) {
            case Errors.MISSING_PARAMETERS.message:
                response
                    .status(Errors.MISSING_PARAMETERS.status)
                    .send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.INVALID_PARAMETERS.message:
                response
                    .status(Errors.INVALID_PARAMETERS.status)
                    .send(Errors.INVALID_PARAMETERS.message)
                break
            case Errors.INVALID_PARAMETERS_TYPES.message:
                response
                    .status(Errors.INVALID_PARAMETERS_TYPES.status)
                    .send(Errors.INVALID_PARAMETERS_TYPES.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

app.get("/products", (request: Request, response: Response) => {
    const search: any = request.query.search

    try {
        if (search) {
            const filterProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(search.toLowerCase())
            })
            return response.status(200).send(filterProducts)
        } else {
            return response.status(200).send(products)
        }
    } catch {
        response
            .status(Errors.SOMETHING_WENT_WRONG.status)
            .send(Errors.SOMETHING_WENT_WRONG.message)
    }
})

app.put("/products/:productId", (request: Request, response: Response) => {
    try {
        const productId: string = request.params.productId
        const newProductPrice: number = request.body.price
        const newProductName: string = request.body.name

        let findProduct = products.find((product) => product.id === productId)

        if (!findProduct) {
            throw new Error(Errors.PRODUCT_NOT_FOUND.message)
        }

        if (newProductPrice <= 0 && typeof newProductPrice === "number") {
            throw new Error(Errors.INVALID_PARAMETERS.message)
        }

        if (!newProductPrice && !newProductName) {
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        if (!newProductName && typeof newProductPrice !== "number") {
            throw new Error(Errors.INVALID_PARAMETERS_TYPE.message)
        }

        if (newProductPrice && !newProductName) {
            findProduct.price = newProductPrice

            return response.status(200).send(products)
        } else if (!newProductPrice && newProductName) {
            findProduct.name = newProductName
            return response.status(200).send(products)
        } else {
            findProduct.name = newProductName
            findProduct.price = newProductPrice

            return response.status(200).send(products)
        }
    } catch (error: any) {
        switch (error.message) {
            case Errors.INVALID_PARAMETERS.message:
                response
                    .status(Errors.INVALID_PARAMETERS.status)
                    .send(Errors.INVALID_PARAMETERS.message)
                break
            case Errors.MISSING_PARAMETERS.message:
                response
                    .status(Errors.MISSING_PARAMETERS.status)
                    .send(Errors.MISSING_PARAMETERS.message)
                break
            case Errors.INVALID_PARAMETERS_TYPE.message:
                response
                    .status(Errors.INVALID_PARAMETERS_TYPE.status)
                    .send(Errors.INVALID_PARAMETERS_TYPE.message)
                break
            case Errors.PRODUCT_NOT_FOUND.message:
                response
                    .status(Errors.PRODUCT_NOT_FOUND.status)
                    .send(Errors.PRODUCT_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

app.delete("/products/:productId", (request: Request, response: Response) => {
    try {
        const productId: string = request.params.productId
        const findProductId = products.find(
            (product) => product.id === productId
        )

        if (!findProductId) {
            throw new Error(Errors.PRODUCT_NOT_FOUND.message)
        }

        products.forEach((product, index, array) => {
            if (product.id === productId) {
                array.splice(index, 1)
            }
        })

        response.status(200).send(products)
    } catch (error: any) {
        switch (error.message) {
            case Errors.PRODUCT_NOT_FOUND.message:
                response
                    .status(Errors.PRODUCT_NOT_FOUND.status)
                    .send(Errors.PRODUCT_NOT_FOUND.message)
                break
            default:
                response
                    .status(Errors.SOMETHING_WENT_WRONG.status)
                    .send(Errors.SOMETHING_WENT_WRONG.message)
        }
    }
})

app.listen(3003, () => {
    console.log("Server on...")
})
