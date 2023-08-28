/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';
import ContentCreatorCard from '../components/ContentCreatorCard';

const ViewCreator = () => {
    const { name } = useParams(); // Get the creator ID from the URL parameter
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('name', name)
                .single();
            
            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                setCreator(data);
            }
        }

        fetchCreator();
    }, [name]);
  
    if (!creator) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{creator.name}</h2>
        <ContentCreatorCard
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
        />
        <Link to={`/edit/${creator.name}`}>Edit</Link>
      </div>
    );
  };
  
  export default ViewCreator;