const revertString: (palavra: string) => string = (palavra) => {
  return palavra.split("").reverse().join("")
}
console.log(revertString("typescript"))
