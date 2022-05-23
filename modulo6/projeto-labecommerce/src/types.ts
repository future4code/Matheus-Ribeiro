export type User = {
   id: string,
   name: string,
   email: string,
   password: string
   purchases?: Purchase[]
}

export type Product = {
   id: string,
   name: string,
   price: number,
   imgUrl: string
}

export type Purchase = {
   id: string,
   userId?: string,
   productId?: string,
   productName: string,
   quantity: number,
   price: number,
   totalPrice: number
}