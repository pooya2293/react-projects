import React, { useState, useEffect } from 'react'
import {FaToggleOff,FaToggleOn} from 'react-icons/fa'

function Toggle({ isDark,setIsDark }) {

	return(
		<button className='absolute left-4 top-4 rounded-full h-4 flex content-center justify-center' onClick={()=>setIsDark(!isDark)}> 
			{isDark ? <FaToggleOn className='text-gray-700' /> : <FaToggleOff />}
		</button>
	)
}

export default Toggle 