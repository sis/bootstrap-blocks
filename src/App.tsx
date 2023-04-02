import CardsSeven from "./blocks/CardsSeven";
import {useState, useMemo} from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Third from "./blocks/Third";
import FunctionalLayouts3 from "./blocks/FunctionalLayouts3";

const navItems = [
  {
    name: 'Cards 7',
    component: CardsSeven,
  },
  {
    name: 'Functional layouts 3',
    component: FunctionalLayouts3,
  },
  {
    name: 'Third',
    component: Third
  }
];

function App() {
  const [selected, setSelected] = useState(navItems[0].name);

  const Component = useMemo(() => {
    return navItems.find(({ name }) => name === selected)?.component;
  }, [selected]);

  return (
    <>
      <Nav pills className="p-2">
        {navItems.map((item) => (
          <NavItem>
            <NavLink href="#" active={selected === item.name} onClick={() => setSelected(item.name)}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <div className="d-flex flex-grow-1 flex-column justify-content-center">
        {Component && <Component />}
      </div>
    </>
  )
}

export default App
