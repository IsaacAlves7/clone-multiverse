import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import './App.css';
import { io } from "socket.io-client";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Varela Round', sans-serif;
  overflow: none;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.h1`
  margin: 0;
  color: #000;
`;

function App() {

  const connectSocket = async () => {
    const socket = await socketService.connect("http://localhost:9000").catch((err) => {
      console.log("Error: ", err);
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <AppContainer>
      <WelcomeText>Tic-Tac-Toe Game</WelcomeText>
      <MainContainer>Hey</MainContainer>
    </AppContainer>
  );
}

export default App;
