import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
	const {id} = useParams();
	const [lodaing,setLoading]=React.useState(false);
	const [cocktail,setCocktail]=React.useState(null);

	React.useEffect(()=>{
		const newID = id.slice(1);//becuse id started by : slice first chracter
		setLoading(true);
		async function getCocktail(){
			try {
				const response = await fetch(`${url}${newID}`);
				const data = await response.json();
				console.log(data)
			} catch(e) {}
		}
		getCocktail();
	},[id]);

  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCocktail
