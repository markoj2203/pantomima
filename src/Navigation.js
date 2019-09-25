import React from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      show: false
    	};
    }

	handleClick = () => {	
		this.setState({ show: true });
  	}

	render(){

		const stateChk = this.state.show;
		let styleSt;

		if(stateChk === true){
			styleSt = {
				'display': 'none'	
			}	
		}else{
			styleSt = {
				'display': 'flex'	
			}	
		}

		return (

		    <div id="navBar" className="columns is-centered" style={styleSt} >
		    	<NavLink to="/movies" onClick={this.handleClick}   >
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

 
export default Navigation ;