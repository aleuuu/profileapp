import './index.css';
import MainPage from './components/MainPage';
import FirstPage from './components/FirstPage';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Back from './img/nature.mp4'


import { useEffect, useRef } from 'react';
import {TweenMax, Power3} from 'gsap'


function App() {
  return (
    <Router>
          <video
            autoPlay
            Loop
            muted>
              <source src={Back}/>
          </video>
      <Switch>
        <Route path='/1'>
          <FirstPage></FirstPage>
        </Route>
        <Route path='/'>
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
