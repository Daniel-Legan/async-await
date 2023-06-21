import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const apiData = "https://fakestoreapi.com/products";

function App() {
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get(`${apiData}/2`);
      setTitle(response.data.title);
      setImage(response.data.image);
      setDescription(response.data.description);
    }
    getStoreData();
  }, []);

  return (
    <div className="container">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}

export default App;
