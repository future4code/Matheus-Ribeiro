export const Errors: { [key: string]: { status: number; message: string } } = {
    INVALID_PARAMETERS: {
        status: 422,
        message: "O userType deve ser ADMIN ou NORMAL",
    },
    USER_NOT_FOUND: { status: 404, message: "Usuário não encontrado." },
    MISSING_PARAMETERS: {
        status: 422,
        message: "Alguma informação está faltando, verifique os parâmentros.",
    },
}
