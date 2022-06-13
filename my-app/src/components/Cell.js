import React from "react";
import Modal from './Modal';


export default class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			showModal: false,
		};
	}
	getModal = () => {
		this.setState({ showModal: true });
	};
	hideModal = () => {
		this.setState({ showModal: false });
	};

	handleOnSave = (value) => {
		this.props.onSave({
			id: this.props.id,
			fieldName: this.props.name,
			value,
		});
		this.hideModal();
	};

	render() {
		return (
			<>
				<td
					onDoubleClick={() => this.getModal()}
					data-cell="data"
					className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative"
				>
					{this.props.value}
					<Modal
						show={this.state.showModal}
						onSave={this.handleOnSave}
					/>
				</td>
			</>
		)
	}
}
