import React from 'react';
 
class Category extends React.Component {
  
  handleClick = () => {
    console.log('this is:', this);
  }

  render(){

  	const capitalize = (s) => {
	  if (typeof s !== 'string') return ''
	  return s.charAt(0).toUpperCase() + s.slice(1)
	}

  	const  elements = ['asociacije', 'pantomima', 'drawing'];

  	const items = [];

  	for (const [index, value] of elements.entries()) {		
  		var imgName = value+".png";
		var capLetter = capitalize(value);
	    items.push(<div key={index} className="column is-one-quarter categoryPos"><div className="circleBase type1"><img className="imageStyle" src={imgName} alt={capLetter} onClick={this.handleClick} /></div></div>);
	}

	  return (
	    <div className="columns is-centered">
			{items}
	    </div>
	  );
	}
}
 
export default Category;