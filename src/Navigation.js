import React from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {

	handleClick = () => {
    	var x = document.getElementById("navBar");
		if (x.style.display === "none") {
		  x.style.display = "block";
		} else {
		  x.style.display = "none";
		}
  	}

	render(){
		return (

		    <div id="navBar" className="columns is-centered">
		    	<NavLink to="/movies" onClick={this.handleClick} >
			    	<div className="column is-one-quarter categoryPos">
			    		<div className="circleBase type1">
			    			<img className="imageStyle" src="asociacije.png" alt="Asociacije" />
		    			</div>
					</div>
				</NavLink>
				<NavLink to="/books" onClick={this.handleClick} >
					<div className="column is-one-quarter categoryPos">
			    		<div className="circleBase type1">
			    			<img className="imageStyle" src="pantomima.png" alt="Pantomima" />
		    			</div>
					</div>
				</NavLink>
				<NavLink to="/other" onClick={this.handleClick} >
					<div className="column is-one-quarter categoryPos">
			    		<div className="circleBase type1">
			    			<img className="imageStyle" src="drawing.png" alt="Crtanje"  />
		    			</div>
					</div>
				</NavLink>
		    </div>

		  );
	}
}

 
export default Navigation;