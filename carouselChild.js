import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CarouselChild extends Component {
	render () {
		return (
			<div className="carousel-child">
				<ReactCSSTransitionGroup
					transitionName="carousel" 
					transitionAppear={true}
					transitionAppearTimeout={1500}
					transitionEnterTimeout={1500} 
					transitionLeaveTimeout={1500}>
					<img className="currentImage" src={this.props.imageSrc} key={this.props.imageSrc} />
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default CarouselChild;
