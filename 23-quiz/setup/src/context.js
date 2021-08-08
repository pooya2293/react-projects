import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

// const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [waiting,setWaiting] = useState(true)
	const [isLoading,setLoading] = useState(false)
	const [quations,setQuations] = useState([])
	const [index,setIndex] = useState(0)
	const [corract,setCorract] = useState(0)
	const [error,setError] = useState(false)
	const [quiz,setQuiz] = useState({
		amount:10,
		category:'sports',
		difficulty:'easy'
	})

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

	const nextQuation = ()=>{
		setIndex((oldIndex)=>{
			const index = oldIndex + 1
			if(index > quations.length - 1){
				openModal()
				return 0
			}else{	
				return index
			}
		})
	}

	const checkAnswer = (value)=>{
		if(value){
		  setCorract((oldVal)=>oldVal + 1)
		}
		nextQuation()
	}

	const openModal = ()=>{
		setIsModalOpen(true)
	}

	const closeModal = ()=>{
		setWaiting(true)
		setCorract(0)
		setIsModalOpen(false)
	}

	const handleChange = (e)=>{
	  const name = e.target.name
	  const value = e.target.value
	  setQuiz({ ...quiz , [name]:value })
	}

	const handleSubmite = (e)=>{
		const {amount,category,difficulty} = quiz
		e.preventDefault()
		
		const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
		
		fetchQuations(url)
	}

  return <AppContext.Provider value={{ 
  	waiting,
  	isLoading,
  	quations,
  	index,
  	corract,
  	error,
  	isModalOpen,
  	nextQuation,
  	checkAnswer,
  	openModal,
  	closeModal,
  	quiz,
  	handleChange,
  	handleSubmite }} >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
