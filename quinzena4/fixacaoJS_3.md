```function calculaNota(ex, p1, p2) {
  const notaFinal = (ex + p1 + p2) / 3
  
  if (notaFinal >= 9) {
    return "A"
  } else if (notaFinal >= 7.5) {
    return "B"
  } else if (notaFinal >= 6) {
    return "C"
  } else {
    return "D"
  }
}```