import React from 'react';

const AddressEntry = (props) => (
	<div>
	Name: {props.eachaddress.name}
	<br/>
	Location: {props.eachaddress.street}
	</div>
)

export default AddressEntry;