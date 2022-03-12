import { isExportDeclaration } from "typescript"
import { checaItensDuplicados } from "./ex3"

describe("Checa itens duplicados", () => {
  test("retorna true para [a,a,b,c]", () => {
    const arrayTeste = checaItensDuplicados(["a", "a", "b", "c"])

    expect(arrayTeste).toEqual(true)
  })

  test("retorna false para [a,a,b,c]", () => {
    const arrayTeste = checaItensDuplicados(["a", "b", "c"])

    expect(arrayTeste).toEqual(false)
  })
})
