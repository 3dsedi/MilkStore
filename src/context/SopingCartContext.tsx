import React,{createContext, ReactNode, useContext} from 'react'


type ShopingCartProviderProps ={
  children : ReactNode
}

type ShopingCartContext = {
  getItemQuantity :  (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShopingCartContext = createContext({} as ShopingCartContext)
export const useShopingCart = () => {
  return (
    useContext (ShopingCartContext)
  )
}

export const ShopingCartProvider = ({children}: ShopingCartProviderProps) => {
  const [cartItems, set]
  return (
    <ShopingCartContext.Provider value={{}}>
      {children}
      </ShopingCartContext.Provider>
  )
}