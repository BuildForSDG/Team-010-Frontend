import React from 'react';
import './index.css';
import headerImg from '../../assets/happy-farmer.jpg';
import Header from '../../components/Header';
import PublicNavBar from '../../components/PublicNavBar';

export default () => (
  <div style={{ width: '100%' }}>
    <PublicNavBar />
    <Header>
      <img src={headerImg} alt="a happy farmer" />
      <h1>The No.1 online platform for connecting farmers and buyers</h1>
    </Header>
  </div>
);
