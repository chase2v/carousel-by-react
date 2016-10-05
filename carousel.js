import React, { Component } from 'react';

import CarouselChild from './carouselChild.js';

class Carousel extends Component {

	constructor () {
		super();
		this.imageSrc = './img/1.png';
		this.state = {
			i: 1
		}
	}

	componentDidMount () {
		this.switcher();
	}

	switcher () {
		this.interval = setInterval( () => {
			this.setState({ i: this.state.i+1 });
			console.log(this.state.i);
			if (this.state.i >= 4) {
				this.setState({ i: 1 });
			}
			this.imageSrc = './img/' + this.state.i + '.png';
		}, 3000);
	}

	render () {
		return (
			<div className="carousel">
				<CarouselChild imageSrc={ this.imageSrc } />
			</div>
		)
	}
}

export default Carousel;