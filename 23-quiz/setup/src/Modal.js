import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
	const {isModalOpen,closeModal,corract,quations} = useGlobalContext()
  return (
  	<div className={`${isModalOpen?'modal-container isOpen':'modal-container'}`}>
  	  <div className="modal-content">
  	  	<h2>congrags!</h2>
  	  	<p>you answerd {((corract/quations.length)*100).toFixed(0)}% of quations correctly!</p>
  	  	<button className='close-btn' onClick={closeModal}>
  	  	  play again
  	  	</button>
  	  </div>
  	</div>
  )
}

export default Modal
