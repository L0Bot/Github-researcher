import { NavLink } from 'react-router-dom';
import { Menu as MenuUI } from 'semantic-ui-react';

function Menu() {
  return (
    <MenuUI>
      <MenuUI.Item as={NavLink} to="/">
        Recherche
      </MenuUI.Item>
      <MenuUI.Item as={NavLink} to="/faq">
        FAQ
      </MenuUI.Item>
    </MenuUI>
  );
}

export default Menu;
