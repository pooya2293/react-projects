import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {isLoading,waiting,quations,corract,index,nextQuation,checkAnswer} = useGlobalContext();
  if(waiting){
  	return <SetupForm />
  }
  if(isLoading){
  	return <Loading />
  }

  const {correct_answer,incorrect_answers,question} = quations[index]
  const answers = [...incorrect_answers,correct_answer]

  return (
  	<main>
  		{/*<Modal />*/}
  		<section className="quiz">
  		  <p className="correct-answers">
  		  	corract answers: {corract}/{index}
  		  </p>
  		  <article className="container">
  		  	<h2 dangerouslySetInnerHTML={{ __html:question }} />
  		  	<div className="btn-container">
  		  	  {answers.map((answer,index)=>{
  		  	  	return (
  		  	  	  <button  
  		  	  	    key={index}
  		  	  	    className='answer-btn'
  		  	  	    onClick={()=>checkAnswer(correct_answer === answer)}
  		  	  	    dangerouslySetInnerHTML={{ __html:answer }}
  		  	  	   />
  		  	  	)
  		  	  })}
  		  	</div>
  		  </article>
  		  <button className="next-question" onClick={nextQuation}>next question</button>
  		</section>
  	</main>
  )
}

export default App
