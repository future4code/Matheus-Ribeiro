export const Errors: { [key: string]: { status: number; message: string } } = {
    INVALID_PARAMETERS: {
        status: 422,
        message: "A data de pagamento não pode ser inferior a data de hoje.",
    },
    USER_NOT_FOUND: { status: 404, message: "Usuário não encontrado." },
    INSUFFICIENT_BALANCE: {
        status: 406,
        message: "Saldo insulficiente",
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
