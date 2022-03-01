import './widget.less';
import './assets/linearicons.css';
import './assets/photoswipe.css';
import './assets/default-skin.css';
// Comment next line for production
// import 'react-devtools';
import React from 'react';
import { render } from 'react-dom';
import Widget from './containers/Widget';

const target = document.getElementById('mount');
render(<Widget />, target);
