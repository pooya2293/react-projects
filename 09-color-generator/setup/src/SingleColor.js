import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index,rgb,weight }) => {
	const bcg = rgb.join(',')
	console.log(rgb)//[255, 255, 255] //[253, 253, 253]
	console.log(bcg)//255,255,255 //253,253,253
  return <h4>single color</h4>
}

export default SingleColor
