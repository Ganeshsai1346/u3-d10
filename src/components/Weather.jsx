/** @format */
import { Card, Button, Row, Container, Col } from "react-bootstrap";

const Weather = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>hi</Card.Title>
              <Card.Text>hello</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
