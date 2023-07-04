import React, { useState } from 'react';
import Login from './Login';
import Alert from './Alert';

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (isValid) => {
    if (isValid) {
      setAlertMessage('¡Sesión iniciada correctamente!');
    } else {
      setAlertMessage('Los datos ingresados no son correctos');
    }
  };

  return (
    <div>
      <Alert message={alertMessage} type={alertMessage.includes('correctamente') ? 'success' : 'danger'} />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;
