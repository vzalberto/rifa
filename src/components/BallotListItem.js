import React, { Component } from 'react';

class BallotListItem extends Component{
	render () {
		return (
			<tr>
				<td>{this.props.data}</td>
			</tr>
		)
	}

}

export default BallotListItem;