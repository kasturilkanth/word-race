import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home';
import WordRace from './pages/WordRace';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} element={<Home />} />
        <Route path={'/play'} element={<WordRace />} />
      </Switch>
    </Router>
  );
};

export default Routes;
