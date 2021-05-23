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
		setList(colors)
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
  				<input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#2993cb' className={error?'error':null}/>
  				<button className="btn" type='submit'>
  					button
  				</button>
  			</form>
  		</section>
  		<section className="colors">
  			{list.map((color, index)=>{
  				console.log(color)
  				return(
  					<SingleColor key={index}
  					 {...color} 
  					 index={index} 
  					 hexPaPa={color.hex} //way 2 of link hex
  					  />
  				)
  			})}
  		</section>
  	</>
  	)
}

export default App
