import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems,setMenueItems] = useState(items);
	const [categories,setCategories] = useState([]);
  return (
  	<main>
  		<section className="menue section">
  			<div className="title">
  				<h2>our menue</h2>
  				<div className="underline"></div>
  			</div>
  			<Categories />
  			<Menu items={menuItems} />
  		</section>
  	</main>
  )
}

export default App;
