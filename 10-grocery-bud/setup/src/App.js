import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import DeleteAlert from './DeleteAlert'

const getLocalStorage = ()=>{
	let list = localStorage.getItem('localList')
	if(list){
		return JSON.parse(list)
	}else{
		return []
	}
}



function App() {
	const [name,setName] = useState('')
	const [list,setList] = useState(getLocalStorage)
	const [ isEditing , setIsEditing ] = useState(false)
	const [ editeId , setEditeId ] = useState(null)
	const [alert , setAlert ] = useState({ show:true , msg:'' , type:'' })
	const [ delAlert,setDelAlert ] = useState(false)

	const handleSubmit = (e)=>{
		e.preventDefault()
		if(!name){
			// display alert
			showAlert(true,'لطفا مقداری وارد کنید','danger')
		}else if (name && isEditing) {
			setList(list.map((item)=>{
				if(item.id === editeId){
					return { ...item,title:name }
				}
				return item
			}))
			setName('')
			setEditeId(null)
			setIsEditing(false)
			showAlert(true,'مقدار تغییر کرد.','success')
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

const clearList = ()=>{
	// show yes or no clear
	showAlert('true','کل لیست پاک شد!','danger')
	setList([])
}

const removeItem = (id)=>{
	showAlert(true,'مورد موردنظر پاک شد ','danger')
	setList(list.filter((item)=>item.id !== id))
}

const editeItem = (id)=>{
	const speceficItem = list.find((item)=>item.id === id);
	setIsEditing(true)
	setEditeId(id)
	setName(speceficItem.title)
}

useEffect(()=>{
	localStorage.setItem('localList',JSON.stringify(list))
	if(!name){
		setIsEditing(false)
	}
}, [list,name])
  return (
  	<section className="section-center">
  	<form className="grocery-form" onSubmit={handleSubmit} >
  		{alert.show && <Alert  {...alert} removeAlert={showAlert} list={list} />}
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
  			<List items={list} removeItem={removeItem} editeItem={editeItem} />
  			<button className='clear-btn' onClick={()=>setDelAlert(true)} >clear items</button>
  		</div>
  	)}	
  	{delAlert && <DeleteAlert clearList={clearList} setDelAlert={setDelAlert} />}
  	</section> 
  )
}

export default App
