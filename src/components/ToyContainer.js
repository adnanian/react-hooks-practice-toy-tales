import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, onToyDonation, onLikeClick} ) {
  const toyCards = toys.map((toy) => {
    return (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onToyDonation={onToyDonation}
        onLikeClick={onLikeClick}
      />
    )
  });

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
