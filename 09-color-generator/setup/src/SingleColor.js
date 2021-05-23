import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index,rgb,weight,hexPaPa }) => {
	const [alert,setAlert] = useState(false)//for showing copy to clipboard alert
	const bcg = rgb.join(',')
	// const hex = rgbToHex(...rgb)//way 1 for get hex
	const hexVal = `#${hexPaPa}`
	
  return (
  	<article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
  		setAlert(true)
  		navigator.clipboard.writeText(hexVal)
  	}} >
  		<p className="percent-value">{weight}%</p>
  		<p className='color-value'>{hexVal}</p>
  		{alert && <p className='alert'>copy to clipboard!</p>}
  	</article>
  )
}

export default SingleColor
