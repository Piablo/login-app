import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import { Counter } from './features/counter/Counter'

const App = () => {

  //SCOPE
  //Lets work on getting the form complete

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
      </Routes>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
`
export default App;
