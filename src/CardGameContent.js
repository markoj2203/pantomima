import React from 'react';
import CountDown from 'react-countdown-now';

class CardGameContent extends React.Component {

  render(){

    return (
      <div>
        	<CountDown className="cgContent" date={Date.now() + 10000} />
      </div> 
    );
  }

}
 
export default CardGameContent;