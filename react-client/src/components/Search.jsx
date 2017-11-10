import React from 'react'; 


class Search extends React.Component { 
	constructor(props) { 
		super(props); 
		this.state = { 
			locationInput: null,
		}
	}

	locationInputHandler(input){
		// console.log("input", input.target.value)
		this.setState({ 
			state: input.target.value
		}) 
	}

	locationButtonHandler(){
		console.log("The current state is: ", this.state.locationInput)

	}
	render() { 
		return ( 
			<div> 
			Enter your location: <input value = {this.state.locationInputs} onChange = { this.locationInputHandler.bind(this)} />
			<button onClick = {this.locationButtonHandler.bind(this)} > Search Location </button> 
			<Input location = {this.state.locationInput} />
			</div> 
			)

	}

}
const Input = (props) => {
	return(
		<div>
			Input location: {props.location}
		</div>
		)
	
}
export default Search;