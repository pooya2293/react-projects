import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initailState = {
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initailState)

  const clearCart = ()=>{
    dispatch({ type: 'CLEAR_CART' })
  }
  const clearItem = (id)=>{
    dispatch({type: 'CLEAR_ITEM',payLoad:id})
  }
  const fetchData = async ()=>{
    dispatch({type:'LOADING'})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:'DISPLAY_ITEMS',payLoad:cart})
  }
  const togleAmount =(id,type)=>{
    dispatch({type:'TOGLE_AMOUNT',payLoad:{id,type}})
  }

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    dispatch({ type:'TOTAL' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        clearItem,
        togleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
