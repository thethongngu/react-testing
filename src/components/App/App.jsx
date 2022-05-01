import './App.css'
import React, { useState, useEffect } from 'react';
import { fetchAllNews } from '../../utility';
import { STATUS_FETCHING, STATUS_FETCH_FAIL, STATUS_FETCH_SUCCESS } from '../../constant';
import { HomePage } from '../HomePage/HomePage';

function App() {

  const [fetchStatus, setFetchStatus] = useState(STATUS_FETCHING);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchAllNews()
      .then((response) => {
        const [data, err] = response;
        if (err !== null) {
          setFetchStatus(STATUS_FETCH_FAIL);
          return;
        }

        setNewsData(data.articles);
        setFetchStatus(STATUS_FETCH_SUCCESS);
      });
  }, []);

  function getMainPage() {
    if (fetchStatus === STATUS_FETCH_SUCCESS) {
      return <HomePage newsData={newsData}/>;
    } else if (fetchStatus === STATUS_FETCH_FAIL) {
      return <p> Cannot get data from server </p>
    } else {
      return <p> Contacting journalist... </p>
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        News
      </header>
      <main>
        {getMainPage()}
      </main>
    </div>
  );
}

export default App;
