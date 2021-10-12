import './styles.css';
import React from 'react';

export default function DisponibilidadTag({ from, to }) {
  return (
    <div className="disponibilidad-tag">
      <h3>Disponibilidad</h3>
      <p className="dates">{new Date(from).toLocaleDateString()} al {new Date(to).toLocaleDateString()}</p>
    </div>
  );
}
