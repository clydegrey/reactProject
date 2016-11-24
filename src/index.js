import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBfRhl3eLk8szdr0a6D-mA2yy5a5r1y6zw';

// create a new COMPONENT
// this COMPONENT SHOULD PRODUCE html

const App = () =>{

	return (
		<div>

			<SearchBar />

		</div>
		);
}


ReactDOM.render(<App />, document.querySelector('.container'));
