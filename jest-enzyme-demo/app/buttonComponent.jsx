import React from 'react';
import {
	Button
} from 'react-bootstrap';

export default class ButtonComponent extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	      count: 0
	    };
	    this.incrementCount = this.incrementCount.bind(this);
	  }

	  incrementCount(){
	    this.setState({
	      count: (this.state.count +1)
	    });
	  }

	render(){
		return (
			<div>
		      <Button bsStyle="primary" onClick={()=>{this.incrementCount();}}>Primary</Button>
		      <div>
		        Click count test1: {this.state.count}
		      </div>
		    </div>
		);
	}
}