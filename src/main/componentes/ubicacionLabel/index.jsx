import './styles.css';
import React from 'react';

const flags = [
  { name: 'Argentina', emoji: 'π¦π·' },
  { name: 'Brasil', emoji: 'π§π·' },
  { name: 'Chile', emoji: 'π¨π±' },
  { name: 'Uruguay', emoji: 'πΊπΎ' }
];

export default React.memo(function LocationTag({ city, country }) {
  return (
    <div className="location-tag">
      <span aria-hidden>{flags.find((item) => item.name === country)?.emoji}</span>
      {`${city}, ${country}`}
    </div>
  );
});



