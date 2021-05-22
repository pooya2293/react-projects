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
		try {
		setError(false)
		let colors = new Values(color).all(10)
		console.log(colors)
		} catch(error) {
			setError(true)
			console.log(error);
		}
	}
  return (
  	<>
  		<section className='container' >
  			<h3>colors genarator</h3>
  			<form onSubmit={handelSubmit}>
  				<input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#2993cb' className={`${error?'error':null}`}/>
  				<button className="btn" type='submit'>
  					button
  				</button>
  			</form>
  		</section>
  		<section className="colors">
  			<h4>List goes here</h4>
  		</section>
  	</>
  	)
}

export default App
