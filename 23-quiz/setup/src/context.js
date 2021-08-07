import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [waiting,setWaiting] = useState(true)
	const [isLoading,setLoading] = useState(false)
	const [quations,setQuations] = useState([])
	const [index,setIndex] = useState(0)
	const [corract,setCorract] = useState(0)
	const [error,setError] = useState(false)

	const [isModalOpen,setIsModalOpen] = useState(false)

	const fetchQuations = async(url)=>{
		setLoading(true)
		setWaiting(false)
		const response = await axios(url).catch((err)=>console.log(err))
		if(response){
		  const data = response.data.results
		  if(data.length > 0){
		  	setQuations(data)
		  	setLoading(false)
		  	setWaiting(false)
		  	setError(false)
		  }else{
		  	setWaiting(true)
		  	setError(true)
		  }
		}else{ 
		  setWaiting(true)
		}
	}

	useEffect(()=>{
	  fetchQuations(tempUrl)
	},[])

  return <AppContext.Provider value={{ waiting,isLoading,quations,index,corract,error,isModalOpen }} >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
