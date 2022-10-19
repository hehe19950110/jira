import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { UnauthenticatedApp } from './unauthenticated-app';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const {user} = useAuth()
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "jack",
      password: "123456",
    }),
  }).then((res) => {
    debugger;
  });

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
