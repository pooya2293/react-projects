import React, { useState, useEffect } from 'react'
import {FaToggleOff,FaToggleOn} from 'react-icons/fa'

function App() {
	const [isDark,setIsDark] = useState(false);

	return(
		<div className={isDark?'dark':''} >
			<button className='absolute left-4 top-4 rounded-full h-4 flex content-center justify-center' onClick={()=>setIsDark(!isDark)}> 
				{isDark ? <FaToggleOn className='bg-red-500 rounded-full' /> : <FaToggleOff className='bg-white rounded-full' />}
			</button>
			<div className="container h-screen bg-red-300 flex flex-wrap content-center justify-center dark:bg-black">
				<h2 className='bg-blue-600 w-96 h-62 px-5 py-6 dark:bg-gray-400 dark:text-white'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quisquam voluptas natus. Veniam, earum fuga porro illum dicta consectetur eaque nemo?
					<button className='block px-5 py-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-50 text-sm sm:py-1 bg-red-500 mt-4 dark:bg-yellow-500'>read more</button>
				</h2>
			</div>
		</div>
	)
}

export default App