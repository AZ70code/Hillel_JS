import React from 'react';
import Row from './Row';
import data from '../products.json';


export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data
		};
	}


	// tableBody = () => {
	// 	return this.state.data.map(item => {
	// 		const {createdAt, name, description, price, id } = item;
	// 		return (
	// 			<tr key={id}>
	// 				<td className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative">{createdAt}</td>
	// 				<td className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative">{name}</td>
	// 				<td className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative">{description}</td>
	// 				<td className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative">{price}</td>
	// 				<td className="p-4 whitespace-wrap text-sm font-medium text-gray-900 relative">{id}</td>
	// 			</tr>
	// 		)
	// 	})
	// }
	
	tableHeader = () => {
		let header = Object.keys(this.state.data[0])
		return header.map((key, index) => {
		   return <th className='p-4 font-medium' key={index}>{key.toUpperCase()}</th>
		})
	 }
  
	render() {
		return (
			<>
				<div className="flex flex-col ">
					<div className="py-2 inline-block min-w-full sm:px-6">
						<div className="overflow-hidden relative">
							<table className="min-w-full">
								<thead className="border-b-2 bg-slate-100">
									<tr>
										{this.tableHeader()}
									</tr>
								</thead>
								<tbody>
									<Row/>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		)
	}
}