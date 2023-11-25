import React from "react";

function ToyCard( {toy, onToyDonation, onLikeClick} ) {

  // Donate to Goodwill (AKA Delete the toy from the server)
  function handleDonation() {
    console.log(`Deleting toyId #${toy.id} from the server...`);
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => {
        console.log(`ToyId#${toy.id} deleted from the server!`);
        onToyDonation(toy);
      });
  }

  function handleLikeClick() {
    console.log(`ToyId#${toy.id} has gained a new like! YAY!`);
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: (toy.likes + 1)
      })
    })
      .then((response) => response.json())
      .then((data) => onLikeClick(data));
  }

  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img
        src={toy.image /* Toy's Image */}
        alt={toy.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonation}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
