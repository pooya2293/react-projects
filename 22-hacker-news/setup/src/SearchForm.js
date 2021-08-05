import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
	const {query,searchQuery}= useGlobalContext()
  return (
  	<form className="search-form" onSubmit={(e)=>e.preventDefault()}>
  	  <h2>search</h2>
  	  <input
  	    type='text'
  	    className='form-input'
  	    value={query}
  	    onChange={(e)=>searchQuery(e.target.value)}
  	   />

  	</form>
  )
}

export default SearchForm
