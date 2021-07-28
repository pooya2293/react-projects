import React from 'react'

const Article = ({ date,length,snippet,title }) => {
	
	const options = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'}
	const faDate = date.toLocaleString('fa-FA',options);//so in here i dont use moment js

  return (
  	<article className='post'>
  		<h2>{title}</h2>
  		<div className='post-info'>
  		<div>
  			<span>{faDate}</span>
  		</div>
  			<span>{length} min read</span>
  		</div>
  		<p>{snippet}</p>
  	</article>
  )
}

export default Article
