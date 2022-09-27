import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <NavLink to="/rgb/30/144/255">Dodger Blue</NavLink>
        </div>
        {/* Nav links come with an active class that can be styled in css directly  */}
        <div>
          <NavLink to="/rgb/50/205/50">Lime Green</NavLink>
        </div>
        <div>
          <NavLink to="/rgb/153/50/204">Dark Orchid</NavLink>
        </div>
      </header>

      <Switch>
        <Route path={`/rgb/:red/:green/:blue`} component={Home} ></Route>
      </Switch>
    </>
  );
}
