import React, { Component } from 'react';

import CarouselChild from './carouselChild';
import CircleBar from './circleBar';

class Carousel extends Component {

	constructor () {
		super();
		this.imageSrc = './img/1.png';
		this.amount = 3;
		this.state = {
			i: 1
		};
		this.direction = 'right';
		this.clickAccess = true;
	}

	componentDidMount () {
		this.switcher();
	}

	switcher () {
		this.interval = setInterval( () => {
			if (this.state.i < 3) {
				this.setState({ i: this.state.i+1 });
			} else {
				this.setState({ i: 1 });
			}
		}, 3000);
	}

	/**
	 * 跳转至指定的图片
	 * @param  {Num} i 指定跳转至的图片的 id
	 * @return {[type]}   [description]
	 */
	switchTo (i) {
		// 防止连续点击
		if (!this.clickAccess) {
			return;
		}

		if (this.state.i > i) {
			this.direction = 'left';
		} else if (this.state.i < i) {
			this.direction = 'right';
		} else {
			return;
		}
		clearInterval(this.interval);
		this.setState({
			i: i
		});
		this.clickAccess = false;
		setTimeout(()=>{
			this.clickAccess = true;
		},1500);
	}

	/**
	 * 切换至下一张图片
	 * 1.清除定时器
	 * 2. i 加一
	 * @return {[type]} [description]
	 */
	moveLeft () {
		// 防止连续点击
		if (!this.clickAccess) {
			return;
		}

		clearInterval(this.interval);
		this.direction = 'right';
		if (this.state.i < 3) {
			this.setState({ i: this.state.i + 1 });
			
			this.clickAccess = false;
			setTimeout(()=>{
				this.clickAccess = true;
			},1500);
		}
	}

	/**
	 * 切换至上一张图片
	 * 1.清除定时器
	 * 2. i 减一
	 * @return {[type]} [description]
	 */
	moveRight () {
		// 防止连续点击
		if (!this.clickAccess) {
			return;
		}

		clearInterval(this.interval);
		this.direction = 'left';
		if (this.state.i > 1) {
			this.setState({ i: this.state.i - 1 });
			
			this.clickAccess = false;
			setTimeout(()=>{
				this.clickAccess = true;
			},1500);
		}
	}

	render () {

		let imageSrc =  './img/' + this.state.i + '.png';

		return (
			<div className="carousel">
				<CarouselChild imageSrc={ imageSrc } direction={ this.direction }/>
				<div className="btn btn-left" onClick={ () => this.moveRight() }>
					<span className="iconfont icon-chevronleft"></span>
				</div>
				<div className="btn btn-right" onClick={ () => this.moveLeft() }>
					<span className="iconfont icon-chevronright"></span>
				</div>
				<CircleBar amount={ this.amount } currentImage={ this.state.i } switchTo={ (i)=>this.switchTo(i) }/>
			</div>
		)
	}
}

export default Carousel;