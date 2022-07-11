import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Main from "./common/main/Main";
import Container from "./common/containers/Container";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <div></div>
        <div className="content">
          <Container>asdasd</Container>
        </div>
        <div></div>
      </Main>
      <Routes>
        <Route path="builds">
          <Route index element />
          <Route path=":id" element />
          <Route path="create" element />
        </Route>
      </Routes>
    </div>
  );
}
