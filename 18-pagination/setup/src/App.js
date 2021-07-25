import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
	const {loading,data}=useFetch();
	//console.log(data);//show 100 data in array
  return <h2>pagination starter</h2>
}

export default App
