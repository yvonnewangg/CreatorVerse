/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams(); // Get the creator ID from the URL parameter
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    // Fetch the specific content creator from the API and set their information in the state
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('name', name)
        .single();
      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL);
      }
    }

    fetchCreator();
  }, [name]);

  const handleUpdate = async (e) => {
    e.preventDefault();

   // Send an API request to update the content creator in the database
   const { data, error } = await supabase.from('creators').update({
    name,
    url,
    description,
    imageURL,
  })
  .eq('name', name); // Use 'name' as the identifier for updating

  if (error) {
    console.error('Error updating creator:', error);
  } else {
    console.log('Creator updated successfully:', data);
    navigate(`/creator/${name}`); // Redirect back to the content creator page
  }
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
    .from('creators')
    .delete()
    .eq('name', name);

    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      console.log('Creator deleted successfully:', data);
      navigate('/')
    }

  }

  return (
    <div>
      <h2>Edit Creator</h2>
      <form onSubmit={handleUpdate}>
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
          <label>Image URL:</label>
          <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        <button type="button" onClick={handleUpdate}>Update Creator</button>
        <button type="button" onClick={handleDelete}>Delete Creator</button>
      </form>
    </div>
  );
};

export default EditCreator;
