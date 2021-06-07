const reducer = (state,action)=>{
	if(action.type === 'CLEAR_CART'){
		return{
			...state,
			cart:[],
		}
	}
	if(action.type === 'CLEAR_ITEM'){
		const newItems =  state.cart.filter((item)=>item.id !== action.payLoad)

		return{
			  ...state,
			 cart: newItems
		}
	}
	return state
}

export default reducer