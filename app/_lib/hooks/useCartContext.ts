'use client'

import { CartContext } from "@/app/_providers/cart-provider";
import { Product } from "@prisma/client";
import { useContext, useEffect, useState } from "react";

export default function useCartContext() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('Contexto não foi encontrado.');
  }

  const { cart, setCart } = cartContext;
  const [cartValue, setCartValue] = useState(0)

  function findProduct(product: Product) {
    return cart.find(({ item }) => item.id === product.id);
  }

  function findIndex(product: Product) {
    return cart.findIndex(({ item }) => item.id === product.id);
  }

  function deleteProduct(product: Product) {
    const newCart = cart.filter(({ item }) => item.id !== product.id);
    setCart(newCart);
  }

  function addProduct(newProduct: Product) {
    const repeatedProduct = findProduct(newProduct);

    if (repeatedProduct) {
      const updatedCart = cart.map(
        item => item.item.id === newProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)
    } else {
      setCart([...cart, { item: newProduct, quantity: 1 }])
    }
  }

  function removeProduct(newProduct: Product) {
    const repeatedProduct = findProduct(newProduct);

    if (repeatedProduct) {
      const index = findIndex(newProduct);

      if (cart[index].quantity > 0) {
        const carrinhoAtualizado = cart.map(
          item => item.item.id === newProduct.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        setCart(() => carrinhoAtualizado);

        if (carrinhoAtualizado[index].quantity === 0) {
          deleteProduct(newProduct);
        }
      }
    } else {
      return;
    }
  }

  function resetCart() {
    setCart([])
  }

  useEffect(() => {
    setCartValue(
      cart.reduce((total, { item, quantity }) => {
        return total + Number(item.price) * quantity;
      }, 0)
    );
  }, [cart])
  

  return {
    cart,
    cartValue,
    addProduct,
    removeProduct,
    deleteProduct,
    resetCart
  }
}