import React from 'react';
import ReactDOM from 'react-dom'

import App from './components/App';
import './methods';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

console.log('Running on client only');

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('root'));
});
