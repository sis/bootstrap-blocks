import Card from '../components/Card';
import {cardItems} from "../data/cards"

const CardsSeven = () => (
  <section className="container d-flex flex-column justify-content-center big-y-padding">
    <div className="row mb-5">
      <div className="col-xs-12 d-flex justify-content-center mb-1">
        <h2 className="fs-6 p-1 px-3 bg-tertiary">
          In oculis quidem
        </h2>
      </div>
      <div className="col-xs-12 text-center">
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
  </section>
);

export default CardsSeven;
