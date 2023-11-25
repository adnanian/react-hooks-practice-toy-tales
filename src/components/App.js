import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  function removeToy(toyToRemove) {
    setToys(toys.filter((toy) => toy.id !== toyToRemove.id));
  }

  function updateLikedToy(likedToy) {
    setToys(toys.map((toy) => toy.id === likedToy.id ? likedToy : toy));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onToyDonation={removeToy} onLikeClick={updateLikedToy} />
    </>
  );
}

export default App;
