import React, { Component } from 'react';

class WinnerModal extends Component{
	render () {
		return (
			<div className="modal" >
				<h3>¡Felicidades al ganador!</h3>
				<span className="pelota">{this.props.winner}</span>
			</div>
		);
	}
}

export default WinnerModal;