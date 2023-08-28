// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import ContentCreatorCard from '../components/ContentCreatorCard';

// eslint-disable-next-line react/prop-types
const ShowCreators = ({ creators }) => {
  if (!creators) {
    return <p>No Content Creators</p>;
  }
  return (
    <div>
      <h2>Content Creators</h2>
      {/*eslint-disable-next-line react/prop-types*/}
      <div className="creator-list">
          {/*eslint-disable-next-line react/prop-types*/}
          {creators.map((creator) => (
            <Link key={creator.name} to={`/creator/${creator.name}`}>
              <ContentCreatorCard
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
            </Link>
          ))}
      </div>

      <Link to="/add">
        <button>Add Content Creator</button>
      </Link>
    </div>
  );
};

export default ShowCreators;
