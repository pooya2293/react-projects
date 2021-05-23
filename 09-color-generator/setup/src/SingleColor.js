import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index,rgb,weight,hex }) => {
	const [alert,setAlert] = useState(false)//i did'nt understant
	const bcg = rgb.join(',')
	
  return (
  	<article className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
  		<p className="percent-value">{weight}%</p>
  		<p className='color-value'>{hex}</p>
  	</article>
  )
}

export default SingleColor
