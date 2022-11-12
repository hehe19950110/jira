import { ErrorBoundary } from 'component/error-boundary';
import { FullPageErrorFallback, FullPageLoading } from 'component/lib';
import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
// import { AuthenticatedApp } from './authenticated-app';
// import { UnauthenticatedApp } from './unauthenticated-app';

const apiUrl = process.env.REACT_APP_API_URL;

const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <React.Suspense fallback={<FullPageLoading />} >
         {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
        
      </ErrorBoundary>
    </div>
  );
}

export default App;
