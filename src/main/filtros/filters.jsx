import './filtros.css';
import React from 'react';
import { format } from 'fecha';
import { Button } from '@material-ui/core';

export default function Filters(
	{
		fromDateVal,
		toDateVal,
		countryVal,
		priceVal,
		sizeVal,
		fnCambiarPais,
		fnCambiarPrecio,
		fnCambiarTamaño,
		fncambiarFechaIni,
		fncambiarFechaFin
	}
	){

	const cambiarFechaIni = (e) => {
		console.log("fecha inicial");
		fncambiarFechaIni(e.target.value);
	}

	const cambiarFechaFin = (e) => {
		fncambiarFechaFin(e.target.value);
	}

	const cambiarPais = (e) => {
		fnCambiarPais(e.target.value);
	}
	
	const cambiarPrecio = (e) => {
		fnCambiarPrecio(e.target.value);
	}

	const cambiarTamaño = (e) => {
		fnCambiarTamaño(e.target.value);
	}

	const limpiarFiltros = (e) => {
		fncambiarFechaIni(format(Date.now(), 'isoDate'));
		fncambiarFechaFin("");
		fnCambiarPais("-");
		fnCambiarPrecio("0");
		fnCambiarTamaño("0");
	}

	return (
	<div id="filters">
		
		<input type="date" 
		value={fromDateVal} 
		onChange={cambiarFechaIni}
		name="fromDate"/>
		
		<input
		type="date"
		value={toDateVal}
		onChange={cambiarFechaFin}
		name="toDate"
		/>
		<select value={countryVal} onChange={cambiarPais} name="country" className="Select country">
		<option value="-">Todos los países</option>
		<option value="Argentina">Argentina</option>
		<option value="Brasil">Brasil</option>
		<option value="Chile">Chile</option>
		<option value="Uruguay">Uruguay</option>
		</select>
		<select value={priceVal} onChange={cambiarPrecio} name="price" className="Select price">
		<option value="0">Cualquier precio</option>
		<option value="1">Precio $</option>
		<option value="2">Precio $$</option>
		<option value="3">Precio $$$</option>
		<option value="4">Precio $$$$</option>
		</select>
		<select value={sizeVal} onChange={cambiarTamaño} name="size" className="Select size">
		<option value="0">Cualquier tamaño</option>
		<option value="1">Hotel pequeño</option>
		<option value="2">Hotel mediano</option>
		<option value="3">Hotel grande</option>
		</select>
		
		<Button name="clear" onClick={limpiarFiltros} variant="contained" color="secondary">Limpiar</Button>
	</div>
	);
}
