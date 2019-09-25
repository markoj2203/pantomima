import React from 'react';
import CountDown from 'react-countdown-now';

class Books extends React.Component {
  render(){
    return (
      <div className="cgContent" >
        	<CountDown date={Date.now() + 10000} />
      </div>
    );
  }
}
 
export default Books;