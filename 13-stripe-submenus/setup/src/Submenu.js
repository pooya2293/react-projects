import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
	// #3
	const{isSubmenuOpen,location} = useGlobalContext()
	const container = useRef(null)
	useEffect(() => {
		const submenu = container.current //link an element that we whant to change that style
		const {center,bottom} = location
		submenu.style.left = `${center}px`
		submenu.style.top = `${bottom}px`

	}, [location])
  return (
  	<aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={container} >
  		submenu
  	</aside>	
  )
}

export default Submenu 
