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
	if(action.type === 'TOTAL'){

		let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
			//console.log(cartItem)//show in orderd id in console each object item for ./data
			//console.log(cartTotal)//{total: 0, amount: 0}//{total: 599.99, amount: 1}//{total: 1099.98, amount: 2}
			const {amount,price} = cartItem
			// console.log(amount,price)//1 599.99//1 499.99//1 699.99
			cartTotal.amount += amount
			const itemTotal = price * amount
			cartTotal.total += itemTotal

			return cartTotal
		},{total:0,amount:0})//if don't write total:0 return NaN but not for amount  
		total = parseFloat(total.toFixed(2))
		return{
			...state,
			amount,
			total,
		}
	}
	return state
}

export default reducer