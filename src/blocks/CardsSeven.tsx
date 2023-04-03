import {Container, Row, Col} from "reactstrap"
import Card from '../components/Card';
import {cardItems} from "../data/cards"

const CardsSeven = () => (
  <Container className="d-flex flex-column justify-content-center">
    <div className="row">
      <div className="col d-flex justify-content-center mb-1">
        <h2 className="fs-6 p-1 px-3 bg-tertiary h2h6">
          In oculis quidem
        </h2>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col text-center">
        <h3 className="fw-light">
          Epicurus in malis dolor non emolumento
        </h3>
      </div>
    </div>
    <div className="row gx-5">
      {cardItems.map((item) => (
        <div className="col-lg-4 col-md-6">
          <Card text={item.text} link={item.link} />
        </div>
      ))}
    </div>
  </Container>
);

export default CardsSeven;
