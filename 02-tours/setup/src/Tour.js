import React, { useState,useEffect } from 'react';
import { FaSortUp } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


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
	  				<FaSortDown id='iconTextOpen' className={`${readMore ?'hide' : ''}`}
	  				 style={{cursor:'pointer'}}
					onClick={()=>{
						setReadMore(!readMore)
						}
					} />
					<FaSortUp id='iconTextClose' className={`${!readMore ?'hide' : ''}`}
	  				 style={{cursor:'pointer'}}
					onClick={()=>{
						setReadMore(!readMore)
						}
					} />
  				</p>
  				<FaTimes className='delete-btn'></FaTimes>
  			</footer>
  		</article>
  	</>
  );
};

export default Tour;
