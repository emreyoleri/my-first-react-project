import React, { useEffect } from 'react';
import { useState } from 'react';

const Comments = () => {
  const [yorumlar, setYorumlar] = useState([]);
  useEffect(() => {
    console.log('page loaded');
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        setYorumlar(json.slice(0, 30));
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {yorumlar.map(item => (
            <tr>
              <td>{item?.id}</td>
              <td>{item?.email}</td>
              <td>{item?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
