import React from 'react';
import lottie from 'lottie-web'
import animation from './animation.json'


const Loading = () => {
	let animationContainer = React.createRef()

	React.useEffect(()=>{
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			animationData: animation
		})
		anim.setSpeed(2)
	},[])
  return (
    <div className="loading">
      <div ref={animationContainer}></div>
    </div>
  );
};

export default Loading;
