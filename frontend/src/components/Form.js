import React, { useState } from 'react';
import axios from 'axios';

export function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value, [event.target.mail]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const bodyData = {
        name: formData.name,
        mail: formData.mail
    }

    axios.post('http://192.168.1.26:4000/api', bodyData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Mail:
        <input type="text" name="mail" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );

 

}