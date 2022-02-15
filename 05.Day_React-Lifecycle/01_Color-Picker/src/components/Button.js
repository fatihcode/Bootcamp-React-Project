import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button
				onClick={this.props.applicationColor}
				className={this.props.isLight ?"light-button": "dark-button"}>
				Hi, im color picker
			</button>
		);
	}
}
