import React from 'react';
import AddressEntry from '../components/AddressEntry.jsx';

const AddressList = (props) => {
	// console.log("Props: ", props)
  return (
  	<div>
      <h4> Address LIST </h4>
      {
      	props.addresses.map((item) => { 
      		console.log(" item --->", item);
      		return <AddressEntry eachaddress = {item} />

    	})} 
    	
  
    </div>)
}

export default AddressList;