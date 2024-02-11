import { Product } from "@prisma/client";

export default interface ICart {
  item: Product,
  quantity: number
}