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
	if(action.type === 'INCREAS'){
		const tempCart = state.cart.map((item)=>{
			if(item.id === action.payLoad){
				return {...item,amount: item.amount +1}
			}
			return item
		})
		return{
			...state,
			cart : tempCart,
		}
	}
	if(action.type === 'DECREASE'){
		const tempCart = state.cart.map((item)=>{
			if(item.id === action.payLoad){
				return {...item,amount: item.amount -1}
			}

			return item
		}).filter((item)=>item.amount !== -1)
		return{
			...state,
			cart : tempCart,
		}
	}
	return state
}

export default reducer