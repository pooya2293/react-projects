import React, { useState,useEffect } from 'react'

const DeleteAlert = ({ clearList,setDelAlert }) => {

  return (
  	<>
  	<div className="alert-del">
	  	<div className="btn2-container">
	  		<button className='btn' id='btn1' onClick={()=>{clearList()
	  		setDelAlert(false)
	  		}}>بله</button>
	  		<button className='btn' id='btn2' onClick={()=>setDelAlert(false)} >خیر</button>
	  	</div>
  	</div>
  	</>
  )
}

export default DeleteAlert
