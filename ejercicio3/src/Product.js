import React, { Component } from 'react';
import $ from "jquery";


//Devuelve una sola fila con el producto pasado como propiedad
class StockList extends Component{
	render(){
		const product = this.props.product
		return(
			<tr>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>{product.quantity}</td>
			</tr>
		)
	}
}

class StockTable extends Component{

	constructor() {
		super();
		this.state = {
			products: []
		}
	}

	//En el ciclo de vida, cuando vaya a montar el componente hace el request para cargar la lista del stock
	componentWillMount() {
		this._fetchProducts();
	}

	//Request del stock y guardado en la variable products dentro de state
	_fetchProducts(){
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3000/api/stock',
            dataType: 'json',
			success: (product) => {
				this.setState({ products: product  })
			}
		});
	}

	//Llama a StockList la cantidad de productos que trajo el ArrayJson en el response y le pasa como propiedad
	//cada json del ArrayJson
	_getProducts(){
		return this.state.products.map( (product) => {
			return(
				<StockList key={product.id} product={product} />
			)
		})
	}

	// render principal de la tabla con la lista del stock
	render(){
		const products = this._getProducts()
		return(
			<table>
				<thead>
					<tr>
				   		<th>Nombre</th>
				   		<th>Precio</th>
				   		<th>Stock</th>
					</tr>
				</thead>
				<tbody>
					{ products }
	  			</tbody>
			</table>
		)
	}
}

export default StockTable;