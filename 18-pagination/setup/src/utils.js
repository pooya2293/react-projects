const paginate = (followers) => {
	const itemsPerPage = 10;
	const pages = Math.ceil(followers.length / itemsPerPage);
	console.log(pages);//ceil(10)=10

	const newFollowers = Array.from({ length:pages },(_,index)=>{
		const start = index * itemsPerPage;
		console.log(start);//0,10,20,30,40,...,90
		return followers.slice(start , start + itemsPerPage);
	})
	console.log(followers);//give all the followers data from <useFetch />
	console.log(newFollowers);//(10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]
}

export default paginate
