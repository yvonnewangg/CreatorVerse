/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const {imageURL, setImageURL} = useState('');

  const handleAddCreator = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form data:', name, url, description, imageURL);
  
    const { data, error } = await supabase.from('creators').insert([
      { name, url, description, imageURL },
    ]);
  
    if (error) {
      console.error('Error adding creator:', error);
    } else {
      console.log('Creator added successfully:', data);
      navigate('/'); // Redirect back to the main page
    }
  };
  

  return (
    <div>
      <h2>Add Content Creator</h2>
      <form onSubmit={handleAddCreator}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>URL:</label>
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Image URL: </label>
          <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
