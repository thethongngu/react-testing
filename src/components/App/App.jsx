import './App.css'
import React, { useState, useEffect } from 'react';
import { fetchAllNews } from '../../utility';
import { STATUS_FETCHING, STATUS_FETCH_FAIL, STATUS_FETCH_SUCCESS } from '../../constant';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { ArticlePage } from '../ArticlePage/ArticlePage';

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

  return (
    <div className="app">
      <header className="app-header">
        Title here
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage newsData={newsData}/>} />
          <Route path="article" element={<ArticlePage newsData={newsData} articleId={0} />} >
            <Route path=":articleId" element={<ArticlePage newsData={newsData} articleId={0} />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
