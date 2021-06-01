import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
	const {closeSubmenu} = useGlobalContext()
  return (
  	<section className='hero'>
  		<div className="hero-center">
  			<article className='hero-info'>
  				<h4>peyment intructore peyment from internet</h4>
  				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, nam! Nam cupiditate adipisci reprehenderit explicabo quisquam repellendus enim recusandae nobis.</p>
  				<button className='btn'>start now</button>
  			</article>
  			<article className="hero-images">
  				<img src={phoneImg} alt='phone' className="phone-img" />
  			</article>
  		</div>
  	</section>
  )
}

export default Hero
