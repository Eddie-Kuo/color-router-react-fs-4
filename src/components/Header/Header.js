import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to="/rgb/30/144/255">Dodger Blue</NavLink>
      </div>
      <div>
        <NavLink to="/rgb/50/205/50">Lime Green</NavLink>
      </div>
      <div>
        <NavLink to="/rgb/153/50/204">Dark Orchid</NavLink>
      </div>

      <Switch>
        <Route path="/rgb/30/144/255" component={Blue} ></Route>
        <Route path="/rgb/50/205/50" component={Green} ></Route>
        <Route path="/rgb/153/50/204" component={Orchid} ></Route>
      </Switch>

    </header>
  );
}
