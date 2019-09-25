import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './Navigation';


import Movies from './subCategory/Movies';
import Books from './subCategory/Books';
import Other from './subCategory/Other'; 
 
class Category extends React.Component {
  	
  	render(){
  		

	  	return (

	  		<BrowserRouter>
	  			<div className="categoryPos" >
	  				<Navigation />
	  				<Switch>
	  					<Route path="/movies" component={Movies} ></Route>
	  					<Route path="/books" component={Books} ></Route>
	  					<Route path="/other" component={Other} ></Route>
	  				</Switch>
	  			</div>
	  		</BrowserRouter>

		);

	}	

}  


 
export default Category;