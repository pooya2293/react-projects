import React, { useState } from 'react';
import { FaAnchor } from 'react-icons/fa'


const Tour = ({id,image,info,price,name}) => {
	const [readMore,setReadMore] = useState(false);
  return (
  	<>
  		<article className='single-tour'>
  			<img src={image} alt={name} />
  			<footer>
  				<div className="tour-info">
  					<h4>{name}</h4>
  					<h4 className="tour-price">${price}</h4>
  				</div>
  				<p>
  					{readMore?info
  						:`${info.substring(0,55)}...`}
	  				<FaAnchor style={{cursor:'pointer'}}
					onClick={()=>setReadMore(!readMore)} />
  				</p>
  				<button className='delete-btn'>X</button>
  			</footer>
  		</article>
  	</>
  );
};

export default Tour;
