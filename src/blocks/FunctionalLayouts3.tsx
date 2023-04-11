import {Card, CardBody, CardTitle} from "reactstrap";
import {cards2} from "../data/cards2";
import styled from 'styled-components';
import {useState} from "react";

const StyledCard = styled(Card)<{ active: boolean }>`
  position: relative;
  border: solid 1px #232323;
  border-radius: 5px;
  cursor: pointer;
  
  ${({ active }) => active && (`
    border-color: #FFF;
  `)}
`;

const ATag = styled.a`
  color: #304ffe;
  border-bottom: solid 1px #304ffe;
`;

const StyledCardText = styled.p`
  color: rgba(255, 255, 255, 0.6);
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
`;

const FunctionalLayouts3 = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const onClick = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((x) => x !== index))
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <section className="bg-black py-5 big-y-padding">
      <div className="container">
        <div className="row mb-5">
          <h2 className="col-xs-12 col-md-8 text-white text-center fw-light mx-auto">
            Et quidem rerum facilis est consecutus laudem et dolorum <ATag href="#">effugiendorum</ATag> gratia
          </h2>
        </div>
        <div className="row g-5">
          {cards2.map((card, index) => (
            <div className="col-lg-3 col-md-4">
              <StyledCard
                className="bg-black text-white"
                onClick={() => onClick(index)}
                active={selected.includes(index)}
              >
                <CardBody>
                  <div className="mb-2">
                    <i className="bi-grid"></i>
                  </div>
                  <CardTitle className="mb-2">
                    {card.title}
                  </CardTitle>
                  <StyledCardText>
                    {card.text}
                  </StyledCardText>
                </CardBody>
                {selected.includes(index) && (
                  <CheckIconWrapper>
                    <i className="bi-check2 fs-4"></i>
                  </CheckIconWrapper>
                )}
              </StyledCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunctionalLayouts3;
