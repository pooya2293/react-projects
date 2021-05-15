import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const AllCategories = ['all' , ...new Set(items.map((item)=>item.category))]
console.log(AllCategories)

function App() {
	const [menuItems,setMenueItems] = useState(items);
	const [categories,setCategories] = useState([]);

	const filterItems = (category) => {
		if(category === 'all'){
			setMenueItems(items)
			return
		}
		const newItems = items.filter((item)=> item.category === category);
		setMenueItems(newItems);
	};

  return (
  	<main>
  		<section className="menue section">
  			<div className="title">
  				<h2>our menue</h2>
  				<div className="underline"></div>
  			</div>
  			<Categories filterItems={filterItems} />
  			<Menu items={menuItems} />
  		</section>
  	</main>
  )
}

export default App;
