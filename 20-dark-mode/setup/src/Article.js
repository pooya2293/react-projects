import React from 'react'
import moment from 'moment'

const Article = ({ date,length,snippet,title }) => {
	console.log(moment.locale());//en
  return (
  	<article className='post'>
  		<h2>{title}</h2>
  		<div className='post-info'>
  			<span>{moment().format('LLLL')}</span>
  			<span>{length} min read</span>
  		</div>
  		<p>{snippet}</p>
  	</article>
  )
}

export default Article
