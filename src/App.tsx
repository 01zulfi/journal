import React, { FC } from 'react';
import Header from './components/Header';
import JournalsList from './components/JournalsList';
import JournalPage from './components/JournalPage';
import { Routes, Route } from 'react-router-dom';

const App: FC = function App() {
  return (
    <section>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <JournalsList></JournalsList>
            </>
          }
        ></Route>
        <Route path="/:urlName" element={<JournalPage />}></Route>
      </Routes>
    </section>
  );
};

export default App;
