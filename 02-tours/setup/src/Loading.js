import React from 'react';
import ReactBodymovin from 'react-bodymovin'
import animation from './animation.json'

const Loading = () => {

	const bodymovinOptions = {
	    loop: true,
	    autoplay: true,
	    prerender: true,
	    animationData: animation
  }

  return (
    <div className="loading">
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  );
};

export default Loading;
