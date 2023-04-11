import {stats} from "../data/stats";

const Splits2 = () => (
  <section className="container-fluid text-white">
    <div className="row">
      <div className="col-xs-12 col-lg-6 position-relative bg-white big-y-padding">
        <img src="https://www.laptopsdirect.co.uk/Images/MKGT3BA_4_Supersize.jpg?v=2" alt="Apple Macbook" className="image-fit" />
      </div>
      <div className="col-xs-12 col-lg-6 bg-black big-y-padding p-5">
        <div className="col-xs-12 col-md-8 mx-auto">
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
                <div className="row flex-column">
                  <div className="col fs-1">
                    <b>
                      {stat.number}
                    </b>
                  </div>
                  <div className="col">
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
    </div>
  </section>
);

export default Splits2;
