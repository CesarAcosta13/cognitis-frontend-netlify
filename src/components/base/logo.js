import React, {Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "./cognitisLogo-Texto.png";
import "./index.css";

const Logo = () => {
  return (
        <Col lg="6">
            <img src={logo} alt="logo" className="center-block"/>
        </Col>
  );
};

export default Logo;
