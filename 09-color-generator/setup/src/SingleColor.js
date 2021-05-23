import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index,rgb,weight,hexPaPa }) => {
	const [alert,setAlert] = useState(false)//i did'nt understant
	const bcg = rgb.join(',')
	// const hex = rgbToHex(...rgb)//way 1 for get hex
	
  return (
  	<article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}>
  		<p className="percent-value">{weight}%</p>
  		<p className='color-value'>#{hexPaPa}</p>
  	</article>
  )
}

export default SingleColor
