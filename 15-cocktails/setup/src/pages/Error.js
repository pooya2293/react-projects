import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="error-page section">
      	<div className="error-container">
      		<h1>oops! its a dead end...</h1>
      		<Link to='/' className='btn btn-primary'>
      			Back Home
      		</Link>
      	</div>
      	<h2>error page</h2>
      </section>
    </div>
  )
}

export default Error
