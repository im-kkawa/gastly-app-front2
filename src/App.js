import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Header from './components/header';
import ApplicationBar from './components/applicationBar';
import SearchCondition from './components/searchCondition';
import SearchResult from './components/searchResult';

const App = () => {
  const url = '/users';

  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <div classname='App'>
      <Header />
      <ApplicationBar />
      <SearchCondition />
      <SearchResult />
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
          TEST
        </Button>
      </div>
    </div>
  );
};

export default App;
