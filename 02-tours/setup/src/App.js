import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


// refresh ICON
import { Icon, InlineIcon } from '@iconify/react';
import refreshIcon from '@iconify-icons/fa/refresh';


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
	const[isloading,setIsLoading] = useState(true);
	const[tours,setTours] = useState([]);


  const fetchTours = async ()=>{
  	setIsLoading(true)
  	
  	try{
  		const respons = await fetch(url)
	  	const tours = await respons.json()
	  	setIsLoading(false)
	  	setTours(tours)
  	}catch(error){
  		setIsLoading(false)
  	}
  }


useEffect(()=>{
	fetchTours();
},[])


  if(isloading){
  	return (
	  	<main>
	  		<Loading />
	  	</main>
	)
  }
	
  // remove function item
  const removeItem = (id) =>{
	const newTours = tours.filter((tour)=>tour.id !== id);
	setTours(newTours)
  }

// when oll tours hase gone
   if(tours.length === 0) {
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <Icon className='btn refresh' icon={refreshIcon} onClick={()=>{
            fetchTours()
          }}/>
        </div>
      </main>
    )
   }

  return (
  	<main>
  		<Tours tours={tours} removeItem={removeItem} />
  	</main>
  )
}

export default App
