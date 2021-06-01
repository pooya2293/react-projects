import React from 'react'
import phoneImg from './images/phone.svg'
// #3
import {useGlobalContext} from './context'

const Hero = () => {
	const data = useGlobalContext()
	console.log(data) // {Object{closeSidebar: () =>...,closeSubmenu: () => ... , isSidebarOpen: true,isSubmenuOpen: true , and ... }}
  return <h2>hero component</h2>
}

export default Hero
