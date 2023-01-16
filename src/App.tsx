import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Container } from '@mui/system';

import Header from './components/Header/Header';
import Rewards from './components/Rewards/Rewards';
import ChannelInfo from './components/ChannelInfo/ChannelInfo';
import EnterWithTelegram from './components/EnterWithTelegram/EnterWithTelegram';

import './App.scss';
import Create from './components/Create/Create';

function App() {

  const [isEntered, setIsEntered] = useState(false);

  return (
    <div>
      <Container maxWidth="sm">

        <Header /> 

        <Routes>
          <Route index element={[<ChannelInfo />, <Rewards />]} />
          <Route path={'/create'} element={<Create />} />
        </Routes>

      </Container>
    </div>
  );
}

export default App;











{/* {!isEntered ? <EnterWithTelegram setIsEntered={setIsEntered}/> : <h2>not hello</h2>} */ }