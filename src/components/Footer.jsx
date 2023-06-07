import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <>
      <Container>
        <Row className="rows" lg={4} md={4} xl={4}>
          <Col className="cols">foo</Col>
          <Col className="cols">bar</Col>
          <Col className="cols">bar</Col>
          <Col className="cols">bar</Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
