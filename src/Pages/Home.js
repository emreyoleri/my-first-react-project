import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [counter, setCounter] = useState(searchParams.get('page'));
  const handle = () => setCounter(counter + 1);
  return (
    <div>
      {counter} <button onClick={handle}>+</button> Merhaba dünya
      <br />
      <Link to="/todos">todo lara git</Link>
      <br />
      <Link to="/users">User sLinkyfasına git</Link>
    </div>
  );
};

export default Home;
