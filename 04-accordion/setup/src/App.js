import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
	const[quations,SetQuations] = useState(data);

  return (
  	<main>
  		<div className="container">
  			<h3>quations and answers about login</h3>
  			<section className="info">
  				{quations.map((quation)=>{
  					return (
  						<SingleQuestion key={quation.id} {...quation} />
  					)
  				})}
  			</section>
  		</div>
  	</main>
  );
}

export default App;
