import React from 'react';

const Pet = ({ pet, onAdoptPet }) => {
  const { id, name, type, age, weight, gender, isAdopted } = pet;

  const handleAdoptClick = () => {
    if (!isAdopted) {
      onAdoptPet(id);
    }
  };

  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {name} ({gender === 'male' ? '♂' : '♀'})
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight} kg</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui button" disabled>
            Already adopted
          </button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
};

export default Pet;
