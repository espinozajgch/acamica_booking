import './hotelCards.css';
import React from 'react';
import Card  from '../componentes/tarjeta/card';

export default function ListCards({ cards = [] }) {
  return (
    <div id="list">
      {
        cards.length > 0
          ? cards.map((item) => <Card key={item.slug} info={item} />)
          : <div className="empty-list">No hay hoteles disponibles con los parametros de búsqueda seleccionados</div>
      }
    </div>
  );
}
