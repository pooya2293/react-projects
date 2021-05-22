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
		let colors = new Values(color).all(10)//this code comes from https://github.com/noeldelgado/values.js
		console.log(colors)//(21) [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N] --> 0: N {rgb: Array(3), alpha: 1, type: "tint", weight: 100}, 1: N {rgb: Array(3), alpha: 0.91333333, type: "tint", weight: 90}
	}
  return (
  	<>
  		<section className='container' >
  			<h3>colors genarator</h3>
  			<form onSubmit={handelSubmit}>
  				<input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#2993cb' />
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
