import React from 'react'; 

class places extends React.Component { 
	render() { 
		console.log("inside places: ", this.props.placeInfo)
		const list = this.props.placeInfo.map((place, i) => {
			return (
				<li key={i}>{place.name} {place.rating}</li>

			)
		})

		return (
			<div>

				Yoga Places
				<ol>
					{list}
				</ol>

			</div>
		)

	}
}

export default places;