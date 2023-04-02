import PlaceholderImage from "../PlaceholderImage";
import {Card as BootstrapCard, CardBody, CardTitle, Col, Row} from "reactstrap";

interface Props {
  text: string;
  link: string;
}

const Card = ({ text, link }: Props) => (
  <BootstrapCard className="mb-5">
    <div className="row">
      <div className="col-md-5">
        <PlaceholderImage />
      </div>
      <div className="col-md-7 d-flex p-0">
        <CardBody className="d-flex flex-column justify-content-between py-4 pe-4">
          <CardTitle tag="h5" className="fw-light">
            {text}
          </CardTitle>
          <a href="#" className="card-link">
            {link}
          </a>
        </CardBody>
      </div>
    </div>
  </BootstrapCard>
);

export default Card;
