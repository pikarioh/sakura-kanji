import React, { useState, useCallback } from 'react';
import Login from '../Login';
import { useStateValue } from '../StateProvider';
import CollectionPage from './CollectionPage';
import Header from '../Header';
import './HomePage.css'

// import {

// } from '@mui/material'

const HomePage = attrs => {
  return (
    <div className="page__homepage">
      <div className="page__hp-header">
        <h1>ようこそ、ホームページへ！</h1>
      </div>
    </div>
  );
}

export default HomePage;
