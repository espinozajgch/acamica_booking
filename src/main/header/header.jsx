import './header.css';
import React from 'react';
import { format } from 'fecha';

// Función que retorna el formato de fecha en un lenguaje familiar
const formatDate = (dateISO) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Convertimos fecha tipo '2020-06-06' a '2020/06/06' para darle el formato adecuado
  return format(new Date(dateISO.replace(/-/gi, '/')), 'dddd[,] DD [de] MMMM [de] YYYY', {
    monthNames: months,
    dayNames: days
  });
};

// Función que convierte el numero del tamaño a su representacion en texto
const getSize = (size) => {
  if (size === "1" ){return "pequeño";}
  if (size === "2"){return "mediano";}
  if (size === "3"){return "grande";}
  return 0;
};

// Función que convierte el numero del tamaño a su representacion en texto
const getPrice = (size) => {
  if (size === "1" ){return "bajo";}
  if (size === "2"){return "medio";}
  if (size === "3"){return "alto";}
  if (size === "4"){return "V.I.P";}
  return 0;
};

export default function Header({fromDateVal,toDateVal,countryVal,priceVal,sizeVal}) {
  return (
    <div id="headers">
      <div className="bg">
        <h1>Acamica Booking</h1>
        <small>Hoteles disponibles desde el {formatDate(fromDateVal)}</small>
        <small>{toDateVal===""?"Hasta cualquer fecha.":"Hasta el " + formatDate(toDateVal)}</small>
        <small>{countryVal==="-"?"En cualquer pais.":"En " + countryVal}</small>
        <small>{getPrice(priceVal)===0?"De cualquier precio.":"Con un precio " + getPrice(priceVal)}</small>
        <small>{getSize(sizeVal)===0?"De cualquier tamaño.":"De tamaño " + getSize(sizeVal)}</small>
      </div>  
    </div>
  );
}
