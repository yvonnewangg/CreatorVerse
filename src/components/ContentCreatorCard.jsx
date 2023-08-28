import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContentCreatorCard = ({ name, url, description, imageURL }) => {
  return (
    <div className="content-creator-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={imageURL} alt={name} className="creator-image" />
      <Link to={`/creator/${name}/edit`}>Edit</Link>
    </div>
  );
};

ContentCreatorCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

export default ContentCreatorCard;
