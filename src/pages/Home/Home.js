import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import ConnectMetamask from "../../components/ConnectMetamask";

export default function Home() {
  return (
    <Container className="homeBody">
      <h1> Home page</h1>
      <ConnectMetamask/>
    </Container>
  );
}
