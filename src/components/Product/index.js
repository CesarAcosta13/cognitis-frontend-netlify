import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
//import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "./index.css";

import Logo from "../base/logo";
import Welcome from "../base/welcome";

 const Product = (props)=> {
      
      const [data , setState] = useState({
        c1: false,
        c2: false,
        c3: false,
        product: '', 
      })

    const handleInputChange=(event) =>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

      setState({
      ...[data], 
      c1: value,
      c2: value,
      c3: value
    });
  }
  const handleInputChangeOne=(event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if ((name == "c2") && (data.c3)){
      console.log("inside")
      setState({
        ...data,
        c1: value,
        c2:value,
        c3: value,
      });
    }
    else if ((name == "c3") && (data.c2)){
      this.setState({
        isChecked: value,
        isChecked2:value,
        isChecked3: value,
      });    
    }
    else{
      setState({
        ...data,
      [name] : value,
    })
  } 

  }

  const handlerClick = ()=> {
    if (data.c1) {
       return (0)

      }
    else if (data.c2) {
       return(1)
    } else {
         return(2)
    }
    //const product = this.state.product;
    //axios.post("http://localhost:4000/api/verificationcode", product);
 }


    //const pg = this.props;
    return (
      <Container fluid>
        <Row>
          <Col lg="6" md="3" xs="10">
            <Logo />
          </Col>
        </Row>
        <Row className="text-center" style={{ marginBottom: 50 }}>
          <Col lg="12" xs="12">
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col lg="8" sm={{ size: 8, offset: 2 }}>
            <h3 className="text-center text">
              Please select the product to install
            </h3>
            <Card id="card-product" md="12" body style={{ marginTop: 50 }}>
              <FormGroup row className="item">
                <Label
                  for="checkbox1"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis 360
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox1"
                    name={data.c1}
                    onChange={handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox2"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis Marketplace
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox2"
                    name="isChecked2"
                    checked={data.c2}
                    onChange={handleInputChangeOne}             
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="item">
                <Label
                  for="checkbox3"
                  md={10}
                  className=" text-product text-center h1"
                >
                  Cognitis ERP
                </Label>
                <Col md={{ size: 2 }} className="text-center">
                  <CustomInput
                    type="checkbox"
                    id="checkbox3"
                    name="isChecked3"
                    checked={data.c3}
                    //onChange={handleInputChangetwo}
                  />
                </Col>
              </FormGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            lg="12"
            sm={{ size: 8, offset: 2 }}
            className="d-flex justify-content-center"
            style={{ marginTop: 20 }}
          >
            <Link to="/user">
              <Button color="warning" onClick={handlerClick} style={{ borderColor: "black" }}>
                <b>Next</b>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
}
export default Product;
