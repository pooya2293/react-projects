import React, { useState, useContext, useEffect } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const useFetch = (urlParams)=>{
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState({isError:false,msg:''})
	const [data,setData] = useState([])


	const fetchData = async (url)=>{
		setLoading(true)
		try {
			const response =await fetch(url)
			const data =await response.json()

			if(data.Response === 'True'){
				setData(data.Search || data)
				setError({isError:false,msg:''})
			}else{
				setError({isError:true,msg:data.Error})
			}
			setLoading(false)
		} catch(e) {
			console.log(e);
			setLoading(false)
		}
	}

	useEffect(()=>{
		fetchData(`${API_ENDPOINT}${urlParams}`)
	},[urlParams])
	return { loading,error,data }
}

export default useFetch