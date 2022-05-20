import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StateProvider, useStateValue } from './StateProvider';
import reducer, { initialState } from './reducer';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import KanjiAdder from './components/KanjiAdder';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';

import { CircularProgress } from '@mui/material'
import ReviewPage from './pages/ReviewPage';

const Page = (props) => {
  const [{ user }, dispatch] = useStateValue();
  const [showAdder, setShowAdder] = useState(false);
  const [showResMenu, setShowResMenu] = useState(false);
  const handleToggle = useCallback(() => setShowAdder(prevShow => !prevShow), [])
  const handleResToggle = useCallback(() => setShowResMenu(prevShow => !prevShow), [])

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user == null) {
  //       navigate('/login');
  //   }
  // });

  // if (user == null) {
  //   return (<CircularProgress/>);
  // }

  return (
    <div>
      <Header show={showResMenu} onToggle={handleToggle} onResToggle={handleResToggle} />
      <KanjiAdder show={showAdder} onToggle={handleToggle} />
      {props.content}
    </div>
  );
}

const bodyElement = document.getElementsByTagName('body')[0];
const rootElement = document.createElement('div');
bodyElement.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Page content={<HomePage/>} />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/collection" element={<Page content={<CollectionPage/>} />} />
          <Route path="/review" element={<Page content={<ReviewPage />} />} />
        </Routes>
      </BrowserRouter>
    </StateProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
