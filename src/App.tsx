import React, { FC } from 'react';
import Header from './components/Header';
import JournalsList from './components/JournalsList';
import Journal from './components/Journal';
import { Routes, Route } from 'react-router-dom';

const App: FC = function App() {
  return (
    <section>
      <Header></Header>
      <Routes>
        <Route path="/" element={<JournalsList />}></Route>
        <Route path="/:urlName" element={<Journal />}></Route>
      </Routes>
    </section>
  );
};

export default App;
