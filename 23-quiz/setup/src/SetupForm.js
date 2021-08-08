import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
	const {quiz,handleChange,handleSubmite,error} = useGlobalContext()
  return (
  	<main>
  	  <section className="quiz quiz-small">
  	    <form className="setup-form">
  	      {/*amount*/}
  	      <div className="form-control">
  	      	<label htmlFor="amount">number of quations</label>
  	      	<input type="number"
  	      	 name='amount' 
  	      	 id='amount' 
  	      	 value={quiz.amount}
  	      	 onChange={handleChange}
  	      	 className='form-input' 
  	      	 min={1}
  	      	 max={50} />
  	      </div>
  	  {/*category*/}
  	      <div className="form-control">
  	        <label htmlFor="category">
  	          category
  	        </label>
  	        <select 
  	        name="category" 
  	        id="category" 
  	        className='form-input' 
  	        value={quiz.category} 
  	      	onChange={handleChange} >
  	      	  <option value="history">history</option>
  	      	  <option value="sports">sports</option>
  	      	  <option value="politicts">politicts</option>
  	        </select>
  	      </div>
  	       {/*difficulty*/}
  	      <div className="form-control">
  	        <label htmlFor="difficulty">
  	          select difficulty
  	        </label>
  	        <select 
  	        name="difficulty" 
  	        id="difficulty" 
  	        className='form-input' 
  	        value={quiz.difficulty} 
  	      	onChange={handleChange} >
  	      	  <option value="easy">easy</option>
  	      	  <option value="medium">medium</option>
  	      	  <option value="hard">hard</option>
  	        </select>
  	      </div>
  	      {error && <p className="error">cant generate quations please try diffrent options</p>}
  	      <button type='submit' onClick={handleSubmite} className='submit-btn' >
  	        start
  	      </button>
  	    </form>
  	  </section>
  	</main>
  )
}

export default SetupForm
