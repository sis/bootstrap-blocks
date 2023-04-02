import {Container, Row, Col} from "reactstrap"
import Card from '../components/Card';
import {cardItems} from "../data/cards"

const CardsSeven = () => (
  <Container className="d-flex flex-column justify-content-center">
    <Row>
      <Col className="d-flex justify-content-center mb-1">
        <h2 className="fs-6 p-1 px-3 bg-tertiary h2h6">
          In oculis quidem
        </h2>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col className="text-center">
        <h3 className="fw-light">
          Epicurus in malis dolor non emolumento
        </h3>
      </Col>
    </Row>
    <Row className="gx-5">
      {cardItems.map((item) => (
        <Col lg={4} md={6} gx={10}>
          <Card text={item.text} link={item.link} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardsSeven;
