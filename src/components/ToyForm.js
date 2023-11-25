import React, { useState } from "react";

function ToyForm( {onFormSubmit} ) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: name,
      image: image,
      likes: 0
    };
    console.log(formData);

    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => onFormSubmit(data));
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={(event) => setImage(event.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
