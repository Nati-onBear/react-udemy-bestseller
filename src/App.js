import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

function App() {
  const [ usersState, setUsersState ] = useState({
    users: [
      { username: 'Bear' },
      { username: 'NTTThuy' },
      { username: 'Barry Bear' }
    ]
  })

  const changedNameHandler = (event) => {
    setUsersState({
      users: [
        { username: event.target.value },
        { username: event.target.value },
        { username: 'Barry Bear' }
      ]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello, I'm learning React again!</h1>
      <UserInput changed={changedNameHandler} name={usersState.users[2].username}/>
      {
        usersState.users.map(user => (
          <div className='User-display'>
            <UserOutput username={user.username} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
