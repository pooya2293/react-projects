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
			setPhotos(data);
			setLoading(false);

		}catch(error){
			setLoading(false)
			console.log(error)
		}
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log('HEllo World')
	}

	useEffect(()=>{
		fetchData();
	},[])

	useEffect(()=>{
		const event = window.addEventListener('scroll' ,()=>{
			if(!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10)
			{
			console.log('it\'s worked')
			}
		})
		return ()=> window.removeEventListener( 'scroll',event )
	},[])

  	return (
  		<main>
  			<section className="search">
  				<form className="search-form">
  					<input type="text" placeholder='search' className="form-input" />
	  					<button type='submit' className='submit-btn' onClick={handleSubmit}>
	  						<FaSearch />
	  					</button>
  				</form>
  			</section>
  			<section className="photos">
  				<div className="photos-center">
  					{photos.map((image,index)=>{
  						return <Photo key={image.id} {...image} />
  					})}
  				</div>
  				{loading && <h2 className='loading'>loading...</h2>}
  			</section>
  		</main>	
  	)
}

export default App
