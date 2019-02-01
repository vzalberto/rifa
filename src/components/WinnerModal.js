import React, { Component } from 'react';

class WinnerModal extends Component{
	render () {
		return (
			<div className="modal" >
				<h3>¡Felicidades, número {this.props.winner}!</h3>
			</div>
		);
	}
}

export default WinnerModal;