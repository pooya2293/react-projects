import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

	const [loading,setLoading] = useState(false)
	const [error,setError] = useState({isError:false,msg:''})
	const [movies,setMovies] = useState([])
	const [query,setQuery] = useState('sop')

	const fetchData = async (url)=>{
		setLoading(true)
		try {
			const response =await fetch(url)
			const data =await response.json()

			if(data.Response === 'True'){
				setMovies(data.Search)
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
		fetchData(`${API_ENDPOINT}&s=${query}`)
	},[query])

  return <AppContext.Provider value={{movies,loading,error,query,setQuery}} >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
