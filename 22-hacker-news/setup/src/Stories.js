import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
	const { isLoading,hits } = useGlobalContext()

	if(isLoading){
		return <div className="loading"></div>
	}

  return (
  	<section className="stories">
  	  {hits.map((story)=>{
  	  	const {objectID,title,url,num_comments,author,points} = story
  	  	  return <article className="story" key={objectID}>
  	  	    <h4 className="title">{title}</h4>
  	  	    <p className="info">
  	  	      {points} points by <span>{author} |</span> {num_comments} coments
  	  	    </p>
  	  	    <div>
  	  	    	<a href={url} className='read_link' target='_blank'  rel="noopener noreferrer">
  	  	    	  read more  
  	  	    	</a>
  	  	    	{' '}
  	  	    	<button className="remove-btn">remove</button>
  	  	    </div>
  	  	    
  	  	  </article>
  	  })}
  	</section>
  )
}

export default Stories
