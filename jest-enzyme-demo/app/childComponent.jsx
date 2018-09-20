import React from 'react';


export default class ChildComponent extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<p className='child-title'>{this.props.childData}</p>
			</div>
		);
	}
}