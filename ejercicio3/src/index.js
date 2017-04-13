import React from 'react';
import ReactDOM from 'react-dom';
import StockTable from './Product'

//Renderizamos en el elemento de id 'stock' toda la tabla del objecto Product
ReactDOM.render(
  <StockTable />,
  document.getElementById('stock')
);
