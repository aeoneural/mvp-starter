import React from 'react'; 


const Search = (props) => { 
		return ( 
			<div> 
			Enter your location: <input onChange = {props.onChange} />
			<button onClick = {props.onClick} > Search Location </button> 
			<Input location = {props.currentLocation} />
			</div> 
			)
}
const Input = (props) => {
	return(
		<div>
			Input location: {props.location}
		</div>
		)
	
}
export default Search;