import React from 'react';

const List = ({ people }) => {
   return (
     <>
    	{people.map((p)=>{
    		const { id }= p;
    		return (
    			<Person key={id} person={p} />
    		)
    	})
    	}
     </>
   );
 };
 
const Person = (props)=>{
	const {name,age,image} = props.person
	return (

		<article className="person">
			<img src={image} alt={name} />
			<div>
				<h4>{name}</h4>
				<p>{age} years</p>
			</div>
		</article>
	)
}

export default List;
