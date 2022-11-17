import React from 'react';

import Icon from '../../components/Logo/Icon.jsx';
import { Link } from 'react-router-dom';
import './ViewCategory.css';

const ViewCategory = () => {
  return (
    <div>
      <div className="homeButton">
        <Link to="/">
          <Icon />
        </Link>
      </div>
    </div>
  );
};

export default ViewCategory;
