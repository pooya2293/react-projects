const paginate = (followers) => {
	const itemsPerPage = 9;
	const pages = Math.ceil(followers.length / itemsPerPage);
	console.log(pages);//ceil(11.22)=12

	const newFollowers = Array.from({ length:pages },(_,index)=>{
		const start = index * itemsPerPage;
		console.log(start);//0,9,18,27,36,45,...,99
		return followers.slice(start , start + itemsPerPage);
	})
	console.log(followers);//give all the followers data from <useFetch />
	console.log(newFollowers);//(12) [Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(1)]
}

export default paginate
