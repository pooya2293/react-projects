import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const cliendID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`


function App() {

	const [loading,setLoading] = useState(false);
	const [photos,setPhotos] = useState([]);

	const fetchData = async()=>{
		setLoading(true)
		let url;
		url = `${mainUrl}${cliendID}`
		try{
			const response = await fetch(url);
			const data = await response.json();
			console.log(data,loading);

		}catch(error){
			setLoading(false)
			console.log(error)
		}
	}

	useEffect(()=>{
		fetchData();
	},[])
  	return <h2>stock photos starter</h2>
}

export default App
