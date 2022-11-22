import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

const App = () => {
  const url = '/users';

  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <div classname='App'>
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
      <div>
        <Button
          variant='contained'
          onClick={() => {
            fetch(url, { method: 'GET' })
              .then((res) => res.json())
              .then((data) => {
                setUsers(data);
              })
              .catch((err) => {
                console.log(err);
                console.log('err');
              });
          }}
        >
          cssなくてもいい感じのボタン
        </Button>
      </div>
    </div>
  );
};

export default App;
