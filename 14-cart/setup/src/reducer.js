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
	
	if(action.type === 'TOGLE_AMOUNT'){
		const tempCart = state.cart.map((item)=>{
			if(item.id === action.payLoad.id){
				if(action.payLoad.type === 'inc'){
					return {...item,amount:item.amount +1}
				}
				if(action.payLoad.type === 'dec'){
					return {...item,amount:item.amount -1}
				}
			}
			return item
		}).filter((item)=>item.amount !== -1)
		return{
			...state,
			cart:tempCart,
		}
	}
	if(action.type === 'TOTAL'){

		let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
			const {amount,price} = cartItem
			cartTotal.amount += amount
			
			const itemTotal = price * amount
			cartTotal.total += itemTotal

			return cartTotal
		},{total:0,amount:0}) 
		total = parseFloat(total.toFixed(2))
		return{
			...state,
			amount,
			total,
		}
	}
	if(action.type === 'LOADING'){
		return{
			...state,
			loading:true,
		}
	}
	if(action.type === 'DISPLAY_ITEMS'){
		return{
			...state,
			cart:action.payLoad,
			loading:false,
		}
	}
	// Setup error for time not matching action type
	throw new Error('no matching action type')
}

export default reducer