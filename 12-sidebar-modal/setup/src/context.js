import React, { useState, useContext } from 'react'
//#1
const AppContext = React.createContext();

const AppProvider = ({children})=>{
	return(
		<AppContext.Provider value='hello sagtoole'>
			{children}{/*if don't add childeren show nothing in browser and ATTENTION : u should just add children not x not child not y just children  */}
		</AppContext.Provider>
	)
}
// custome hook

export {AppContext,AppProvider} 