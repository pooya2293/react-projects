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
  const increas = (id)=>{
    dispatch({type: 'INCREAS',payLoad:id})
  }
  const decrease = (id)=>{
    dispatch({type: 'DECREASE',payLoad:id})
  }

  const fetchData = async ()=>{
    dispatch({type:'LOADING'})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type:'DISPLAY_ITEMS',payLoad:cart})
  }
  useEffect(() => {
    dispatch({ type:'TOTAL' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        clearItem,
        increas,
        decrease
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
