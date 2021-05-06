import React from 'react';
import lottie from 'lottie-web'
import animation from './animation.json'


const Loading = () => {
	let animationContainer = React.createRef()

	React.useEffect(()=>{
		lottie.loadAnimation({
			container: animationContainer.current,
			animationData: animation
		})
	},[])
  return (
    <div className="loading">
      <div ref={animationContainer}></div>
    </div>
  );
};

export default Loading;
