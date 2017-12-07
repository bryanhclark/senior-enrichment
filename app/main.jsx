'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import CampusList from './components/CampusList'
import StudentList from './components/StudentList'
import Home from './components/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Home />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)