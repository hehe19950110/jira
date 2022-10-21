import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadServer, DevTools} from 'jira-dev-tool';
import { AppProviders } from './context/context-index';
import 'antd/dist/antd.less'
//在jira-dev-tool 后面 引入antd.less

loadServer( () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <DevTools />
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  );
})


reportWebVitals();
