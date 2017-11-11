import React from 'react';

const AddressEntry = (props) => (
	<div>
	Name: {props.eachaddress.name}
	<br/>
	Location: {props.eachaddress.address}
	</div>
)

export default AddressEntry;