import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// #3
import {AppContext} from './context'
const Home = () => {
	const data = useContext(AppContext)
	console.log(data) //hello sagtoole
  return (
  	<main>
  		<button className='sidebar-toggle'><FaBars /></button>
  		<button className='btn'>show modal</button>
  	</main>
  )
}

export default Home
