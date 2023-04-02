import {stats} from "../data/stats";
import PlaceholderImage from "../PlaceholderImage";
import {Placeholder} from "reactstrap";

const Splits2 = () => (
  <div className="row flex-grow-1 text-white">
    <div className="col-md-6 background-image-mac">
    </div>
    <div className="col-md-6 bg-black f-white d-flex flex-column justify-content-center p-5">
        <h2 className="mb-5 fw-light">
          Sunt autem nusquam hoc tenebo si ob aliquam causam
        </h2>
        <p className="mb-4">
          In quo enim ipsam per se esse appetendum alterum esse fugiendum itaque aiunt hanc quasi naturalem atque natum sit a sapiente
        </p>
        <p className="mb-5">
          Delectus ut et voluptates repudiandae sint et iusto odio dignissimos ducimus qui haec putat ut de homine.
        </p>
        <div className="row">
          {stats.map((stat) => (
            <div className="col-md-4">
              <div className="row">
                <div className="col-xs-12 fs-1">
                  <b>
                    {stat.number}
                  </b>
                </div>
                <div className="col-xs-12">
                  <p>
                    {stat.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Splits2;
