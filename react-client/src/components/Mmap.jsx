import React from 'react';
// import GoogleMapLoader from './react-google-maps/src/GoogleMapLoader.js'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
class Mmap extends React.Component {
	render(){
		console.log('center: ', this.props.center)
		console.log('Map': Marker)
		const mapContainer = <div style={{height: '100%', width:'100%'}}></div>



		const markers = this.props.markers.map((venue, i) => {

			const marker = {
				position: {
					lat: venue.location.lat,
					lng: venue.location.lng
				}
			}

			return <Marker key={i} {...marker} />
		})

		return (
		    <GoogleMapLoader
		        containerElement = { mapContainer }
		        googleMapElement = {
			        <GoogleMap
			            defaultZoom={15}
			            defaultCenter={this.props.center}
			            options={{streetViewControl: false, mapTypeControl: false}}>
			            { markers }
			        </GoogleMap>
		    	} />
		)
	}
}

export default Mmap;