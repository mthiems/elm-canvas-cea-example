import './main.css';
import { Elm } from './Trees.elm';
import * as serviceWorker from './serviceWorker';

import 'elm-canvas';

Elm.Trees.init({
  node: document.getElementById('root'),
  flags: Math.random()
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
