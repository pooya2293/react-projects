import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
	const[showLinks,setShowLinks] = useState(false)
	const linksContainerRef = useRef(null)
	const linksRef = useRef(null)

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect();
		console.log(linksHeight)//bottom: 394.60071563720703
								//height: 297.7430725097656
								//left: 0
								//right: 622.2222290039062
								// top: 96.8576431274414
								// width: 622.2222290039062
								// x: 0
								// y: 96.8576431274414
	}, [showLinks])
  return (
  	<nav>
  		<div className="nav-center">
  			<div className="nav-header">
  				<img src={logo} alt="logo" />
  				<button className={`${showLinks?"nav-toggle nav-toggle-click":"nav-toggle"}`} onClick={()=>setShowLinks(!showLinks)}>
  					<FaBars />
  				</button>
  			</div>
	  			<div className="links-container" ref={linksContainerRef}>
	  				<ul className="links" ref={linksRef}>
	  					{links.map((link)=>{
	  						const {id,url,text} = link
	  						return( 
	  							<li key={id}>
	  								<a href={url}>{text}</a>
	  							</li>)
	  					})}
	  				</ul>
	  			</div>
  			<ul className='social-icons'>
  				{social.map((item)=>{
  					const {id,url,icon} = item
  					return(
  						<li key={id}>
  							<a href={url}>{icon}</a>
  						</li>
  					)	  					
				})}
  			</ul>
  		</div>
  	</nav>
  )
}

export default Navbar