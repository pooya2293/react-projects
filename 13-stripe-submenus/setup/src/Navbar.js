import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
	const{openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
	const dispplaySubmenu =(e)=>{
		console.log(e.target) //each item when hover show this in console-->//<button class="link-btn">company</button> //<button class="link-btn">developers</button>
		openSubmenu()
	}
	return(
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className='nav-logo' alt="stripe" />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className='link-btn' onMouseOver={dispplaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={dispplaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={dispplaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>sign in</button>
			</div>
		</nav>
	)
}

export default Navbar
