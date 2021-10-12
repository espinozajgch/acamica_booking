import './App.css';
import React, { useState } from 'react';
import { format } from 'fecha';
import Header from './header/header'
import Filters from './filtros/filters'
import HotelCards from './hotelCards/hotelCards';
import {hotelsData} from './data.js';


// Función que convierte número de cuartos a un rango de tamaños de 1, 2 o 3
const getSize = (size) => {
  if (size <= 10){return 1;}
  if (size > 10 && size <= 20){return 2;}
  if (size > 20){return 3;}
  return 0;
};

// Función que valida si un rango de fechas se encuentra dentro de otro rango de fechas
const validDate = (availabilityFrom, from, availabilityTo, to) => {
  if (
    to >= from
    && from >= availabilityFrom
    && from <= availabilityTo
    && to >= availabilityFrom
    && to <= availabilityTo
  ) return true;
  return false;
};

function App() {
	const [countryVal, fnCambiarPais] = useState("-");
	const [priceVal, fnCambiarPrecio] = useState("0");
	const [sizeVal, fnCambiarTamaño] = useState("0");

	const [fromDateVal, fncambiarFechaIni] = useState(format(Date.now(), 'isoDate'));
	const [toDateVal, fncambiarFechaFin] = useState("");

	//const [isFiltroValido, fnIsFiltroValido] = useState(true);

	const hotelFiltrado = hotelsData.filter((hotel) => {
		if(countryVal === "-")
			return true;
		else
			return hotel.country.toLowerCase() === countryVal.toLowerCase();
	}).filter((hotel) => {
		if(priceVal === "0")
			return true;
		else
			return hotel.price  === parseInt(priceVal);
	}).filter((hotel) => {
		if(sizeVal === "0")
			return true;
		else
			return getSize(hotel.rooms) === parseInt(sizeVal);
	}).filter((hotel) => {
		
		if(toDateVal!==""){
			const fromDateValUnix = new Date(fromDateVal+"T00:00:00").getTime();
			const toDateValUnix = new Date(toDateVal+"T00:00:00").getTime();
			
			if(toDateValUnix < fromDateValUnix){
				console.log("Rango Invalido");
			}
			else{
				console.log("fromDateVal: "+ fromDateValUnix);
				console.log("toDateVal: "+ toDateValUnix);
				console.log("hotel: "+ hotel.name);
				console.log("hotel fromDateVal: "+ hotel.availabilityFrom);

				//(fromDateValUnix <= hotel.availabilityFrom && toDateValUnix >= hotel.availabilityTo) || 
				if((fromDateValUnix >= hotel.availabilityFrom && toDateValUnix <= hotel.availabilityTo)){
					console.log("++++Hotel Disponible++++");
					return true;
				}
				else{
					console.log("----Hotel No Disponible----");
				}
				
			}
		}
		else{
			return true;
		}
	});/***/


	/*const hotelFiltradoPorFechaFin = () => {
		return hotelsData.filter((hotel) => {
			const fromDateValUnix = new Date(fromDateVal+"T00:00:00").getTime();
		
			if(toDateVal!==""){
				const toDateValUnix = new Date(toDateVal+"T00:00:00").getTime();
				
				if(toDateValUnix < fromDateValUnix){
					console.log("Rango Invalido");
				}
				else{
					console.log("fromDateVal: "+ fromDateValUnix);
					console.log("toDateVal: "+ toDateValUnix);
					console.log("hotel: "+ hotel.name);
					console.log("hotel fromDateVal: "+ hotel.availabilityFrom);

					if((fromDateValUnix <= hotel.availabilityFrom && toDateValUnix >= hotel.availabilityTo) || (fromDateValUnix >= hotel.availabilityFrom && toDateValUnix <= hotel.availabilityTo)){
						console.log("++++Hotel Disponible++++");
						return true;
					}
					else{
						console.log("----Hotel No Disponible----");
					}
					
				}
			}
			else{
				return true;
			}
		});
		
	}/**/

	//const hotelito = hotelFiltradoPorFechaFin();

	//console.log(hotelito);

	return (
		<div className="App">
		<header className="App-header">
		<Header fromDateVal={fromDateVal} toDateVal={toDateVal} countryVal={countryVal}
			priceVal={priceVal} sizeVal={sizeVal}/>
		<Filters
			fromDateVal={fromDateVal}
			toDateVal={toDateVal}
			countryVal={countryVal}
			priceVal={priceVal}
			sizeVal={sizeVal}
			fnCambiarPais={fnCambiarPais}
			fnCambiarPrecio={fnCambiarPrecio}
			fnCambiarTamaño={fnCambiarTamaño}
			fncambiarFechaIni={fncambiarFechaIni}
			fncambiarFechaFin={fncambiarFechaFin}
			/**/
		/>
		<HotelCards cards={hotelFiltrado} />
		</header>
		</div>
	);
}

export default App;
