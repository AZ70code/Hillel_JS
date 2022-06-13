import React from "react";
import data from '../products.json';
import Cell from './Cell';



export default class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data,
		};
	}
	handleChange = ({ id, fieldName, value }) => {
		this.setState({
			data: this.state.data.map((item) => {
				if (item.id === id) {
					item[fieldName] = value;
				}
				return item;
			}),
		});
	};

	render() {
		return (
			<>
				{this.state.data.map((item) => (
					<tr className=" relative border-b" key={item.id}>
						<td className="p-4 whitespace-nowrap text-sm font-medium text-gray-900">
							{item.createdAt}
						</td>
						<Cell
							name="name"
							id={item.id}
							value={item.name}
							onSave={this.handleChange}
						/>
						<Cell
							name="description"
							id={item.id}
							value={item.description}
							onSave={this.handleChange}
						/>
						<Cell
							name="price"
							id={item.id}
							value={item.price}
							onSave={this.handleChange}
						/>
						<td className="p-4 whitespace-nowrap text-sm font-medium text-gray-900">
							{item.id}
						</td>
					</tr>
				))}
			</>
		)
	}
}