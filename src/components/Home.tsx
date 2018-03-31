import * as React from 'react';

const Home = (props: any) => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>
      Go to about page via redux
    </button>
  </div>
);

export default Home;
