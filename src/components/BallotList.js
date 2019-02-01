import React, { Component } from 'react';
import BallotListItem from './BallotListItem';

class BallotList extends Component{

	render () {
		return (
			<table>
				<thead>
					<tr>
						<th>{this.props.header}</th>
					</tr>
				</thead>
				<tbody>
					{this.props.ballot.map( (el) => { return <BallotListItem data={el} key={el}/> })}
				</tbody>
			</table>
			);
	}
}

export default BallotList;