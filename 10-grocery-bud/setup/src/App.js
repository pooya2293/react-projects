import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
	const [name,setName] = useState('')
	const [list,setList] = useState([])
	const [ isEditing , setIsEditing ] = useState(false)
	const [ editeId , setEditeId ] = useState(null)
	const [alert , setAlert ] = useState({ show:true , msg:'' , type:'' })

	const handleSubmit = (e)=>{
		e.preventDefault()
		if(!name){
			// display alert
			showAlert(true,'لطفا مقداری وارد کنید','danger')
		}else if (name && isEditing) {
			// deal with edit
		}else {
			showAlert(true,'مورد شما به لیست اضافه شد','success')
			const newItem = {id: new Date().getTime().toString(),title:name}
			setList([...list,newItem])
			setName('')
		}
	}

const showAlert = 
// set default of show alert
(show=false,msg='',type='') =>{
	setAlert({show,msg,type})
}

  return (
  	<section className="section-center">
  	<form className="grocery-form" onSubmit={handleSubmit} >
  		{alert.show && <Alert  {...alert} removeAlert={showAlert} />}
  		<h3>grocery bud</h3>
  		<div className="form-control">
  			<input type="text" className='grocery' value={name} placeholder='EX: eggs' onChange={(e)=> setName(e.target.value)} />
  			<button type='submit' className='submit-btn'>
  				{isEditing ? 'edit' : 'submit'}
  			</button>
  		</div>
  	</form>
  	{list.length > 0 && (
  		<div className="grocery-container">
  			<List items={list} />
  			<button className='clear-btn'>clear items</button>
  		</div>
  	)}	
  	</section> 
  )
}

export default App
