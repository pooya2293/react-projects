import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
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

  return (
  	<main>
  		<Tours tours={tours} />
  	</main>
  )
}

export default App
