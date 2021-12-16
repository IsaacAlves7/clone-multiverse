import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import './App.css';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  return (
    <AppContainer>
      <h1>Tic Tac Toe Game</h1>
    </AppContainer>
  );
}

export default App;
