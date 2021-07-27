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
	const [page,setPage] = useState(1);
	const [query,setQuery] = useState('');

	const fetchData = async()=>{
		setLoading(true)
		let url;
		const urlPage = `&page=${page}`;
		const urlQuery = `&query=${query}`
		if(query){
			url = `${searchUrl}${cliendID}${urlPage}${urlQuery}`
		}else{	
			url = `${mainUrl}${cliendID}${urlPage}`
		}
		try{
			const response = await fetch(url);
			const data = await response.json();
			setPhotos((oldPhotoes)=>{
				if(query){
					return [...oldPhotoes,...data.results]
				}else{
					return [...oldPhotoes , ...data]
				}
			});
			setLoading(false);

		}catch(error){
			setLoading(false)
			console.log(error)
		}
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		fetchData();
	}

	useEffect(()=>{
		fetchData();
	},[page])

	useEffect(()=>{
		const event = window.addEventListener('scroll' ,()=>{
			if(!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 4)
			{
				setPage((oldPage)=>{
					return oldPage + 1
				})
			}
		})
		return ()=> window.removeEventListener( 'scroll',event )
	},[])

  	return (
  		<main>
  			<section className="search">
  				<form className="search-form">
  					<input type="text" placeholder='search' className="form-input" value={query} onChange={(e)=>setQuery(e.target.value)}/>
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
