export const Errors: { [key: string]: { status: number; message: string } } = {
    INVALID_PARAMETERS: {
        status: 422,
        message: "O preço deve ser maior que 0",
    },
    PRODUCT_NOT_FOUND: { status: 404, message: "Produto não encontrado." },
    MISSING_PARAMETERS: {
        status: 422,
        message: "Alguma informação está faltando, verifique os parâmentros.",
    },
    INVALID_PARAMETERS_TYPES: {
        status: 422,
        message: `Verifique os parâmetros, o "name" dever ser do tipo "string" e o "price" deve ser do tipo "number"`,
    },
    INVALID_PARAMETERS_TYPE: {
        status: 422,
        message: `Verifique o parâmetro, o "price" deve ser do tipo "number"`,
    },
    SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado." },
}
