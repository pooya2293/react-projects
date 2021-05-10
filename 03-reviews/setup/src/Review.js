import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

	function checkNum(num) {
		if(num>people.length -1) {
			return 0
		}else if (num<0) {
			return people.length - 1
		}else {
			return num
		}
	}

const Review = () => {
	const [index,setIndex] = useState(0);
	const {id,image,name,job,text} = people[index];

	function prevInfo() {
		setIndex((index)=>{
			let newIndex = index - 1
			return checkNum(newIndex)
		})
	}

	function nextInfo() {
		setIndex((index)=>{
			let newIndex = index + 1
			return checkNum(newIndex)
		})
	}

	const randomNum = ()=>{
		let randomnumber = Math.floor(Math.random()*people.length);
		if (randomnumber === index){
			randomnumber = index + 1
		}
			setIndex(checkNum(randomnumber))

	}

  return (
  	<article className="review">
  		<div className="img-container">
  			<img src={image} alt={name} className='person-img' />
  			<span className="quote-icon">
  				<FaQuoteRight />
  			</span>
  		</div>
  		<h4 className="author">{name}</h4>
  		<p className="job">{job}</p>
  		<p className="text">{text}</p>
  		<div className="button-container">
  			<button className="prev-btn" onClick={prevInfo}>
  				<FaChevronLeft />
  			</button>
  			<button className="next-btn" onClick={nextInfo}>
  				<FaChevronRight />
  			</button>
  		</div>
  		<button className="random-btn" onClick={randomNum}>
  				surprise me!
  			</button>
  	</article>
  )
};

export default Review;
