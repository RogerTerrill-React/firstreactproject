import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewApp />, document.getElementById('root'));
registerServiceWorker();
