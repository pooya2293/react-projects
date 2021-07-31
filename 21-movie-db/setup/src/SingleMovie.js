import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
	const { id } = useParams()
	const [movie,setMovie] = useState({});
	const [isLoading,setIsLoading] = useState(true)
	const [error,setError] = useState({show:false,msg:''})

	const fetchMovie = async(url)=>{
		const response = await fetch(url)
		const data = await response.json()

		if(data.Response === 'False'){
			setError({show:true,msg:data.Error})
			setIsLoading(false)
		}else{
			setMovie(data)
			setIsLoading(false)
		}
	}

	useEffect(()=>{
		fetchMovie(`${API_ENDPOINT}&i=${id}`)
	},[id])

	if(isLoading){
		return <div className="loading"></div>
	}

	if(error.show){
		return (
			<div className="page-error">
				<h1>{error.msg}</h1>
				<Link to='/' className="btn">
					back home page
				</Link>
			</div>
		)
	}

	
	const {Actors:actors,Awards:awards,BoxOffice:sell,Genre:genre,Language:lang,Runtime:time,Released:cal,Writer:writer,imdbRating:imdb,Rated:rated,Poster:img,Director:director,Country:country,Plot:plot,Title:title} = movie;
  return (
  	<section className="single-movie">
  		<img src={img} alt={title} />
  		<div className="single-movie-info">
  			<h2>{title}</h2>
  			<p><b>Director:</b>{director}</p>
  			<p><b>Actors:</b>{actors}</p>
  			<p><b>Language:</b>{lang}</p>
  			<p><b>Time:</b>{time === 'N/A'?'':time}</p>
  			<p><b>Country:</b>{country}</p>
  			<p><b>Genre:</b>{genre}</p>
  			<p><b>Age:</b>{rated}</p>
  			<p><b>imdb:</b>{imdb}</p>
  			<h4>{cal}</h4>
  			<h4>{sell === 'N/A'?'':sell}</h4>
  			<p>{plot}</p>
  			<Link to='/' className="btn">
					back home page
			</Link>
  		</div>
  	</section>
  )
}

export default SingleMovie
