import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktails} = useGlobalContext();
  console.log(cocktails)//give array in frame that i make
//0: {id: "15328", name: "Zorro", image: "https://www.thecocktaildb.com/image 1: ...
  if(loading) {
  	return <Loading />
  }
  if(cocktails.length<1){
  	return(
  		<h2 className='section-title'>
  			no cocktails matches in crietaeria...
  		</h2>
  	)
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
