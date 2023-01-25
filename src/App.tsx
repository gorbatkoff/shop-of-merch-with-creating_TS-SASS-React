import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Container } from '@mui/system';

import Header from './components/Header/Header';
import Rewards from './components/Rewards/Rewards';
import ChannelInfo from './components/ChannelInfo/ChannelInfo';

import Create from './components/Create/Create';

import './App.scss';
import TelegramWidget from './components/TelegramAuthButton/TelegramWidget';

function App() {

  return (

    <div>
      <Container maxWidth="sm">

        <Header />

        <Routes>
          <Route index element={<TelegramWidget />} />
          <Route path={'/channel'} element={[<ChannelInfo />, <Rewards />]} />
          <Route path={'/create'} element={<Create />} />
        </Routes>

      </Container>
    </div>
  );
}

export default App;