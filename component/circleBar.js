import React, { Component } from 'react';

import Circle from './circle';

class CircleBar extends Component {
	render () {

		let circleArr = [];

		for (var i = 0; i < this.props.amount; i++) {
			circleArr.push(<Circle key={ i + 1 } id={ i + 1 } isCur={ this.props.currentImage === i + 1 } switchTo={ this.props.switchTo }/>);
		}

		return (
			<div className="circle-bar">
				{ circleArr }
			</div>
		)
	}
}

export default CircleBar;