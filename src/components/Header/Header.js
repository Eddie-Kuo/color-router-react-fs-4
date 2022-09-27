import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <ul className='links'>
          <NavLink className='blue' activeStyle={{ color: `rgb(30,144,255)` }} to="/rgb/30/144/255">Dodger Blue</NavLink>
          <NavLink className='green' activeStyle={{ color: `rgb(50,205,50)` }} to="/rgb/50/205/50">Lime Green</NavLink>
          <NavLink className='orchid' activeStyle={{ color: `rgb(153,50,204)` }} to="/rgb/153/50/204">Dark Orchid</NavLink>
        </ul>
        {/* Nav links come with an active class that can be styled in css directly  */}
      </header>

      <Switch>
        <Route exact path={`/rgb/:red/:green/:blue`} component={Home} ></Route>
        <Route path="*" component={NotFound} ></Route>

      </Switch>
    </>
  );
}

// style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}