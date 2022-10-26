import './why-did-you-render';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadServer, DevTools} from 'jira-dev-tool';
import { AppProviders } from './context/context-index';
import 'antd/dist/antd.less'
//在jira-dev-tool 后面 引入antd.less

loadServer( () => {
  
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


reportWebVitals();
