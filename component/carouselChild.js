import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CarouselChild extends Component {

	constructor () {
		super();

		this.transitionName = {
			enter: 'carousel-enter',
			enterActive: 'carousel-enter-active',
			leave: 'carousel-leave',
			leaveActive: 'carousel-leave-active',
			appear: 'carousel-appear',
			appearActive: 'carousel-appear-active'
		};
		this.transitionNameLeft = {
			enter: 'carousel-enter-left', 
			enterActive: 'carousel-enter-left-active',
			leave: 'carousel-leave-left', 
			leaveActive: 'carousel-leave-left-active',
			appear: 'carousel-appear',
			appearActive: 'carousel-appear-active'
		};
	}

	render () {

		let transitionName = this.props.direction === 'right' ? this.transitionName : this.transitionNameLeft;

		return (
			<div className="carousel-child">
				<ReactCSSTransitionGroup
					transitionName={ transitionName }
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
