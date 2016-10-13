import React, { Component } from 'react';

class Circle extends Component {

	switchTo () {
		this.props.switchTo(this.props.id);
	}

	render () {

		let className = this.props.isCur ? "circle circle-active" : "circle";

		return (
			<div className={ className } onClick={ ()=>this.switchTo() }></div>
		)
	}
}

export default Circle;