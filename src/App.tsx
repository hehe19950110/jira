import { ErrorBoundary } from 'component/error-boundary';
import { FullPageErrorFallback } from 'component/lib';
import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { UnauthenticatedApp } from './unauthenticated-app';

const apiUrl = process.env.REACT_APP_API_URL;


function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
