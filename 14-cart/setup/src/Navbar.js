import React from 'react'
import { useGlobalContext } from './context'
const Navbar = () => {
  const {amount} = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.44 187.77"><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_22" data-name="Layer 22"><path d="M212.19,10c-17.54-9-49.2-15.75-75-3-22.36,11.05-22.43,27.9-43,34-29.51,8.75-47.5-20.59-67-13-33.73,13.13-36.85,123-5,136,15.88,6.47,26.18-17,59-26,72.7-20,128.37,65.88,162,47C277.9,165.55,275.2,42.3,212.19,10Zm1,109c-11.24,8.62-27.75-8.41-68-12-9-.8-21.43-1.83-37,1-33.39,6.06-42,22.77-56,18-18.63-6.36-27.85-44.35-17-54,7.78-6.92,19.53,6.4,44,6,34.13-.55,39.7-26.93,72-29,27.83-1.78,60.23,15.46,67,40C220.54,97.55,221.41,112.74,213.19,119Z" style={{fill:'#dcec0a'}}/></g></g></svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
