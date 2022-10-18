import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { UnauthenticatedApp } from './unauthenticated-app';


function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
      {/* <LoginScreen /> */}

      {user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </div>
  );
}

export default App;
