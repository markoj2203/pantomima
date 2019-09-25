import React from 'react';
import CountDown from 'react-countdown-now';

class Other extends React.Component {
  render(){
    return (
      <div className="cgContent" >
        	<CountDown date={Date.now() + 10000} />
      </div>
    );
  }
}
 
export default Other;