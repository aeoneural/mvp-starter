import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddressList from './components/AddressList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locationInput: '', 
      locationOutputAddress: []
    }
  }
  locationInputHandler(input){
    // console.log("input", input.target.value)
    this.setState({ 
      locationInput: input.target.value, 
    }) 
  }
  changeState(input){ 
    this.setState({ 
      locationOutputAddress : input
    })
    console.log("Update location output addres ", this.state.locationOutputAddress)
  }

  locationSearchButtonHandler(){

    // console.log("Input location is: ", this.state.locationInput)
    $.ajax({
      url: '/addresses', 
      method:'GET',
      data : {city: this.state.locationInput}, 
      success: this.changeState.bind(this),
      error: (err) => {
        console.log('err', err);
      }
    });
    // retrieve all entries with locationInput. 

  }

  componentDidMount() {
    // $.ajax({
    //   url: '/addresses', 
    //   method:'GET',
    //   success: (data) => {
    //     console.log(" client/index.jsx - ", data)
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });


  }

  render () {
    return (
    <div>
      <h1> FYF MVP! </h1>
      <Search 
        currentLocation = {this.state.locationInput}
        onChange = {this.locationInputHandler.bind(this)}
        onClick = {this.locationSearchButtonHandler.bind(this)} /> 
      <AddressList addresses={this.state.locationOutputAddress}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));