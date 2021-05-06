import React from 'react';
import lottie from 'lottie-web';
import animation from './animations/spinerLoading.json';


const Loading = () => {
	let animationContainer = React.createRef()

	React.useEffect(()=>{
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			animationData: animation
			// path:'./animation.json' //doesnt woek
		})
		anim.setSpeed(.5)
	},[])
  return (
    <div className="loading">
      <div ref={animationContainer}></div>
    </div>
  );
};

export default Loading;
