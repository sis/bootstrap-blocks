import PlaceholderImage from "../PlaceholderImage";
import {Card as BootstrapCard, CardBody, CardTitle, Col, Row} from "reactstrap";

interface Props {
  text: string;
  link: string;
}

const Card = ({ text, link }: Props) => (
  <BootstrapCard className="mb-5">
    <Row g={0}>
      <Col md={5}>
        <PlaceholderImage />
      </Col>
      <Col md={7} className="d-flex">
        <CardBody className="d-flex flex-column justify-content-between p-4">
          <CardTitle tag="h5" className="fw-light">
            {text}
          </CardTitle>
          <a href="#" className="card-link">
            {link}
          </a>
        </CardBody>
      </Col>
    </Row>
  </BootstrapCard>
);

export default Card;
