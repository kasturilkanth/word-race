import React from 'react';
import LandingHeader from '../components /LandingHeader';

type Props = {};
const styles = {
  display: 'flex',
  justifyContent: ' center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
};
const Home = (props: Props) => {
  return (
    <div style={styles}>
      <LandingHeader />
    </div>
  );
};

export default Home;
