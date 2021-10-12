import './card.css';
import React from 'react';
import PriceRank from '../preciosLabel/index';
import RoomsTag from '../habitacionesLabel/index';
import LocationTag from '../ubicacionLabel/index';
import DisponibilidadTag from '../disponibilidadLabel/index';

export default function Card({ info }) {
  return (
    <div className="card">
      <img src={info.photo} alt={info.name} />
      <div className="info">
        <LocationTag city={info.city} country={info.country} />
        <h2>{info.name}</h2>
        <p>{info.description}</p>
        <div className="details">
          <RoomsTag value={info.rooms} />
          <PriceRank value={info.price} />
        </div>
        <DisponibilidadTag from={info.availabilityFrom} to={info.availabilityTo} />
        <button type="button">Reservar</button>
      </div>
    </div>
  );
}
