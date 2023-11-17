import React from 'react';
import { Link } from 'react-router-dom';
const Users = () => {
  return (
    <div>
      Users page
      <Link to="/?defaultCounter=5" alt="">
        Eve dön
      </Link>
    </div>
  );
};

export default Users;
