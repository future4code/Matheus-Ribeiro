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
    UNAUTHORIZED: {
        status: 401,
        message: "O usuário deve ter mais de 18 anos.",
    },
    USER_ALREADY_EXISTS: {
        status: 409,
        message: "Usuário com este CPF já possui conta.",
    },
    SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado." },
}
