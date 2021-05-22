import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
	const [color,setColor] = useState('');
	const [error,setError] = useState(false);
	const [list,setList] = useState([]);

	const handelSubmit = (e)=>{
		e.preventDefault();
		console.log('hello');
	}
  return (
  	<>
  		<section className='container' >
  			<h3>colors genarator</h3>
  			<form onSubmit={handelSubmit}>
  				<input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
  			</form>
  		</section>
  		<section className="colors">
  			<h4>List goes here</h4>
  		</section>
  	</>
  	)
}

export default App
