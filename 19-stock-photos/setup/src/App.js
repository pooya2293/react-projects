import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
//https://api.unsplash.com/photos/?client_id=AXB9LGz7FbtZ_LdC5gBA9EXJiaADX__-OKag1nX5Xlk
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {

	const [loading,setLoading] = useState(false);
	const [photos,setPhotos] = useState([]);

	const fetchData = async()=>{
		setLoading(true)
		let url;
		url = `${mainUrl}?client_id=AXB9LGz7FbtZ_LdC5gBA9EXJiaADX__-OKag1nX5Xlk`
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
