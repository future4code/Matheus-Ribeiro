export function generateDate(date: Date): string {
  const dateNow = {
    year: date.getFullYear(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
    hour: date.getHours().toString().padStart(2, '0'),
    minute: date.getMinutes().toString().padStart(2, '0'),
    second: date.getSeconds().toString().padStart(2, '0')
  }

  return `${dateNow.year}-${dateNow.month}-${dateNow.day} ${dateNow.hour}:${dateNow.minute}:${dateNow.second}`
}
