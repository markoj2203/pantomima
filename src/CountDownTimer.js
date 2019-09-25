import React from 'react';
import ReactDOM from 'react-dom';
import CountDown from 'react-countdown-now';

class CountdownTimer extends React.Component {
  render(){
    return (
      <div className="cgContent" >
        	<Countdown date={Date.now() + 10000} />   
      </div>
    );
  }
}
 
export default CountdownTimer;
