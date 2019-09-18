import React from 'react';
import Category from './Category';
 
class Content extends React.Component {
  render(){
    return (
      <div className="hero-body contentMenu">
          <div className="container">
            <Category></Category>    
          </div>
      </div>
    );
  }
}
 
export default Content;