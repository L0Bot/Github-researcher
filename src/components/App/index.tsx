import { Image } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import githubLogo from '../../assets/images/logo-github.png';
import './styles.scss';
import Home from '../../pages/Home';
import Faq from '../../pages/Faq';
import Menu from '../Menu';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Image src={githubLogo} size="small" centered />
        <Menu />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
      </Routes>
    </div>
  );
}

export default App;
