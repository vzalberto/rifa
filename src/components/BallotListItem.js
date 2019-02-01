import React, { Component } from 'react';

class BallotListItem extends Component{
	render () {
		return (
			<tr>
				<td><span className="pelota">{this.props.data}</span></td>
			</tr>
		)
	}

}

export default BallotListItem;