import React from 'react'
import moment from 'moment'

const Article = ({ date,length,snippet,title }) => {
	
	const options = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'}
	const faDate = date.toLocaleString('fa-FA',options);

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
